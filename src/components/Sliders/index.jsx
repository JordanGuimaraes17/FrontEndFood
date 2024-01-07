import { useState, useEffect } from 'react'
import { Container } from './style'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button } from '../Button'
import { ButtonText } from '../ButtonText'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export function Sliders() {
  const data = [
    {
      price: 25.15,
      id: 1,
      name: 'Imagem 1',
      image:
        'https://images.unsplash.com/photo-1606131731446-5568d87113aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfHwwfHx8Mg%3D%3D'
    },
    {
      price: 20.15,
      id: 2,
      name: 'Imagem 2',
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHx8Mg%3D%3D'
    },
    {
      price: 35.15,
      id: 3,
      name: 'Imagem 3',
      image:
        'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHx8Mg%3D%3D'
    },
    {
      price: 28.15,
      id: 4,
      name: 'Imagem 4',
      image:
        'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnN8ZW58MHx8MHx8fDI%3D'
    },
    {
      price: 42.15,
      id: 5,
      name: 'Imagem 5',
      image:
        'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2Vyc3xlbnwwfHwwfHx8Mg%3D%3D'
    },
    {
      price: 18.18,
      id: 6,
      name: 'Imagem 6',
      image:
        'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1cmdlcnN8ZW58MHx8MHx8fDI%3D'
    },
    {
      price: 22.15,
      id: 7,
      name: 'Imagem 7',
      image:
        'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1cmdlcnN8ZW58MHx8MHx8fDI%3D'
    },
    {
      price: 32.15,
      id: 8,
      name: 'Imagem 8',
      image:
        'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2Vyc3xlbnwwfHwwfHx8Mg%3D%3D'
    }
  ]
  const [slidePerview, setSlidePerview] = useState(3)

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
            <p>Massa fresca com camarões e pesto. </p>
            <span>R$ {item.price}</span>
            <footer>
              <ButtonText icon={AiOutlineMinus} />
              <span>01</span>
              <ButtonText icon={AiOutlinePlus} />
              <Button title="incluir" />
            </footer>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
