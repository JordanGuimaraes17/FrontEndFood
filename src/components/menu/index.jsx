import { ButtonText } from '../ButtonText'
import { Footer } from '../Footer'
import { Input } from '../Input'
import PolygonSvg from '../../assets/Polygon 1.svg'
import { X, MagnifyingGlass } from '@phosphor-icons/react'
import { Container, Header, Content } from './style'
import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utils/roles'
export function Menu() {
  const { user } = useAuth()
  return (
    <Container>
      <Header>
        <ButtonText icon={X} />
        <h2>Menu</h2>
        <img className="img01" src={PolygonSvg} alt="logo" />
      </Header>

      <Content>
        <main>
          <Input
            placeholder="Busque por pratos ou ingredientes"
            icon={MagnifyingGlass}
          />
          {user.role === USER_ROLE.ADMIN && <span>Novo prato</span>}

          <div className="line"></div>
          <p>Sair</p>
          <div className="line"></div>
        </main>
      </Content>

      <Footer />
    </Container>
  )
}
