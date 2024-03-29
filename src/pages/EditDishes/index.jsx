import { Container, Content } from './style'
import { Input } from '../../components/Input'
import { HiOutlineChevronLeft } from 'react-icons/hi2'
import { Footer } from '../../components/Footer'
import { GoUpload } from 'react-icons/go'
import { ButtonText } from '../../components/ButtonText'
import { TextArea } from '../../components/TextArea'
import { DishesItem } from '../../components/DishesItem'
import { Button } from '../../components/Button'
import { Header02 } from '../../components/Header02'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Menu } from '../../components/menu'

export function EditDishes() {
  const [searchTerm, setSearchTerm] = useState('')
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [dishData, setDishData] = useState({
    name: '',
    description: '',
    ingredients: '',
    price: '',
    avatar: '',
    category_id: ''
  })
  const params = useParams()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [avatarFile, setAvatarFile] = useState(null)
  const [avatar, setAvatar] = useState('')

  const navigate = useNavigate()

  const handleNavegacao = rota => {
    navigate(rota)
  }
  const handleSearchChange = term => {
    setSearchTerm(term)
  }

  function handleAddIngredient() {
    if (newIngredient.trim() !== '') {
      setDishData(prevData => ({
        ...prevData,
        ingredients: [...prevData.ingredients.split(', '), newIngredient]
          .filter(ingredient => ingredient.trim() !== '')
          .join(', ')
      }))
      setNewIngredient('')
    }
  }
  function handleRemoveIngredient(deleted) {
    const updatedIngredients = dishData.ingredients
      .split(', ')
      .filter(ingredient => ingredient !== deleted)
      .join(', ')

    setDishData(prevData => ({
      ...prevData,
      ingredients: updatedIngredients
    }))
  }

  async function handleDeleteDish() {
    try {
      await api.delete(`/dishes/${params.id}`)
      alert('Prato excluído com sucesso!')
      navigate('/')
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível excluir o prato.')
      }
    }
  }

  function validateName() {
    if (name.trim() === '') {
      throw new Error('Por favor, preencha o nome do prato.')
    }
    return true
  }

  function validatePrice() {
    if (!price || !/^\d+(\.\d+)?$/.test(price)) {
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
    if (dishData.ingredients.trim() === '') {
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
  async function updateAvatar() {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', avatarFile)
        const resp = await api.patch(
          `/dishes/avatar/${params.id}`,
          fileUploadForm
        )
        setDishData(prevData => ({
          ...prevData,
          avatar: resp.data.avatar
        }))
        setAvatar(`${api.defaults.baseURL}/files/${resp.data.avatar}`)
      }
    } catch (error) {
      console.error('Erro ao atualizar avatar', error)
    }
  }

  async function handleUpdateDish() {
    if (!validateForm()) {
      return
    }

    try {
      await updateAvatar()

      const updatedData = {
        name,
        description,
        price,
        ingredients: dishData.ingredients,
        avatar: dishData.avatar,
        category_id: selectedCategory
      }

      const response = await api.put(`/dishes/${params.id}`, updatedData)

      alert('Prato atualizado com sucesso.')

      navigate(`/dishes/${params.id}`)
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error)
      } else {
        alert('Não foi possível atualizar o prato.')
      }
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
  }, [params.id])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/dishes/${params.id}`)
        const { name, description, price, category_id, ingredients, avatar } =
          response.data

        setName(name)
        setDescription(description)
        setPrice(price)
        setSelectedCategory(category_id)
        setDishData({
          ...dishData,
          ingredients: ingredients,
          avatar: avatar
        })

        const avatarUrl = `${api.defaults.baseURL}/files/${avatar}`
        setAvatar(avatarUrl)
      } catch (error) {
        console.error('Erro ao obter dados dos pratos', error)
      }
    }
    fetchData()
  }, [params.id])

  return (
    <Container>
      <Menu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />
      <Header02
        onOpenMenu={() => setMenuIsOpen(true)}
        onSearchChange={handleSearchChange}
      />
      <Content>
        <main>
          <form>
            <ButtonText
              className="buttonText"
              icon={HiOutlineChevronLeft}
              title="voltar"
              onClick={() => {
                handleNavegacao(-1)
              }}
            />
            <h2>Editar prato</h2>
            <div className="input-wrapper">
              <div className="col-1">
                <div className="input-wrapper">
                  <label>Imagem do prato</label>

                  <div className="avatar">
                    <label>
                      <GoUpload />
                      {avatarFile ? avatarFile.name : 'Selecione uma imagem'}

                      <input
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
                    className="input"
                    value={name}
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
                    {dishData.ingredients
                      .split(', ')
                      .filter(ingredient => ingredient.trim() !== '')
                      .map((ingredient, index) => (
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
                    className="Input"
                    value={price}
                    type="number"
                    onChange={e => setPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <p className="label">Descrição</p>
            <TextArea
              value={description}
              onChange={e => setDescription(e.target.value)}
            />

            <footer>
              <Button title="Excluir prato" onClick={handleDeleteDish} />
              <Button
                className="button"
                title="Salvar alterações"
                onClick={handleUpdateDish}
              />
            </footer>
          </form>
        </main>
      </Content>
      <Footer />
    </Container>
  )
}
