import { ButtonText } from '../ButtonText'
import { Footer } from '../Footer'
import { Input } from '../Input'
import PolygonSvg from '../../assets/Polygon 1.svg'
import { X, MagnifyingGlass } from '@phosphor-icons/react'
import { Container, Header, Content } from './style'
import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utils/roles'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function Menu({ menuIsOpen, onCloseMenu, onSearchChange }) {
  const { user, signOut } = useAuth()
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const handleNavegacao = rota => {
    navigate(rota)
  }
  function handleSignOut() {
    navigate('/')
    signOut()
  }

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get(`/dishes?name=${search}`)
      } catch (error) {
        console.error('Erro ao buscar pratos:', error)
      }
    }

    if (search !== '') {
      fetchDishes()
    }
  }, [search])

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <ButtonText onClick={onCloseMenu} icon={X} />
        <h2>Menu</h2>
        <img className="img01" src={PolygonSvg} alt="logo" />
      </Header>

      <Content>
        <main>
          <Input
            placeholder="Busque por pratos ou ingredientes"
            icon={MagnifyingGlass}
            onChange={e => {
              setSearch(e.target.value)
              // Chamando a função onSearchChange passada como propriedade
              onSearchChange(e.target.value)
            }}
          />

          {user.role === USER_ROLE.ADMIN && (
            <ButtonText
              title="Novo prato"
              onClick={() => handleNavegacao('/addDishes')}
            />
          )}

          <div className="line"></div>
          <ButtonText title="Sair" onClick={handleSignOut} />
          <div className="line"></div>
        </main>
      </Content>

      <Footer />
    </Container>
  )
}
