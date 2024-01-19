import { Container, Content } from './style'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { HiOutlineChevronLeft } from 'react-icons/hi2'
import { Footer } from '../../components/Footer'
import { GoUpload } from 'react-icons/go'
import { ButtonText } from '../../components/ButtonText'
import { TextArea } from '../../components/TextArea'
import { DishesItem } from '../../components/DishesItem'
import { Button } from '../../components/Button'

export function AddDishes() {
  return (
    <Container>
      <Header />
      <Content>
        <main>
          <form>
            <ButtonText
              className="buttonText"
              icon={HiOutlineChevronLeft}
              title="voltar"
            />
            <div className="input-wrapper">
              <div className="col-1">
                <div className="input-wrapper">
                  <label>Imagem do prato</label>
                  <Input
                    icon={GoUpload}
                    type="file"
                    accept=".jpg, .jpeg, .png"
                  />
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
                    <DishesItem value="pão" />
                  </div>
                </div>

                <div className="input-wrapper">
                  <label>Preço</label>
                  <Input placeholder="R$ 00,00" type="number" />
                </div>
              </div>
            </div>

            <div className="input-wrapper">
              <label>Descrição</label>
              <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
            </div>

            <Button className="button" title="Salvar alterações" />
          </form>
        </main>
      </Content>
      <Footer />
    </Container>
  )
}
