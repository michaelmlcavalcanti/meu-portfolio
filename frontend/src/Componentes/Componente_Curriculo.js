import React from 'react'

import { faCss3Alt, faGithubSquare, faHtml5, faJs, faNode, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { EstiloCurriculo, EstiloDescricaoCurriculo,  }from '../Estilo/Estilo_Curriculo'

const Curriculo = function () {
    return(
        <EstiloCurriculo>
            <EstiloDescricaoCurriculo>
            <h1>Michael Matheus de Lima Cavalcanti</h1>
            <h2>Escolaridade</h2>
            <ul className='listaEscolaridade'>
                <li>
                    <p>Curso: Engenharia da Computação</p>
                    <p>Instituição: Escola Politécnica de Pernambuco</p>
                    <p>Situação: Previsão para conclusão em 2022.2</p>
                </li>
            </ul>
            <h2>Conhecimentos</h2>
            <ul className='listaConhecimentos'>
                <li>
                    <FontAwesomeIcon icon = {faGithubSquare} size='2x'/>
                </li>
                <li>
                    <FontAwesomeIcon icon = {faPython} size='2x' color='blue'/>
                </li>
                <li>
                    <FontAwesomeIcon icon = {faJs} size='2x' color='rgb(238, 234, 17)'/>
                </li>
                <li>
                    <FontAwesomeIcon icon = {faHtml5} size='2x' color='orange'/>
                </li>
                <li>
                    <FontAwesomeIcon icon = {faCss3Alt} size='2x' color='blue'/>
                </li>
                <li>
                    <FontAwesomeIcon icon = {faNode} size='2x' color='rgb(5, 83, 31)'/>
                </li>
                <li>
                    <FontAwesomeIcon icon = {faReact} size='2x' color='rgb(7, 142, 204)'/>
                </li>
               
            </ul>
            <h2>Experiência</h2>
            <ul>
                <p>Sem experiência profissional na área de desenvolvimento.</p>
            </ul>

            </EstiloDescricaoCurriculo>
        </EstiloCurriculo>
    ) 
}

export default Curriculo;