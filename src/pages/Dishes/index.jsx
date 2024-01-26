import { Container, Content } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
import { HiOutlineChevronLeft } from 'react-icons/hi2'
import { Button } from '../../components/Button'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export function Dishes() {
  const data = [
    {
      price: 25.15,
      id: 1,
      description:
        'Presunto de parma e rúcula em um pão com fermentação natural.',
      name: 'Imagem 1',
      ingredients: 'arroz, feijão, ovos, carnes',
      image:
        'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHx8Mg%3D%3D'
    }
  ]
  const navigate = useNavigate()

  function handleClick() {
    navigate(-1)
  }
  return (
    <Container>
      <Header />

      <Content>
        <ButtonText
          title="voltar"
          icon={HiOutlineChevronLeft}
          onClick={handleClick}
        />
        {data.map(item => (
          <main key={item.id}>
            <img src={item.image} alt="" />
            <div>
              <h1>{item.name}</h1>
              <p>{item.description}</p>

              {/* Dividindo a string de ingredientes em um array */}
              {item.ingredients.split(', ').map((ingredient, index) => (
                <Tag key={index} title={ingredient} />
              ))}

              <footer>
                <ButtonText icon={AiOutlineMinus} />
                <span>01</span>
                <ButtonText icon={AiOutlinePlus} />
                <Button title={`incluir ∙ ${item.price}`} />
              </footer>
            </div>
          </main>
        ))}
      </Content>
      <Footer />
    </Container>
  )
}
