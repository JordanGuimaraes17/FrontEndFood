import { Container, Content } from './style'
import HomeIMG from '../../assets/HomeIMG.png'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Sliders } from '../../components/Sliders'

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <main>
          <div className="box">
            <img src={HomeIMG} alt="Chuva de hambúrgueres" />
            <div className="text">
              <h2>Sabores inigualáveis</h2>
              <span>
                Sinta o cuidado do preparo com ingredientes selecionados
              </span>
            </div>
          </div>
          <Section className="sliders" title="Refeições">
            <Sliders />
          </Section>
          <Section className="sliders" title="Sobremessas">
            <Sliders />
          </Section>
          <Section className="sliders" title="Bebidas">
            <Sliders />
          </Section>
        </main>
      </Content>

      <Footer />
    </Container>
  )
}
