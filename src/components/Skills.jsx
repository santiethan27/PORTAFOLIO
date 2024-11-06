import React from 'react'
import './skills.css'

function Skills() {
    return (
        <div className='main-skills' id='skills'>
            <h2>Mis habilidades</h2>
            <div className="skills">
                <div className="skill">
                    <img src="/skills/php.png" alt="" />
                </div>
                <div className="skill">
                    <p>GIT</p>
                    <img src="/skills/git.png" alt="" />
                </div>
                <div className="skill">
                    <img src="/skills/html.png" alt="" />
                </div>
                <div className="skill">
                    <img src="/skills/css.png" alt="" />
                </div>
                <div className="skill">
                    <p>REACT</p>
                    <img src="/skills/react.png" alt="" />
                </div>
                <div className="skill">
                    <p>JAVA</p>
                    <img src="/skills/java.png" alt="" />
                </div>
                <div className="skill">
                    <p>JAVASCRIPT</p>
                    <img src="/skills/js.webp" alt="" />
                </div>
                <div className="skill">
                    <p>SQL - MYSQL</p>
                    <img src="/skills/SQL.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Skills