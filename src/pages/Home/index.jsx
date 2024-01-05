import { Container, Content } from './style'
import HomeIMG from '../../assets/HomeIMG.png'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <div className="box">
          <img src={HomeIMG} alt="Chuva de hambúrgueres" />
          <div className="text">
            <h2>Sabores inigualáveis</h2>
            <span>
              Sinta o cuidado do preparo com ingredientes selecionados
            </span>
          </div>
        </div>
        <Section title="Refeições"></Section>
      </Content>
      <Footer />
    </Container>
  )
}
