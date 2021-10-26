import styled from "styled-components"

const EstiloEu = styled.div`
    display: flex;
    height: 70vh;
`;

const EstiloDescricao = styled.div`
    flex: 1;
    padding: 0px 40px;
    width: 50vw;
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

const EstiloImagem = styled.div`
    width: 50vw;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export { EstiloEu, EstiloDescricao, EstiloImagem };