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

  const [dishQuantities, setDishQuantities] = useState(
    JSON.parse(localStorage.getItem('dishQuantities')) || {}
  )
  const navigate = useNavigate()

  function handleClick() {
    navigate(-1)
  }

  const handleAddDish = id => {
    setDishQuantities(prevQuantities => {
      const updatedQuantities = { ...prevQuantities }
      updatedQuantities[id] = (updatedQuantities[id] || 0) + 1
      localStorage.setItem('dishQuantities', JSON.stringify(updatedQuantities))
      return updatedQuantities
    })
  }

  const handleRemoveDish = id => {
    if (dishQuantities[id] > 0) {
      setDishQuantities(prevQuantities => {
        const updatedQuantities = { ...prevQuantities }
        updatedQuantities[id] = prevQuantities[id] - 1
        localStorage.setItem(
          'dishQuantities',
          JSON.stringify(updatedQuantities)
        )
        return updatedQuantities
      })
    }
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
            {dishData.ingredients.split(',').map((ingredient, index) => (
              <Tag key={index} title={ingredient.trim()} />
            ))}

            <footer>
              <ButtonText
                icon={AiOutlineMinus}
                onClick={() => handleRemoveDish(params.id)}
              />
              <span>{dishQuantities[params.id] || 0}</span>
              <ButtonText
                icon={AiOutlinePlus}
                onClick={() => handleAddDish(params.id)}
              />
              <Button title={`incluir ∙ ${dishData.price}`} />
            </footer>
          </div>
        </main>
      </Content>
      <Footer />
    </Container>
  )
}
