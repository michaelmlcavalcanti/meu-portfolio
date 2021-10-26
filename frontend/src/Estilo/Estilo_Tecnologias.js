import styled from "styled-components";

const Cartoes = styled.div`
    height: 15vh;
    display: flex;
`
const Cartao = styled.div`
    padding: 10px;
    padding-top: 35px;
    .icon{
        align-items: center;
        display: flex;
        color: white;
    }
    h3{
        color: white;
        padding: 10px;
    }
`

export { Cartoes, Cartao };