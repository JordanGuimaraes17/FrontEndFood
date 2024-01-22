import { useState, useEffect } from 'react'
import { Container } from './style'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button } from '../Button'
import { ButtonText } from '../ButtonText'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import { useNavigate } from 'react-router-dom'
import Image01 from '../../assets/Mask group-1.png'
import Image02 from '../../assets/Mask group-2.png'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
const data = [
  {
    price: 25.15,
    id: 1,
    description:
      'Presunto de parma e rúcula em um pão com fermentação natural.',
    name: 'Imagem 1',
    image: Image01
  },
  {
    description:
      'Presunto de parma e rúcula em um pão com fermentação natural.',
    price: 20.15,
    id: 2,
    name: 'Imagem 2',
    image: Image02
  },
  {
    description:
      'Presunto de parma e rúcula em um pão com fermentação natural.',
    price: 35.15,
    id: 3,
    name: 'Imagem 3',
    image:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHx8Mg%3D%3D'
  },
  {
    description:
      'Presunto de parma e rúcula em um pão com fermentação natural.',
    price: 28.15,
    id: 4,
    name: 'Imagem 4',
    image: Image01
  },
  {
    description:
      'Presunto de parma e rúcula em um pão com fermentação natural.',
    price: 42.15,
    id: 5,
    name: 'Imagem 5',
    image:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHx8Mg%3D%3D'
  },
  {
    description:
      'Presunto de parma e rúcula em um pão com fermentação natural.',
    price: 18.18,
    id: 6,
    name: 'Imagem 6',
    image: Image02
  },
  {
    description:
      'Presunto de parma e rúcula em um pão com fermentação natural.',
    price: 22.15,
    id: 7,
    name: 'Imagem 7',
    image:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHx8Mg%3D%3D'
  },
  {
    description:
      'Presunto de parma e rúcula em um pão com fermentação natural.',
    price: 32.15,
    id: 8,
    name: 'Imagem 8',
    image: Image02
  }
]

export function Sliders({ updateOrderDishes }) {
  const navigate = useNavigate()

  const handleNavegacao = rota => {
    navigate(rota)
  }

  const [dishesQuantities, setDishesQuantities] = useState({})
  const [orderDishes, setOrderDishes] = useState([])

  function handleIncludeDishes(item) {
    setOrderDishes(prevItems => [...prevItems, item])
    updateOrderDishes(prevItems => [...prevItems, item])
  }

  function handleIncrement(id) {
    setDishesQuantities(prevQuantities => {
      const updatedQuantities = {
        ...prevQuantities,
        [id]: Math.min((prevQuantities[id] || 0) + 1, 5)
      }
      return updatedQuantities
    })

    // Verifica se o item está no pedido
    const orderItemIndex = orderDishes.findIndex(item => item.id === id)
    if (orderItemIndex !== -1) {
      // Se o item está no pedido, cria uma cópia do array de pedidos
      const updatedOrderItems = [...orderDishes]

      // Atualiza a quantidade do prato no array de pedidos
      updatedOrderItems[orderItemIndex].quantity++

      setOrderDishes(updatedOrderItems)
      updateOrderDishes(updatedOrderItems)
    }
  }

  function handleDecrement(id) {
    setDishesQuantities(prevQuantities => {
      const updatedQuantities = {
        ...prevQuantities,
        [id]: Math.max((prevQuantities[id] || 1) - 1, 1)
      }
      return updatedQuantities
    })

    // Verifica se o item está no pedido
    const orderItemIndex = orderDishes.findIndex(item => item.id === id)
    if (orderItemIndex !== -1) {
      // Se o item está no pedido, cria uma cópia do array de pedidos
      const updatedOrderItems = [...orderDishes]

      // Se a quantidade do prato for maior que 1, decrementa a quantidade
      if (updatedOrderItems[orderItemIndex].quantity > 1) {
        updatedOrderItems[orderItemIndex].quantity--
      } else {
        // Se a quantidade for 1, remove o item do array de pedidos
        updatedOrderItems.splice(orderItemIndex, 1)
      }

      setOrderDishes(updatedOrderItems)
      updateOrderDishes(updatedOrderItems)
    }
  }

  useEffect(() => {
    const initialQuantities = {}
    data.forEach(item => {
      initialQuantities[item.id] = 1
    })
    setDishesQuantities(initialQuantities)
  }, [])

  useEffect(() => {
    console.log('Pedido após incluir prato:', orderDishes)
  }, [orderDishes])

  return (
    <Container>
      <Swiper
        effect={'coverflow'}
        modules={[Navigation, Pagination, EffectCoverflow]}
        spaceBetween={15}
        slidesPerView={3.8}
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
        {data.map(item => (
          <SwiperSlide key={item.id} className="slider">
            <img
              src={item.image}
              alt="slider"
              onClick={() => handleNavegacao('/dishesAdmin')}
              className="slide-item"
            />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <span>R$ {item.price} </span>
            <footer>
              <ButtonText
                icon={AiOutlineMinus}
                onClick={() => handleDecrement(item.id)}
              />
              <span>0{dishesQuantities[item.id] || 0}</span>
              <ButtonText
                icon={AiOutlinePlus}
                onClick={() => handleIncrement(item.id)}
              />
              <Button
                title="Incluir"
                onClick={() => handleIncludeDishes(item)}
              />
            </footer>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
