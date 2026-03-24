import React from 'react'
import useCarousel from '../../hooks/useCarousel'

import '../../styles/carousel.css'

type Card = { title: string; subtitle?: string }

export default function Carousel({ cards }: { cards: Card[] }) {
  const { index, next, prev, goTo, transform, handleTouchStart, handleTouchEnd } = useCarousel(cards.length)

  return (
    <div className="carousel">
      <button className="carousel-btn prev" aria-label="Anterior" onClick={prev}>&#8249;</button>
      <div className="carousel-track" style={{ transform }} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {cards.map((c, i) => (
          <div className="client-card" key={i}>
            <h3>{c.title}</h3>
            {c.subtitle && <p>{c.subtitle}</p>}
          </div>
        ))}
      </div>
      <button className="carousel-btn next" aria-label="Siguiente" onClick={next}>&#8250;</button>
      <div className="carousel-indicators">
        {cards.map((_, i) => (
          <button key={i} className={i === index ? 'active' : ''} onClick={() => goTo(i)} aria-label={`Ir a ${i + 1}`} />
        ))}
      </div>
    </div>
  )
}
