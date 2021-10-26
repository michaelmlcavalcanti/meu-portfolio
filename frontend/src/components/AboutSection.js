import React from "react";

import { About, Description, Imagem } from '../styles'


const AboutSection = () => {
    return(
        <About>
            <Description>
                <h2>Michael Cavalcanti</h2>
                <h2>Estudante</h2>
                <p>
                Sou um estudante de Engenharia da Computação na Escola Politécnica de Pernambuco, estou utilizando esse site para praticar os conceitos de um curso de FullStack realizado na plataforma Udemy, o curso é baseado em MERN (Mongo, Express, React e Node).
                </p>
            </Description>
            <Imagem> 
                <img src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img>
            </Imagem>
        </About>
        
    )
}

export default AboutSection