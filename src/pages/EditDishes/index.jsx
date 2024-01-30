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

export function EditDishes() {
  const params = useParams()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [avataFile, setAvatarFile] = useState(null)
  const [avatar, setAvatar] = useState(null)
  const [dishData, setDishData] = useState({
    name: '',
    description: '',
    ingredients: '',
    price: ''
  })
  const navigate = useNavigate()
  const handleNavegacao = rota => {
    navigate(rota)
  }
  function handleAddIngredient() {
    setDishData(prevData => ({
      ...prevData,
      ingredients: [...prevData.ingredients.split(', '), newIngredient].join(
        ', '
      )
    }))
    setNewIngredient('')
  }
  function handleRemoveIngredient(deleted) {
    const updatedIngredients = dishData.ingredients
      .split(', ')
      .filter(ingredient => ingredient !== deleted)
      .join(', ')

    setDishData(prevData => ({ ...prevData, ingredients: updatedIngredients }))
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]

    if (avatar) {
      URL.revokeObjectURL(avatar)
    }

    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  async function updateDish({ dish }) {
    try {
      const updatedDish = {
        name: name || dishData.name,
        description: description || dishData.description,
        ingredients: dishData.ingredients,
        price: price || dishData.price
      }

      const response = await api.put(`/editDishes/${params.id}`, updatedDish)
      const updatedDishData = response.data

      setDishData(prevData => ({ ...prevData, ...updatedDishData }))
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível atualizar o prato.')
      }
    }
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
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/dishes/${params.id}`)
        setDishData(response.data)
        setIngredients(response.data.ingredients.split(', '))
        setSelectedCategory(response.data.category_id)
      } catch (error) {
        console.error('Erro ao obter dados dos pratos', error)
      }
    }
    fetchData()
  }, [params.id])

  return (
    <Container>
      <Header02 />
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
                      Imagem do prato
                      <input
                        placeholder="Imagem do prato"
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        onChange={handleChangeAvatar}
                      />
                    </label>
                  </div>
                </div>
                <div className="input-wrapper">
                  <label>Nome</label>
                  <Input
                    placeholder={dishData.name}
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
                    {/* Dividindo a string de ingredientes em um array */}
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
                      placeholder="Add"
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
                    style={{ width: '100%' }}
                    className="price"
                    placeholder={dishData.price}
                    type="number"
                    onChange={e => setPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <p className="label">Descrição</p>
            <TextArea
              placeholder={description}
              onChange={e => setDescription(e.target.value)}
            />
            <footer>
              <Button title="Excluir prato" />
              <Button className="button" title="Salvar alterações" />
            </footer>
          </form>
        </main>
      </Content>
      <Footer />
    </Container>
  )
}
