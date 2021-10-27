import styled from "styled-components";

const EstiloCurriculo = styled.div`
    display: flex;
    height: 70vh;
`;

const EstiloDescricaoCurriculo = styled.div`
    flex: 1;
    padding: 0px 40px;
    width: 50vw;

    h1 {
        font-size: 36px;
    }

    h2 {
        font-size: 28px;
        font-weight: lighter;
        color: black;
    }
    p {
        font-size: 20px;
    }

    .listaEscolaridade{
        list-style: none;
    }

    .listaConhecimentos{
        width: fit-content;
        list-style: none;
    }

`;
    
export { EstiloCurriculo, EstiloDescricaoCurriculo};