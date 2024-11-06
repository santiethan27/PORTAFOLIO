import React from 'react'
import './mystudies.css'

function MyStudies() {
    return (
        <div className="mainstudi">
            <div className="mystudies" id='mystudies'>
                <h2>Mi experiencia y estudio</h2>
                <div className="study">
                    <h5>Analisis y desarrollo de Software - SENA</h5>
                    <p>Destaque como un estudiante ejemplar, destacando en el autoaprendizaje, trabajo en equipo, creatividad, comunicacion y liderazgo.</p>
                    <p>Allí desarrolle diferentes aplicaciones con PHP, JAVA, NODE.JS, SQL y React. </p>
                    <p className='date'>Desde Enero del 2023 a Octubre del 2024</p>
                </div>
                <div className="study">
                    <h5>Analista de implementacion - Evertec</h5>
                    <p>En este rol ejecute mis funciones ayudando a los comercios a integrarse con la pasarela de pago, debia resolver sus dudas y capacitarlos. Ademas tenia que solucionar errores de codigo que surgieron al momento de integrarse con la pasarela</p>
                    <p>Mi desafio, fue desarrollar una automatizacion para reduccir los tiempos de implementacion en mi area en un 30%</p>
                    <p className='date'>Desde Abril a Octubre del 2024</p>
                </div>
            </div>
        </div>
    )
}

export default MyStudies