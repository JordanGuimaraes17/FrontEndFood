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

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export function Sliders({ category }) {
  const navigate = useNavigate()

  const [dishesByCategory, setDishesByCategory] = useState({})

  const handleClick = (rota, id) => {
    navigate(`${rota}/${id}`)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        // Obter pratos
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
        loop={false}
        navigation
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5
        }}
      >
        {dishesByCategory[category.id]?.map(item => (
          <SwiperSlide key={item.id} className="slider">
            <ButtonText
              icon={GoPencil}
              className="svg"
              onClick={() => handleClick('/editDishes', item.id)}
            />
            <img
              src={item.avatar}
              alt="slider"
              onClick={() => handleClick('/dishes', item.id)}
              className="slide-item"
            />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <span>R$ {item.price} </span>
            <footer>
              <ButtonText icon={AiOutlineMinus} />
              <span> 0</span>
              <ButtonText icon={AiOutlinePlus} />
              <Button title="Incluir" />
            </footer>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
