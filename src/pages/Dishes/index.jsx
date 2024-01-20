import { Container, Content } from './style'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
import { HiOutlineChevronLeft } from 'react-icons/hi2'
import Image01 from '../../assets/Mask group-1.png'
import { Button } from '../../components/Button'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export function Dishes() {
  return (
    <Container>
      <Header />

      <Content>
        <ButtonText title="voltar" icon={HiOutlineChevronLeft} />
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
              <ButtonText icon={AiOutlineMinus} />
              <span>01</span>
              <ButtonText icon={AiOutlinePlus} />
              <Button title="incluir ∙ R$ 25,00" />
            </footer>
          </div>
        </main>
      </Content>
      <Footer />
    </Container>
  )
}
