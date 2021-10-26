import React from 'react'

import Styled from 'styled-components'

import {Link} from 'react-router-dom'

const Nav = function (){
    return (
    <StyledNav>
        <ul>
            <li><Link to='/'> Página Inicial</Link></li>
            <li><Link to='/portfolio'> Portfolio</Link></li>
            <li><Link to='/contato'> Contato</Link></li>
        </ul>
    </StyledNav>
    );
}

const StyledNav = Styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    padding: 0px 100px;
    background: #282828;
    position: sticky;
    top: 0;
    ul {
        display: flex;
        list-style: none;
    }
    li{
        padding: 50px;
    }
    a{
        color: white;
        text-decoration: none;
    }
`;

export default Nav