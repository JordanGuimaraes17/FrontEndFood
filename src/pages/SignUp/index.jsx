import { Container, Form } from './style'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { FiLock, FiMail } from 'react-icons/fi'
import PolygonSvg from '../../assets/Polygon 1.svg'
import { BsPerson } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSignUp() {
    const nameRegex = /^[a-zA-Z\s]+$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const minLength = 6

    if (!nameRegex.test(name)) {
      return alert('O nome deve conter apenas letras e espaços!')
    }

    if (!emailRegex.test(email)) {
      return alert('Digite um e-mail válido!')
    }

    if (password.length < minLength) {
      return alert(`A senha deve ter pelo menos ${minLength} caracteres!`)
    }

    if (!name || !email || !password) {
      return alert('Preencha todos os campos!')
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
        navigate(-1)
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message || 'Erro ao cadastrar usuário.')
        } else {
          alert('Não foi possível cadastrar o usuário.')
        }
      })
  }

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
          <Input
            placeholder="Ex: Maria da Silva"
            type="name"
            icon={BsPerson}
            onChange={e => setName(e.target.value)}
          />
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

        <Button title="Criar conta" onClick={handleSignUp} />
        <ButtonText
          className="register"
          title="Já tenho uma conta"
          onClick={handleClick}
        />
      </Form>
    </Container>
  )
}
