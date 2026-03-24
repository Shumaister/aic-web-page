import React from 'react'
import Carousel from './components/Carousel/Carousel'
import Navigation from './components/Navigation'
import Hero from './components/Hero'

const cards = [
  { title: 'Edificio Central', subtitle: 'Av. Principal 1234' },
  { title: 'Residencias Norte', subtitle: 'Calle Norte 567' },
  { title: 'Torre Sur', subtitle: 'Av. Sur 890' }
]

export default function App() {
  return (
    <div>
      <Navigation />
      <Hero />

      <main>
        <div className="body-container">
          <section id="saludo">
            <h2>Saludo</h2>
            <p>Bienvenido a la página oficial del consorcio. Aquí encontrarás información relevante y formas de contacto.</p>
          </section>

          <section id="sobre-nosotros">
            <h2>Sobre Nosotros</h2>
            <p>Gestionamos y administramos edificios con transparencia y eficiencia. Nuestro objetivo es brindar tranquilidad y soluciones a los propietarios.</p>
          </section>

          <section id="contacto">
            <h2>Contacto</h2>
            <p>¿Tienes dudas o necesitas ayuda? Contáctanos por WhatsApp.</p>
          </section>

          <section id="clientes">
            <h2>Clientes</h2>
            <Carousel cards={cards} />
          </section>
        </div>
      </main>

      <a href="https://wa.me/5491154249902?text=Hola,%20me%20interesa%20informaci%C3%B3n%20sobre%20sus%20servicios" className="whatsapp-btn" target="_blank" rel="noopener noreferrer" aria-label="Chat en WhatsApp">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>

      <footer>
        <p>&copy; 2026 Consorcio de Edificios. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
