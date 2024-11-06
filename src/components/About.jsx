import React from 'react'
import './about.css'
import { FaFileDownload } from 'react-icons/fa';

function About() {
    return (
        <div className='aboutme'>
            <div className="divisor-sup">
                <hr />
            </div>
            <h2>Sobre mi<span>.</span> </h2>
            <p className='aboutme-text'>
                Soy un apasionado por la tecnología, llevo estudiando programación y análisis de Software durante los últimos tres años. Realice mis
                prácticas como Analista de Implementación y de soporte en PlaceToPay. Tengo un enfoque analítico, siempre orientado a aportar ideas
                para mejorar los procesos y soluciones.
            </p>
            <div><a href='/cv.pdf' className="mycv" download><FaFileDownload />Descargar mi CV</a></div>
            <div className="divisor-inf">
                <hr />
            </div>
        </div>
    )
}

export default About