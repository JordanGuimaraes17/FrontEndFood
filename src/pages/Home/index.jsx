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
        const response = await api.get('/category')
        setCategories(response.data)
      } catch (error) {
        console.error('Error fetching categories', error)
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
          {categories.map(category => (
            <Section
              key={category.id}
              className="sliders"
              title={category.name}
            >
              <Sliders />
            </Section>
          ))}
        </main>
      </Content>
      <Footer />
    </Container>
  )
}
