import { Container } from './style'
import PolygonSvg from '../../assets/Polygon 1.svg'
export function Footer() {
  return (
    <Container>
      <h3>
        {' '}
        <img src={PolygonSvg} alt="logo" /> food explorer
      </h3>
      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  )
}
