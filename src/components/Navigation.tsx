import React from 'react'
import styles from './Navigation.module.css'

export default function Navigation() {
  return (
    <nav className={styles.mainNav} aria-label="Menú principal">
      <ul>
        <li><a href="#saludo">Saludo</a></li>
        <li><a href="#sobre-nosotros">Sobre nosotros</a></li>
        <li><a href="#contacto">Contacto</a></li>
        <li><a href="#clientes">Clientes</a></li>
      </ul>
    </nav>
  )
}
