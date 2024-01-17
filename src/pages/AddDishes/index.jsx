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
        <ButtonText icon={HiOutlineChevronLeft} title="voltar" />
        <main>
          <form>
            <div className="fieldset-wrapper">
              <div className="col-1">
                <div className="input-wrapper">
                  <label>Imagem do prato</label>
                  <Input className="load" icon={GoUpload} type="file" />
                </div>

                <div className="input-wrapper">
                  <label>Nome</label>
                  <Input placeholder="Ex: Salada Ceasar" type="text" />
                </div>

                <div className="input-wrapper">
                  <label>Categoria</label>
                  <select id="" required>
                    <option value="pedro">Pedro</option>
                    <option value="paulo">Paulo</option>
                    <option value="joão">João</option>
                  </select>
                </div>
              </div>
              <div className="col-1">
                <div className="input-wrapper">
                  <label>Ingredientes</label>
                  <DishesItem title="pao" />
                </div>
                <div className="input-wrapper">
                  <label>Preço</label>
                  <Input type="number" />
                </div>
              </div>
            </div>

            <div className="input-wrapper">
              <label>Descrição</label>
              <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
            </div>
            <Button title="Salvar alterações" />
          </form>
        </main>
      </Content>
      <Footer />
    </Container>
  )
}
