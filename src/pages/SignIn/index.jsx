import { Container, Form } from './style'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { FiLock, FiMail } from 'react-icons/fi'
import PolygonSvg from '../../assets/Polygon 1.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

export function SignIn() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  function handleClick() {
    navigate('/register')
  }
  return (
    <Container>
      <div>
        <img src={PolygonSvg} alt="logo" />
        <h1>food explorer</h1>
      </div>
      <Form>
        <div>
          <h1>Faça login</h1>
        </div>
        <div className="inputs">
          <label htmlFor="email">Email</label>
          <Input
            placeholder="Ex: exemplo@exemplo.com"
            type="text"
            icon={FiMail}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="inputs">
          <label htmlFor="password">Senha</label>
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            icon={FiLock}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button title="Entrar" onClick={handleSignIn} />
        <ButtonText
          className="register"
          title="Criar uma conta"
          onClick={handleClick}
        />
      </Form>
    </Container>
  )
}
