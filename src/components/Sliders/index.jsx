import { useState, useEffect } from 'react'
import { Container } from './style'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button } from '../Button'
import { ButtonText } from '../ButtonText'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import Image01 from '../../assets/Mask group-1.png'
import Image02 from '../../assets/Mask group-2.png'

import 'swiper/css'
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

export function Sliders({ updateOrderItems }) {
  const [slidePerview, setSlidePerview] = useState(3)
  const [itemQuantities, setItemQuantities] = useState({})
  const [orderItems, setOrderItems] = useState([])

  function handleIncludeItem(item) {
    setOrderItems(prevItems => [...prevItems, item])
    updateOrderItems(prevItems => [...prevItems, item])
  }

  function handleIncrement(id) {
    setItemQuantities(prevQuantities => {
      const updatedQuantities = {
        ...prevQuantities,
        [id]: Math.min((prevQuantities[id] || 0) + 1, 5)
      }
      return updatedQuantities
    })
  }

  function handleDecrement(id) {
    setItemQuantities(prevQuantities => {
      const updatedQuantities = {
        ...prevQuantities,
        [id]: Math.max((prevQuantities[id] || 1) - 1, 1)
      }
      return updatedQuantities
    })
    // Verifica se o item está no pedido e, se sim, o remove
    if (orderItems.some(item => item.id === id)) {
      const updatedOrderItems = orderItems.filter(item => item.id !== id)
      setOrderItems(updatedOrderItems)
      updateOrderItems(updatedOrderItems)
    }
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePerview(1)
      } else {
        setSlidePerview(2)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const initialQuantities = {}
    data.forEach(item => {
      initialQuantities[item.id] = 1
    })
    setItemQuantities(initialQuantities)
  }, [])

  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={27}
        slidesPerView={slidePerview}
        navigation
        pagination={false}
        scrollbar={{ draggable: true }}
      >
        {data.map(item => (
          <SwiperSlide key={item.id} className="slider">
            <img src={item.image} alt="slider" className="slide-item" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <span>R$ {item.price} </span>
            <footer>
              <ButtonText
                icon={AiOutlineMinus}
                onClick={() => handleDecrement(item.id)}
              />
              <span>0{itemQuantities[item.id] || 0}</span>
              <ButtonText
                icon={AiOutlinePlus}
                onClick={() => handleIncrement(item.id)}
              />
              <Button title="Incluir" onClick={() => handleIncludeItem(item)} />
            </footer>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
