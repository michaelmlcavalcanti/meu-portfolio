import React from "react";
import { EstiloDescricao, EstiloEu, EstiloImagem } from "../Estilo/Estilo_Eu";

const Eu = function () {
    return(
        <EstiloEu>
            <EstiloDescricao>
                <h1>Michael Cavalcanti</h1>
                <h2>Estudante</h2>
                <p>
                Sou um estudante de Engenharia da Computação na Escola Politécnica de Pernambuco, estou utilizando esse site para praticar os conceitos de um curso de FullStack realizado na plataforma Udemy, o curso é baseado em MERN (Mongo, Express, React e Node).
                </p>
            </EstiloDescricao>
            <EstiloImagem> 
                <img src="https://i.imgur.com/nzxOy59.jpg"></img>
            </EstiloImagem>
        </EstiloEu>
    )
}

export default Eu;