import React from 'react'

import {Link} from 'react-router-dom'

import EstiloMenu from '../Estilo/Estilo_Menu'

const Menu = function () {
    return (
    <EstiloMenu>
        <ul>
            <li><Link to='/'> Página Inicial</Link></li>
            <li><Link to='/curriculo'> Currículo</Link></li>
            <li><Link to='/contato'> Contato</Link></li>
        </ul>
    </EstiloMenu>
    );
}

export default Menu;