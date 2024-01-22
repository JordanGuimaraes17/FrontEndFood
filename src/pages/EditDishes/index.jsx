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

export function EditDishes() {
  const navigate = useNavigate()
  const handleNavegacao = rota => {
    navigate(rota)
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
                      />
                    </label>
                  </div>
                </div>
                <div className="input-wrapper">
                  <label>Nome</label>
                  <Input placeholder="Ex: Salada Ceasar" type="text" />
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
                    <DishesItem value="cebola" />
                    <DishesItem isNew placeholder="Adicionar" />
                  </div>
                </div>

                <div className="price">
                  <label>Preço</label>
                  <Input
                    style={{ width: '100%' }}
                    className="price"
                    placeholder="R$ 00,00"
                    type="number"
                  />
                </div>
              </div>
            </div>

            <p className="label">Descrição</p>
            <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
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
