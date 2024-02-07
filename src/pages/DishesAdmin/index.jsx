import { Container, Content } from './style'
import { Header02 } from '../../components/Header02'
import { Footer } from '../../components/Footer'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
import { HiOutlineChevronLeft } from 'react-icons/hi2'
import { Button } from '../../components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

export function DishesAdmin() {
  const navigate = useNavigate()
  const params = useParams()
  const handleNavegacao = rota => {
    navigate(rota)
  }

  const [dishData, setDishData] = useState({
    name: '',
    description: '',
    ingredients: '',
    avatar: '',
    price: ''
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/dishesAdmin/${params.id}`)
        setDishData(response.data)

        const avatarUrl = `${api.defaults.baseURL}/files/${response.data.avatar}`
        setDishData(prevState => ({
          ...prevState,
          avatar: avatarUrl
        }))
      } catch (error) {
        console.error('Erro ao obter dados dos pratos', error)
      }
    }

    fetchData()
  }, [params.id])

  return (
    <Container>
      <Header02 />

      <Content>
        <ButtonText
          title="voltar"
          icon={HiOutlineChevronLeft}
          onClick={() => handleNavegacao(-1)}
        />
        <main>
          <img src={dishData.avatar} alt="imagem prato" />
          <div>
            <h1>{dishData.name}</h1>
            <p>{dishData.description}</p>

            {dishData.ingredients.split(',').map((ingredient, index) => (
              <Tag key={index} title={ingredient.trim()} />
            ))}

            <footer>
              <Button
                title="Editar prato"
                onClick={() => handleNavegacao(`/editDishes/${params.id}`)}
              />
            </footer>
          </div>
        </main>
      </Content>
      <Footer />
    </Container>
  )
}
