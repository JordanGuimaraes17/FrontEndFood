import { Container } from './style'
import { Button } from '../Button'
import { ButtonText } from '../ButtonText'
import { Input } from '../Input'
import PolygonSvg from '../../assets/Polygon 1.svg'
import { CiLogin, CiReceipt, CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

export function Header() {
  const { signOut } = useAuth()
  const navigate = useNavigate()
  function handleSignOut() {
    navigate('/')
    signOut()
  }
  const handleNavegacao = rota => {
    navigate(rota)
  }
  return (
    <Container>
      <img src={PolygonSvg} alt="logo" />
      <h1 onClick={() => handleNavegacao('/')}>food explorer</h1>
      <Input placeholder="Busque por pratos ou ingredientes" icon={CiSearch} />
      <Button
        className="new"
        icon={CiReceipt}
        title={`Pedidos `}
        onClick={() => handleNavegacao('/wish/:id')}
      />
      <ButtonText icon={CiLogin} onClick={handleSignOut} />
    </Container>
  )
}
