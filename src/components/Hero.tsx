import React from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <h1>Administración Integral de Consorcios</h1>
        <p>Bienvenido a la página oficial del consorcio.</p>
      </div>
    </header>
  )
}
