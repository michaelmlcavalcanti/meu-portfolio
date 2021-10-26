import React from 'react'

import { faGithubSquare, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Cartoes, Cartao } from '../Estilo/Estilo_Tecnologias'

const Tecnologias = function () {
    return (
        <Cartoes>
            <Cartao>
                <div className="icon">
                    <FontAwesomeIcon icon = {faJs} size='3x'/>
                    <h3>JavaScript</h3>
                </div>
            </Cartao>
            <Cartao>
                <div className="icon">
                    <FontAwesomeIcon icon = {faReact} size='3x'/>
                    <h3>React</h3>
                </div>
            </Cartao>
            <Cartao>
                <div className="icon">
                    <FontAwesomeIcon icon = {faGithubSquare} size='3x'/>
                    <h3>GitHub</h3>
                </div>
            </Cartao>
        </Cartoes>
    )
}

export default Tecnologias;