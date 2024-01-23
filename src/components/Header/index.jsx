import { Container } from './style'
import { Button } from '../Button'
import { ButtonText } from '../ButtonText'
import { Input } from '../Input'
import PolygonSvg from '../../assets/Polygon 1.svg'
import { CiLogin, CiReceipt, CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'

export function Header({ orderItemCount }) {
  const navigate = useNavigate()
  const handleNavegacao = rota => {
    navigate(rota)
  }
  return (
    <Container>
      <img src={PolygonSvg} alt="logo" />
      <h1>food explorer</h1>
      <Input placeholder="Busque por pratos ou ingredientes" icon={CiSearch} />
      <Button
        className="new"
        icon={CiReceipt}
        title={`Pedidos ${orderItemCount}`}
        onClick={() => handleNavegacao('/wish/:id')}
      />
      <ButtonText icon={CiLogin} />
    </Container>
  )
}
