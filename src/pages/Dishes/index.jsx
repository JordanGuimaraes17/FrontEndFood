import { Container, Content } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
import { HiOutlineChevronLeft } from 'react-icons/hi2'
import { Button } from '../../components/Button'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../services/api'
import { useState, useEffect } from 'react'

export function Dishes() {
  const params = useParams()
  const [dishData, setDishData] = useState({
    name: '',
    description: '',
    ingredients: '',
    avatar: '',
    price: ''
  })
  const navigate = useNavigate()
  function handleClick() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/dishes/${params.id}`)
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
      <Header />

      <Content>
        <ButtonText
          title="voltar"
          icon={HiOutlineChevronLeft}
          onClick={handleClick}
        />

        <main>
          <img src={dishData.avatar} alt="" />
          <div>
            <h1>{dishData.name}</h1>
            <p>{dishData.description}</p>

            {/* Dividindo a string de ingredientes em um array */}
            {dishData.ingredients.split(', ').map((ingredient, index) => (
              <Tag key={index} title={ingredient} />
            ))}

            <footer>
              <ButtonText icon={AiOutlineMinus} />
              <span>01</span>
              <ButtonText icon={AiOutlinePlus} />
              <Button title={`incluir ∙ ${dishData.price}`} />
            </footer>
          </div>
        </main>
      </Content>
      <Footer />
    </Container>
  )
}
