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
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [avataFile, setAvatarFile] = useState(null)
  const [avatar, setAvatar] = useState(null)
  const [dishData, setDishData] = useState({
    name: '',
    description: '',
    ingredients: '',
    price: '',
    category: ''
  })
  const navigate = useNavigate()
  const handleNavegacao = rota => {
    navigate(rota)
  }
  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient('')
  }
  function handleRemoveIngredient(deleted) {
    setIngredients(prevState =>
      prevState.filter(ingredient => ingredient !== deleted)
    )
  }
  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)
    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/dishes/${params.id}`)
        setDishData(response.data)
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
                    placeholder="Ex: Salada Ceasar"
                    type="text"
                    value={dishData.name}
                  />
                </div>
                <div className="input-wrapper">
                  <label>Categoria</label>
                  <select id="" required>
                    <option value="">Pedro</option>
                    <option value="">Paulo</option>
                    <option value="">João</option>
                  </select>
                </div>
              </div>

              <div className="col-1">
                <div className="input-wrapper">
                  <label>Ingredientes</label>
                  <div className="col-2">
                    {ingredients.map((ingredient, index) => (
                      <DishesItem
                        key={String(index)}
                        onClick={() => {
                          handleRemoveIngredient(ingredient)
                        }}
                      />
                    ))}
                    {/* Dividindo a string de ingredientes em um array */}
                    {dishData.ingredients
                      .split(', ')
                      .map((ingredient, index) => (
                        <DishesItem
                          key={index}
                          title={ingredient}
                          isNew
                          placeholder={ingredient}
                          onChange={e => setNewIngredient(e.target.value)}
                          onClick={handleAddIngredient}
                        />
                      ))}
                  </div>
                </div>

                <div className="price">
                  <label>Preço</label>
                  <Input
                    style={{ width: '100%' }}
                    className="price"
                    value={dishData.price}
                    type="number"
                    onChange={e => setPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <p className="label">Descrição</p>
            <TextArea placeholder={dishData.description} />
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
