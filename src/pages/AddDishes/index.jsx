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
  const [avatarFile, setAvatarFile] = useState(null)
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

  function validateName() {
    if (name.trim() === '') {
      throw new Error('Por favor, preencha o nome do prato.')
    }
    return true
  }

  function validatePrice() {
    if (price === '' || isNaN(price) || parseFloat(price) <= 0) {
      throw new Error('Por favor, insira um preço válido maior que zero.')
    }
    return true
  }

  function validateDescription() {
    if (description.trim() === '') {
      throw new Error('Por favor, preencha a descrição do prato.')
    }
    return true
  }

  function validateCategory() {
    if (!selectedCategory) {
      throw new Error('Por favor, selecione uma categoria para o prato.')
    }
    return true
  }

  function validateIngredients() {
    if (ingredients.length === 0) {
      throw new Error('Por favor, adicione pelo menos um ingrediente ao prato.')
    }
    return true
  }

  function validateForm() {
    try {
      validateName()
      validateDescription()
      validatePrice()
      validateCategory()
      validateIngredients()

      return true
    } catch (error) {
      alert(error.message)
      return false
    }
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)
    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
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
  async function handleCreateDish() {
    if (!validateForm()) {
      return
    }
    try {
      const newDishData = [
        {
          name: name,
          description: description,
          price: price,
          ingredients: ingredients,
          category_id: selectedCategory,
          avatar: avatarFile
        }
      ]

      const response = await api.post('/dishes', newDishData)

      alert('Prato criado com sucesso.')

      navigate(`/dishes/${params.id}`)
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error)
      } else {
        alert('Não foi possível criar o prato.')
      }
    }
  }

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
                      {avatarFile ? avatarFile.name : 'Selecione uma imagem'}
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
              onClick={handleCreateDish}
            />
          </form>
        </main>
      </Content>
      <Footer />
    </Container>
  )
}
