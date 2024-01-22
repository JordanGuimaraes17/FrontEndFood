import { Container, Form } from './style'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { FiLock, FiMail } from 'react-icons/fi'
import PolygonSvg from '../../assets/Polygon 1.svg'
import { BsPerson } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export function SignUp() {
  const navigate = useNavigate()

  function handleClick() {
    navigate(-1)
  }
  return (
    <Container>
      <div>
        <img src={PolygonSvg} alt="logo" />
        <h1>food explorer</h1>
      </div>
      <Form>
        <div>
          <h1>Crie sua conta</h1>
        </div>
        <div className="inputs">
          <label htmlFor="name">Seu nome</label>
          <Input placeholder="Ex: Maria da Silva" type="name" icon={BsPerson} />
        </div>

        <div className="inputs">
          <label htmlFor="email">Email</label>
          <Input
            placeholder="Ex: exemplo@exemplo.com"
            type="text"
            icon={FiMail}
          />
        </div>

        <div className="inputs">
          <label htmlFor="password">Senha</label>
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            icon={FiLock}
          />
        </div>

        <Button title="Criar conta" />
        <ButtonText
          className="register"
          title="Já tenho uma conta"
          onClick={handleClick}
        />
      </Form>
    </Container>
  )
}
