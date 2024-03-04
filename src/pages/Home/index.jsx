import { Container, Content } from './style'
import HomeIMG from '../../assets/HomeIMG.png'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Sliders } from '../../components/Sliders'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { Menu } from '../../components/menu'

export function Home() {
  const [categories, setCategories] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [menuIsOpen, setMenuIsOpen] = useState(false)
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

  const handleSearchChange = term => {
    setSearchTerm(term)
  }

  return (
    <Container>
      <Menu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />
      <Header
        onOpenMenu={() => setMenuIsOpen(true)}
        onSearchChange={handleSearchChange}
      />
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
          <div className="container">
            {categories.map(category => (
              <Section
                key={category.id}
                title={category.name}
                className="sliders"
              >
                {/* Passando o termo de busca para o componente Sliders */}
                <Sliders category={category} searchTerm={searchTerm} />
              </Section>
            ))}
          </div>
        </main>
      </Content>
      <Footer />
    </Container>
  )
}
