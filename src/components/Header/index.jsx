import { Container } from './style'
import { Button } from '../Button'
import { ButtonText } from '../ButtonText'
import { Input } from '../Input'
import PolygonSvg from '../../assets/Polygon 1.svg'
import { CiLogin, CiReceipt, CiSearch } from 'react-icons/ci'

export function Header({ orderItemCount }) {
  return (
    <Container>
      <img src={PolygonSvg} alt="logo" />
      <h1>food explorer</h1>
      <Input placeholder="Busque por pratos ou ingredientes" icon={CiSearch} />
      <Button icon={CiReceipt} title={`Pedidos ${orderItemCount}`} />
      <ButtonText icon={CiLogin} />
    </Container>
  )
}
