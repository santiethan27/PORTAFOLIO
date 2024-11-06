import React from 'react'
import './proyectos.css';
import { FaGithub } from 'react-icons/fa'

function Proyectos() {
    return (
        <div className='myprojects' id='#myprojects'>
            <h2>Proyectos</h2>
            <p>Todo lo que puedes imaginar, <span>lo puedes programar.</span></p>
            <div className="projects">
                <div className="project">
                    <img src="/projects/patitasfelices.png" alt="Proyecto1" />
                    <div className="description">
                        <h3 className="title">Patitas Felices</h3>
                        <p>Patitas felices es un sitio web desarrollado para una fundación, este sitio web fue creado con el fin de mostrar las mascotas a adoptar, comprar y personalizar productos.</p>
                        <div className="tecnologias">
                            <span>REACT</span>
                            <span>NODE.JS</span>
                            <span>HTML Y CSS</span>
                            <span>MONGODB</span>
                        </div>
                        <a href='https://github.com/santiethan27/patitasfelices_final.git'><FaGithub /> GitHub</a>
                    </div>
                </div>
                <div className="project">
                    <img src="/projects/airbnb.png" alt="Proyecto1" />
                    <div className="description">
                        <h3 className="title">AIRBNB</h3>
                        <p>AirBNB es un proyecto realizado para ofrecer casas, apartamentos y demas lugares de hosteria</p>
                        <div className="tecnologias">
                            <span>REACT</span>
                            <span>JAVA</span>
                            <span>SPRING BOOT</span>
                            <span>SQL</span>
                        </div>
                        <a href='https://github.com/santiethan27/AIRBNB.git'><FaGithub /> GitHub</a>
                    </div>
                </div>
                <div className="project">
                    <img src="/projects/tiendatonella.png" alt="Proyecto1" />
                    <div className="description">
                        <h3 className="title">Tonella</h3>
                        <p>Es un sitio web diseñado para vender productos en linea, cuenta con parte administrativa para ver las ventas y administrar productos</p>
                        <div className="tecnologias">
                            <span>PHP</span>
                            <span>SQL</span>
                            <span>HTML Y CSS</span>
                        </div>
                        <a href='https://github.com/santiethan27/TONELLA.git'><FaGithub /> GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyectos