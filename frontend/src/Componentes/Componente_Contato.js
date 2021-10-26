import React from 'react';

import { faGithubSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EstiloContatos, EstiloContato } from '../Estilo/Estilo_Contato';

const Contato = function() {
    return(
        <EstiloContatos>
            <EstiloContato href='https://www.linkedin.com/in/michael-cavalcanti-177690218/' target='_blank'>
                <FontAwesomeIcon icon = {faLinkedin} size='3x' color='black'/>
                    <h3>Linkedin</h3>
            </EstiloContato>
            <EstiloContato href='https://instagram.com/michaelmlcavalcanti' target='_blank'>
                <FontAwesomeIcon icon = {faInstagramSquare} size='3x' color='black'/>
                    <h3>Instagram</h3>
            </EstiloContato>
            <EstiloContato href='https://github.com/michaelmlcavalcanti' target='_blank'>
                <FontAwesomeIcon icon = {faGithubSquare} size='3x' color='black'/>
                    <h3>Github</h3>
            </EstiloContato>
        </EstiloContatos>
    )
};

export default Contato;