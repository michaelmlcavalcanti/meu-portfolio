import styled from "styled-components"

const EstiloEu = styled.div`
    display: flex;
    width: 50vw;
`;

const EstiloDescricao = styled.div`
    flex: 1;
    padding: 0px 40px;
    h1 {
        font-size: 40px;
    }

    h2 {
        font-size: 32px;
        font-weight: lighter;
        color: black;
    }
    p {
        font-size: 24px;
    }
`;



export { EstiloEu, EstiloDescricao };