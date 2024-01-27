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
import { useState } from 'react'

export function EditDishes() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [file, setFile] = useState(null)
  const navigate = useNavigate()
  const handleNavegacao = rota => {
    navigate(rota)
  }
  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient('')
  }
  function handleImage(event) {
    const file = event.target.files[0]
    setFile(file)
  }
  function handleRemoveIngredient(deleted) {
    setIngredients(prevState =>
      prevState.filter(ingredient => ingredient !== deleted)
    )
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
    if (!file) {
      return alert('Please upload/choose one image.')
    }
    if (ingredients.length == 0) {
      return alert('Please add at least one ingredient.')
    }
    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('ingredients', ingredients)
    formData.append('image', file)
    await api
      .post('/dishes', formData)
      .then(() => {
        alert('Item successfully registered')
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
                        onChange={event => handleImage(event)}
                      />
                    </label>
                  </div>
                </div>
                <div className="input-wrapper">
                  <label>Nome</label>
                  <Input
                    placeholder="Ex: Salada Ceasar"
                    type="text"
                    onChange={e => setName(e.target.value)}
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
                        value={ingredient}
                        onClick={() => {
                          handleRemoveIngredient(ingredient)
                        }}
                      />
                    ))}
                    <DishesItem
                      isNew
                      placeholder="Adicionar"
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
              onChange={e => setDescription(e.target.value)}
            />
            <footer>
              <Button title="Excluir prato" />
              <Button
                className="button"
                title="Salvar alterações"
                onClick={e => handleNewDish(e)}
              />
            </footer>
          </form>
        </main>
      </Content>
      <Footer />
    </Container>
  )
}
