import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #1b1b1b;
        overflow-x: hidden;
        text-decoration: none;
    }

    button{
        font-weight: bold;
        font-size: 20px;
        cursor: pointer;
        padding:  5px 10px;
        background: transparent;
        color: white;
        border: 4px solid #416CD5;
        transition: all 0.5 ease;
        &:hover{
            background: #23d997;
            color: blue;
        }
    }

    h2{
        font-weight: lighter;
        font-size: 50px;
        color: white;
    }

    h3{
        color: white;
    }

    h4{
        font-weight: bold;
        font-size: 20px;
        color: lightgrey;
    }

    a{
        font-size: 12px;
    }

    span{
        font-weight: lighter;
        color: #416CD5;
    }

    p{
        padding: 50px 0px;
        color: white;
        font-size: 20px;
        line-height: 150%;
    }
`;

export default GlobalStyle;