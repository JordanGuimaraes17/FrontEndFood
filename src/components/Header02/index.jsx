import { Header } from './style'
import { Button } from '../Button'
import { ButtonText } from '../ButtonText'
import { Input } from '../Input'
import PolygonSvg from '../../assets/Polygon 1.svg'
import { CiLogin, CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { List } from '@phosphor-icons/react'

export function Header02({ onSearchChange, onOpenMenu }) {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const { signOut } = useAuth()
  const handleNavegacao = rota => {
    navigate(rota)
  }

  function handleSignOut() {
    navigate('/')
    signOut()
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
    <Header>
      <div className="menu">
        <List onClick={onOpenMenu} />
      </div>
      <img className="img01" src={PolygonSvg} alt="logo" />

      <h1 onClick={() => handleNavegacao('/')}>
        <img className="img02" src={PolygonSvg} alt="logo" />
        food explorer
      </h1>

      <div className="input-container">
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={CiSearch}
          onChange={e => {
            setSearch(e.target.value)
            // Chamando a função onSearchChange passada como propriedade
            onSearchChange(e.target.value)
          }}
        />
      </div>

      <Button
        className="new"
        title="Novo prato"
        onClick={() => handleNavegacao('/addDishes')}
      />
      <ButtonText icon={CiLogin} onClick={handleSignOut} />
    </Header>
  )
}
