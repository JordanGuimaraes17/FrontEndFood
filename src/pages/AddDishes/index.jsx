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
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

export function AddDishes() {
  const params = useParams()
  const [ingredients, setIngredients] = useState([])
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

  function handleAddIngredient() {
    if (newIngredient.trim() === '') {
      return
    }

    setIngredients(prevIngredients => [...prevIngredients, newIngredient])

    setNewIngredient('')
  }

  function handleRemoveIngredient(deleted) {
    const updatedIngredients = ingredients.filter(
      ingredient => ingredient !== deleted
    )
    setIngredients(updatedIngredients)
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatar(file)
  }
  async function handleNewDish() {
    if (!name) {
      return alert('Type the name')
    }
    if (newIngredient) {
      return alert(
        'You left one ingredient typed but without adding it. Please click on add or erase it.'
      )
    }
    if (!description) {
      return alert('Type something about it.')
    }
    if (!price) {
      return alert('Fill in the price')
    }
    if (!avatar) {
      return alert('Please upload/choose one image.')
    }
    if (ingredients.length == 0) {
      return alert('Please add at least one ingredient.')
    }
    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('ingredients', ingredients.join(','))
    formData.append('image', avatar)
    formData.append('category_id', selectedCategory)

    await api
      .post('/dishes', formData)
      .then(() => {
        alert('Prato criado com sucesso')
        navigate('/')
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Unable to register')
        }
      })
  }

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await api.get('/category')
        setCategories(response.data)
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
        <h1>food explorer</h1>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={CiSearch}
        />
        <Button className="new" title="Novo prato" />
        <ButtonText icon={CiLogin} />
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
                    {ingredients.map((ingredient, index) => (
                      <DishesItem
                        key={index}
                        value={ingredient}
                        onClick={() => {
                          handleRemoveIngredient(ingredient)
                        }}
                      />
                    ))}
                    <DishesItem
                      placeholder="Adicionar"
                      isNew
                      value={newIngredient}
                      onChange={e => setNewIngredient(e.target.value)}
                      onClick={handleAddIngredient}
                    />
                  </div>
                </div>

                <div className="price">
                  <label>Preço</label>
                  <Input
                    className="price"
                    placeholder="R$ 00,00"
                    type="number"
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
