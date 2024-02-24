import { useState, useEffect } from 'react'
import { Container } from './style'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button } from '../Button'
import { ButtonText } from '../ButtonText'
import { GoPencil } from 'react-icons/go'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export function Sliders({ category, searchTerm }) {
  const navigate = useNavigate()
  const { dishQuantities, setDishQuantities } = useAuth({})
  const [dishesByCategory, setDishesByCategory] = useState([])

  const handleClick = (rota, id) => {
    navigate(`${rota}/${id}`)
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
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) && (
              <SwiperSlide key={item.id} className="slider">
                <ButtonText
                  icon={GoPencil}
                  className="svg"
                  onClick={() => handleClick('/editDishes', item.id)}
                />
                <img
                  src={item.avatar}
                  alt="slider"
                  onClick={() => handleClick('/dishesAdmin', item.id)}
                  className="slide-item"
                />
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
