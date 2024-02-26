import { useState, useEffect } from 'react'
import { Container } from './style'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button } from '../Button'
import { ButtonText } from '../ButtonText'
import { GoPencil } from 'react-icons/go'
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineHeart,
  AiFillHeart
} from 'react-icons/ai'

import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utils/roles'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export function Sliders({ category, searchTerm }) {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [dishQuantities, setDishQuantities] = useState(
    JSON.parse(localStorage.getItem('dishQuantities')) || {}
  )
  const [dishesByCategory, setDishesByCategory] = useState([])
  const [favoriteDishes, setFavoriteDishes] = useState(
    JSON.parse(localStorage.getItem('favoriteDishes')) || {}
  )

  const handleClick = (rota, id) => {
    navigate(`${rota}/${id}`)
  }

  const handleToggleFavorite = id => {
    setFavoriteDishes(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }))
  }

  const handleAddDish = id => {
    setDishQuantities(prevQuantities => {
      const updatedQuantities = { ...prevQuantities }
      updatedQuantities[id] = (updatedQuantities[id] || 0) + 1
      return updatedQuantities
    })
  }

  const handleRemoveDish = id => {
    if (dishQuantities[id] > 0) {
      setDishQuantities(prevQuantities => ({
        ...prevQuantities,
        [id]: prevQuantities[id] - 1
      }))
    }
  }

  const handleAddToOrder = async id => {
    try {
      if (dishQuantities[id] > 0) {
        const response = await api.post('/orders', {
          dish_id: id,
          quantity: dishQuantities[id]
        })
      }
    } catch (error) {
      console.error('Erro ao adicionar pedido:', error)
    }
  }

  useEffect(() => {
    localStorage.setItem('dishQuantities', JSON.stringify(dishQuantities))
  }, [dishQuantities])

  useEffect(() => {
    localStorage.setItem('favoriteDishes', JSON.stringify(favoriteDishes))
  }, [favoriteDishes])

  useEffect(() => {
    async function fetchData() {
      try {
        const responseDishes = await api.get(`/dishes`)
        const dishesData = responseDishes.data.map(item => ({
          ...item,
          avatar: `${api.defaults.baseURL}/files/${item.avatar}`
        }))

        // Agrupar pratos por categoria
        const groupedDishes = {}
        dishesData.forEach(item => {
          if (!groupedDishes[item.category_id]) {
            groupedDishes[item.category_id] = []
          }
          groupedDishes[item.category_id].push(item)
        })

        setDishesByCategory(groupedDishes)
      } catch (error) {
        console.error('Erro ao obter dados dos pratos', error)
      }
    }

    fetchData()
  }, [])

  return (
    <Container>
      <Swiper
        effect={'coverflow'}
        modules={[Navigation, Pagination, EffectCoverflow]}
        spaceBetween={15}
        slidesPerView={3.4}
        centeredSlides={true}
        loop={true}
        navigation
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5
        }}
      >
        {dishesByCategory[category.id]?.map(
          item =>
            // Verifica se o nome do prato inclui o termo de busca
            (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.ingredients
                .toLowerCase()
                .includes(searchTerm.toLowerCase())) && (
              <SwiperSlide key={item.id} className="slider">
                {user.role === USER_ROLE.ADMIN && (
                  <>
                    <ButtonText
                      icon={GoPencil}
                      className="svg"
                      onClick={() => handleClick('/editDishes', item.id)}
                    />
                  </>
                )}

                {user.role === USER_ROLE.CUSTOMER && (
                  <>
                    <ButtonText
                      icon={
                        favoriteDishes[item.id] ? AiFillHeart : AiOutlineHeart
                      }
                      className={`svg ${
                        favoriteDishes[item.id] ? 'ativo' : ''
                      }`}
                      onClick={() => handleToggleFavorite(item.id)}
                    />
                  </>
                )}

                {user.role === USER_ROLE.ADMIN && (
                  <>
                    <img
                      src={item.avatar}
                      alt="slider"
                      onClick={() => handleClick('/dishesAdmin', item.id)}
                      className="slide-item"
                    />
                  </>
                )}
                {user.role === USER_ROLE.CUSTOMER && (
                  <>
                    <img
                      src={item.avatar}
                      alt="slider"
                      onClick={() => handleClick('/dishes', item.id)}
                      className="slide-item"
                    />
                  </>
                )}

                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <span>R$ {item.price} </span>
                <footer>
                  <ButtonText
                    icon={AiOutlineMinus}
                    onClick={() => handleRemoveDish(item.id)}
                  />
                  <span className="number">
                    {dishQuantities[item.id] || 0}{' '}
                  </span>
                  <ButtonText
                    icon={AiOutlinePlus}
                    onClick={() => handleAddDish(item.id)}
                  />
                  <Button
                    title="Incluir"
                    onClick={() => handleAddToOrder(item.id)}
                  />
                </footer>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </Container>
  )
}
