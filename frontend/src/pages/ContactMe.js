import React from 'react'

import styled from 'styled-components';

import { faGithubSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactMe = function(){
    return(
    <div>
        <Network>
            <Social href='https://www.linkedin.com/in/michael-cavalcanti-177690218/' target='_blank'>
                <FontAwesomeIcon icon = {faLinkedin} size='3x' color='blue'/>
                <h3>Linkedin</h3>
            </Social>
            <Social href='https://instagram.com/michaelmlcavalcanti' target='_blank'>
                <FontAwesomeIcon icon = {faInstagramSquare} size='3x'/>
                <h3>Instagram</h3>
            </Social>
            <Social href='https://github.com/michaelmlcavalcanti' target='_blank'>
                <div className="icon">
                    <FontAwesomeIcon icon = {faGithubSquare} size='3x' color='white'/>
                </div>
                <h3>Github</h3>
            </Social>   
        </Network>
    </div>
    )
}

const Network = styled.div`
    padding: 10px 50px;
`;

const Social = styled.a`
    display: flex;
    min-height: 10vh;
    width: 25vw;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 15px 50px;
    padding-left: 100px;
    text-decoration: none;
    &:hover{
        background: green;
        cursor: pointer;
    }
`

export default ContactMe