import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <nav className='navbar'>
      <span>SE</span>
      <div className="items">
        <a href="#myprojects">Mis proyectos</a>
        <a href="#mystudies">Mi experiencia</a>
        <a href="#skills">Mis habilidades</a>
        <a href="#contact">Contacto</a>
      </div>
    </nav>
  )
}

export default Navbar