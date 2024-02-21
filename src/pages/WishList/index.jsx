// Importe o useState e useEffect do React
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
import { useAuth } from '../../hooks/auth'

export function WishList() {
  const { user } = useAuth()
  const { dishQuantities, setDishQuantities } = useAuth({})
  const navigate = useNavigate()

  const [orderDetails, setOrderDetails] = useState([])
  const [totalOrderPrice, setTotalOrderPrice] = useState(0)
  const [dishImages, setDishImages] = useState({}) //
  const [userName, setUserName] = useState('')

  const handleNavegacao = rota => {
    navigate(rota)
  }

  const handleAddDish = id => {
    setOrderDetails(prevOrderDetails => {
      const updatedOrderDetails = prevOrderDetails.map(item => {
        if (item.id === id) {
          const newQuantity = item.order_quantity + 1
          const newTotalPrice = item.dish_price * newQuantity

          return {
            ...item,
            order_quantity: newQuantity, // Incrementa a quantidade do prato
            total_price: newTotalPrice // Atualiza o total do prato
          }
        }
        return item
      })

      const totalPrice = updatedOrderDetails.reduce((total, item) => {
        return total + item.total_price
      }, 0)

      setTotalOrderPrice(totalPrice)

      return updatedOrderDetails
    })
  }

  const handleRemoveDish = id => {
    setOrderDetails(prevOrderDetails => {
      const updatedOrderDetails = prevOrderDetails.map(item => {
        if (item.id === id && item.order_quantity > 0) {
          const newQuantity = item.order_quantity - 1
          const newTotalPrice = item.dish_price * newQuantity

          return {
            ...item,
            order_quantity: newQuantity, // Decrementa a quantidade do prato, desde que não seja menor que 0
            total_price: newTotalPrice // Atualiza o total do prato
          }
        }
        return item
      })

      const totalPrice = updatedOrderDetails.reduce((total, item) => {
        return total + item.total_price
      }, 0)

      setTotalOrderPrice(totalPrice)

      return updatedOrderDetails
    })
  }

  useEffect(() => {
    async function fetchOrderDetails() {
      try {
        const response = await api.get(`/orders`)
        const responseDishes = await api.get(`/dishes`)

        if (
          !response.data.orderDetails ||
          response.data.orderDetails.length === 0
        ) {
          console.log('O carrinho está vazio.')
          return
        }

        const dishesData = responseDishes.data.map(item => ({
          ...item,
          avatar: `${api.defaults.baseURL}/files/${item.avatar}`
        }))

        const { orderDetails, totalOrderPrice } = response.data
        const { name } = user
        setUserName(name)

        // Mapear o ID do prato para  imagem
        const imagesMap = {}
        dishesData.forEach(dish => {
          imagesMap[dish.id] = dish.avatar
        })

        setOrderDetails(orderDetails)
        setTotalOrderPrice(totalOrderPrice)
        setDishImages(imagesMap) // Objeto de imagens
      } catch (error) {
        console.error('Erro ao obter dados do pedido', error)
      }
    }

    fetchOrderDetails()
  }, [])

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
          Lista de compras do <b>{userName}</b>
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
                        <img src={dishImages[item.dish_id]} alt="" />{' '}
                        {/* Usando a imagem correta do prato */}
                        <div className="info">
                          <div className="name">{item.dish_name}</div>
                          <div className="category">{item.category_name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{`R$ ${item.dish_price.toFixed(2)}`}</td>
                    <td>
                      <div className="qty">
                        <ButtonText
                          icon={AiOutlineMinus}
                          onClick={() => handleRemoveDish(item.id)}
                        />
                        <span>{item.order_quantity}</span>
                        <ButtonText
                          icon={AiOutlinePlus}
                          onClick={() => handleAddDish(item.id)}
                        />
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
