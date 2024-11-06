import React from 'react'
import './contact.css'
import { FaWhatsapp } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'
function Contact() {
    return (
        <div className='mycontact-main'>
            <h2>Contactame</h2>
            <hr />
            <div className="contact">
                <p><FaWhatsapp /> +57 3046541435</p>
                <p><FaMailBulk /> santiagoestradajaramillo72@gmail.com</p>
            </div>
        </div>
    )
}

export default Contact