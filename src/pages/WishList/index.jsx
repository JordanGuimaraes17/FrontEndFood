import { Container } from './style'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { IoIosClose } from 'react-icons/io'
import { ButtonText } from '../../components/ButtonText'
import { HiOutlineChevronLeft } from 'react-icons/hi2'
import { Button } from '../../components/Button'
import PolygonSvg from '../../assets/Polygon 1.svg'
import Image01 from '../../assets/Mask group-1.png'
import Image02 from '../../assets/Mask group-2.png'
import { useNavigate } from 'react-router-dom'

export function WishList() {
  const navigate = useNavigate()
  const handleNavegacao = rota => {
    navigate(rota)
  }
  const data = [
    {
      price: 25.15,
      id: 1,
      description:
        'Presunto de parma e rúcula em um pão com fermentação natural.',
      name: 'Imagem 1',
      image: Image01,
      category: 'Veganos'
    },
    {
      description:
        'Presunto de parma e rúcula em um pão com fermentação natural.',
      price: 20.15,
      id: 2,
      name: 'Imagem 2',
      image: Image02,
      category: 'Massas'
    },
    {
      description:
        'Presunto de parma e rúcula em um pão com fermentação natural.',
      price: 35.15,
      id: 3,
      name: 'Imagem 3',
      image:
        'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHx8Mg%3D%3D',
      category: 'Hamburgues'
    }
  ]
  return (
    <Container>
      <header>
        <ButtonText
          icon={HiOutlineChevronLeft}
          title="voltar"
          onClick={() => handleNavegacao(-1)}
        />

        <h3>
          {' '}
          <img src={PolygonSvg} alt="logo" /> food explorer
        </h3>
        <span>
          Lista de compras do <b>fernandev</b>
        </span>
      </header>
      <main>
        <div className="page-title">Seu pedido</div>
        <div className="content">
          <section>
            <table>
              <thead>
                <tr>
                  <th>Pratos</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item.id}>
                    <td>
                      <div className="product">
                        <img src={item.image} alt="" />
                        <div className="info">
                          <div className="name">{item.name}</div>
                          <div className="category">{item.category}</div>
                        </div>
                      </div>
                    </td>
                    <td>{`R$ ${item.price.toFixed(2)}`}</td>
                    <td>
                      <div className="qty">
                        <ButtonText icon={AiOutlineMinus} />
                        <span>2</span>{' '}
                        {/* Se a quantidade é variável, substitua por item.quantity */}
                        <ButtonText icon={AiOutlinePlus} />
                      </div>
                    </td>
                    <td>{`R$ ${(item.price * 2).toFixed(2)}`}</td>
                    <td>
                      <ButtonText className="remove" icon={IoIosClose} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <aside>
            <div className="box">
              <header>Resumo da compra</header>
              <div className="info">
                <div>
                  <span>Sub-total</span>
                  <span>
                    R${' '}
                    {data
                      .reduce((acc, item) => acc + item.price * 2, 0)
                      .toFixed(2)}
                  </span>
                </div>
                <div>
                  <span>Frete</span>
                  <span>Gratuito</span>
                </div>
                <ButtonText title="Adicionar cupom de desconto" />
              </div>
              <footer>
                <span>Total </span>
                <span>
                  R${' '}
                  {data
                    .reduce((acc, item) => acc + item.price * 2, 0)
                    .toFixed(2)}
                </span>
              </footer>
            </div>

            <Button className="button-car" title="Finalizar Compra" />
          </aside>
        </div>
      </main>
    </Container>
  )
}
