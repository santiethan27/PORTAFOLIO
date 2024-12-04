import React from "react";
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaFileDownload } from "react-icons/fa"
import './header.css'

const Header = () => {
    return (
        <section className="mypresentation">
            <article className="networks">
                <p className="myname">Hola! Soy Santiago Estrada</p>
                <p className="rol"><span>FullStack</span> Developer</p>
                <div><a href="https://www.linkedin.com/in/santiagoestradadev/"><FaLinkedin /></a><a href="https://github.com/santiethan27"><FaGithub /></a></div>
            </article>
            <img className="mypicture" src="/mypicture.jpg" alt="Santiago Estrada" />
        </section>
    )
}

export default Header;