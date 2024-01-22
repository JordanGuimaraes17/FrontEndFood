import { Container, Content } from './style'
import { Header02 } from '../../components/Header02'
import { Footer } from '../../components/Footer'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
import { HiOutlineChevronLeft } from 'react-icons/hi2'
import Image01 from '../../assets/Mask group-1.png'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'

export function DishesAdmin() {
  const navigate = useNavigate()
  const handleNavegacao = rota => {
    navigate(rota)
  }

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
          <img src={Image01} alt="" />
          <div>
            <h1>Salada Ravanello</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              ipsum quia molestias eum doloremque a sequi! Animi, magnam!
              Corporis rerum nihil sequi consequatur, quam nam qui incidunt quos
              recusandae facilis?
            </p>

            <Tag title="arroz" />
            <Tag title="arroz" />
            <Tag title="arroz" />
            <Tag title="arroz" />
            <Tag title="arroz" />

            <footer>
              <Button
                title="Editar prato"
                onClick={() => handleNavegacao('/editDishes/:id')}
              />
            </footer>
          </div>
        </main>
      </Content>
      <Footer />
    </Container>
  )
}
