import { Container, Content, Header } from './style'
import { CiLogin, CiSearch } from 'react-icons/ci'
import PolygonSvg from '../../assets/Polygon 1.svg'
import { Input } from '../../components/Input'
import { HiOutlineChevronLeft } from 'react-icons/hi2'
import { Footer } from '../../components/Footer'
import { GoUpload } from 'react-icons/go'
import { ButtonText } from '../../components/ButtonText'
import { TextArea } from '../../components/TextArea'
import { DishesItem } from '../../components/DishesItem'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

export function AddDishes() {
  const { signOut } = useAuth()
  const [newDishIngredients, setNewDishIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')

  const [avatar, setAvatar] = useState('')
  const navigate = useNavigate()

  function handleNavegacao(rota) {
    navigate(rota)
  }
  function handleSignOut() {
    navigate('/')
    signOut()
  }

  function handleAddNewIngredient() {
    if (newIngredient.trim() === '') {
      return
    }
    setNewDishIngredients(prevData => [...prevData, newIngredient])
    setNewIngredient('')
  }

  function handleRemoveNewIngredient(deleted) {
    const updatedIngredients = newDishIngredients.filter(
      ingredient => ingredient !== deleted
    )
    setNewDishIngredients(updatedIngredients)
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatar(file)
  }

  async function handleNewDish() {
    if (!name) {
      return alert('Digite o nome do prato')
    }

    if (!selectedCategory) {
      return alert('Por favor, escolha uma categoria')
    }

    if (newIngredient) {
      return alert(
        'Você deixou um ingrediente digitado, mas não o adicionou. Por favor, clique em adicionar ou apague-o.'
      )
    }
    if (!description) {
      return alert('Digite alguma descrição sobre o prato.')
    }
    if (!price || !/^\d+(\.\d+)?$/.test(price)) {
      console.log('Valor de price:', price)
      return alert(
        'Por favor, preencha um preço válido (apenas números inteiros ou decimais com ponto).'
      )
    }

    if (!avatar) {
      return alert('Por favor, faça upload/escolha uma imagem.')
    }
    if (newDishIngredients.length === 0) {
      return alert('Por favor, adicione pelo menos um ingrediente.')
    }

    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('ingredients', newDishIngredients.join(', '))
    formData.append('image', avatar)
    formData.append('category_id', selectedCategory)

    try {
      const response = await api.post('/dishes', formData)
      const { dish_id } = response.data
      alert('Prato criado com sucesso')
      navigate(`/dishes/${dish_id}`)
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível cadastrar o prato')
      }
    }
  }

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await api.get('/category')
        // Adicionando manualmente a opção "Selecione uma categoria" ao estado de categorias
        setCategories([
          { id: '', name: 'Selecione uma categoria' },
          ...response.data
        ])
      } catch (error) {
        console.error('Error fetching categories', error)
      }
    }

    fetchCategories()
  }, [])

  return (
    <Container>
      <Header>
        <img src={PolygonSvg} alt="logo" />
        <h1 onClick={() => handleNavegacao('/')}>food explorer</h1>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={CiSearch}
        />
        <Button className="new" title="Novo prato" />
        <ButtonText icon={CiLogin} onClick={handleSignOut} />
      </Header>
      <Content>
        <main>
          <form>
            <ButtonText
              className="buttonText"
              icon={HiOutlineChevronLeft}
              title="voltar"
              onClick={() => handleNavegacao(-1)}
            />
            <h2>Adicionar prato</h2>
            <div className="input-wrapper">
              <div className="col-1">
                <div className="input-wrapper">
                  <label>Imagem do prato</label>
                  <div className="avatar">
                    <label>
                      <GoUpload />
                      {avatar ? avatar.name : 'Selecione uma imagem'}
                      <input
                        placeholder="Imagem do prato"
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        onChange={handleChangeAvatar}
                      />
                    </label>
                  </div>
                </div>
                <div className="input-wrapper2">
                  <label>Nome</label>
                  <Input
                    placeholder="Ex: Salada Ceasar"
                    type="text"
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="input-wrapper">
                  <label>Categoria</label>
                  <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                    required
                  >
                    {Array.isArray(categories) &&
                      categories.map(categoryItem => (
                        <option key={categoryItem.id} value={categoryItem.id}>
                          {categoryItem.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>

              <div className="col-1">
                <div className="input-wrapper">
                  <label>Ingredientes</label>
                  <div className="col-2">
                    {newDishIngredients.map((ingredient, index) => (
                      <DishesItem
                        key={index}
                        value={ingredient}
                        onClick={() => {
                          handleRemoveNewIngredient(ingredient)
                        }}
                      />
                    ))}
                    <DishesItem
                      placeholder="Adicionar"
                      isNew
                      value={newIngredient}
                      onChange={e => setNewIngredient(e.target.value)}
                      onClick={handleAddNewIngredient}
                    />
                  </div>
                </div>

                <div className="price">
                  <label>Preço</label>
                  <Input
                    className="price"
                    placeholder="R$ 00,00"
                    type="text"
                    onChange={e => setPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <p className="label">Descrição</p>
            <TextArea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={e => {
                setDescription(e.target.value)
              }}
            />

            <Button
              className="button"
              title="Salvar alterações"
              onClick={handleNewDish}
            />
          </form>
        </main>
      </Content>
      <Footer />
    </Container>
  )
}
