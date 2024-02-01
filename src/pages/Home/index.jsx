import { Container, Content } from './style'
import HomeIMG from '../../assets/HomeIMG.png'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Sliders } from '../../components/Sliders'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

export function Home() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await api.get(`/category`)
        setCategories(response.data)
      } catch (error) {
        console.error('Erro ao obter dados dos pratos', error)
      }
    }
    fetchCategories()
  }, [])

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
          {categories.map(item => (
            <Section key={item.id} title={item.name} className="sliders">
              <Sliders />
            </Section>
          ))}
        </main>
      </Content>
      <Footer />
    </Container>
  )
}
