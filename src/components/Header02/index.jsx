import { Header } from './style'
import { Button } from '../Button'
import { ButtonText } from '../ButtonText'
import { Input } from '../Input'
import PolygonSvg from '../../assets/Polygon 1.svg'
import { CiLogin, CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

export function Header02() {
  const navigate = useNavigate()
  const { signOut } = useAuth()
  const handleNavegacao = rota => {
    navigate(rota)
  }

  function handleSignOut() {
    navigate('/')
    signOut()
  }
  return (
    <Header>
      <img src={PolygonSvg} alt="logo" />
      <h1 onClick={() => handleNavegacao('/')}>food explorer</h1>
      <Input placeholder="Busque por pratos ou ingredientes" icon={CiSearch} />
      <Button
        className="new"
        title="Novo prato"
        onClick={() => handleNavegacao('/addDishes')}
      />
      <ButtonText icon={CiLogin} onClick={handleSignOut} />
    </Header>
  )
}
