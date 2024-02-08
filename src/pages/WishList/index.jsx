import { useState, useEffect } from 'react'
import { Container } from './style'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { IoIosClose } from 'react-icons/io'
import { ButtonText } from '../../components/ButtonText'
import { HiOutlineChevronLeft } from 'react-icons/hi2'
import { Button } from '../../components/Button'
import PolygonSvg from '../../assets/Polygon 1.svg'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

export function WishList() {
  const navigate = useNavigate()
  const [orderDetails, setOrderDetails] = useState([])
  const [totalOrderPrice, setTotalOrderPrice] = useState(0)

  useEffect(() => {
    async function fetchOrderDetails() {
      try {
        const response = await api.get(`/orders`)
        const { orderDetails, totalOrderPrice } = response.data
        setOrderDetails(orderDetails)
        setTotalOrderPrice(totalOrderPrice)
      } catch (error) {
        console.error('Erro ao obter dados do pedido', error)
      }
    }
    fetchOrderDetails()
  }, [])

  const handleNavegacao = rota => {
    navigate(rota)
  }

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
                {orderDetails.map(item => (
                  <tr key={item.id}>
                    <td>
                      <div className="product">
                        <img src={item.image} alt="" />
                        <div className="info">
                          <div className="name">{item.dish_name}</div>
                          <div className="category">{item.category_name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{`R$ ${item.dish_price.toFixed(2)}`}</td>
                    <td>
                      <div className="qty">
                        <ButtonText icon={AiOutlineMinus} />
                        <span>{item.order_quantity}</span>
                        <ButtonText icon={AiOutlinePlus} />
                      </div>
                    </td>
                    <td>{`R$ ${item.total_price.toFixed(2)}`}</td>
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
                  <span>R$ {totalOrderPrice.toFixed(2)}</span>
                </div>
                <div>
                  <span>Frete</span>
                  <span>Gratuito</span>
                </div>
                <ButtonText title="Adicionar cupom de desconto" />
              </div>
              <footer>
                <span>Total </span>
                <span>R$ {totalOrderPrice.toFixed(2)}</span>
              </footer>
            </div>

            <Button className="button-car" title="Finalizar Compra" />
          </aside>
        </div>
      </main>
    </Container>
  )
}
