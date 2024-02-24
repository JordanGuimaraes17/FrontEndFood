import { Container } from './style'
import { Button } from '../Button'
import { ButtonText } from '../ButtonText'
import { Input } from '../Input'
import PolygonSvg from '../../assets/Polygon 1.svg'
import { CiLogin, CiReceipt, CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function Header({ onSearchChange }) {
  const [search, setSearch] = useState('')
  const { signOut } = useAuth()
  const navigate = useNavigate()

  function handleSignOut() {
    navigate('/')
    signOut()
  }

  const handleNavegacao = rota => {
    navigate(rota)
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
    <Container>
      <img src={PolygonSvg} alt="logo" />
      <h1 onClick={() => handleNavegacao('/')}>food explorer</h1>
      <Input
        placeholder="Busque por pratos ou ingredientes"
        icon={CiSearch}
        onChange={e => {
          setSearch(e.target.value)
          // Chamando a função onSearchChange passada como propriedade
          onSearchChange(e.target.value)
        }}
      />
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
