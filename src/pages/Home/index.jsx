// Home.js

import { Container, Content } from './style'
import HomeIMG from '../../assets/HomeIMG.png'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Sliders } from '../../components/Sliders'
import { useState } from 'react'

export function Home() {
  const [orderItems, setOrderItems] = useState([])

  function updateOrderItems(items) {
    setOrderItems(items)
  }

  return (
    <Container>
      <Header orderItemCount={orderItems.length} />
      <Content>
        <main>
          <div className="box">
            <img src={HomeIMG} alt="Chuva de hambúrgueres" />
            <div className="text">
              <h2>Sabores inigualáveis</h2>
              <span>
                Sinta o cuidado do preparo com ingredientes selecionados
              </span>
            </div>
          </div>
          <Section className="sliders" title="Refeições">
            {/* Passando o estado orderItems para Sliders */}
            <Sliders
              updateOrderItems={updateOrderItems}
              orderItems={orderItems}
            />
          </Section>
          <Section className="sliders" title="Sobremessas">
            {/* Passando o estado orderItems para Sliders */}
            <Sliders
              updateOrderItems={updateOrderItems}
              orderItems={orderItems}
            />
          </Section>
          <Section className="sliders" title="Bebidas">
            {/* Passando o estado orderItems para Sliders */}
            <Sliders
              updateOrderItems={updateOrderItems}
              orderItems={orderItems}
            />
          </Section>
        </main>
      </Content>
      <Footer />
    </Container>
  )
}
