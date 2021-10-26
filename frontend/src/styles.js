import styled from "styled-components";

export const About = styled.div`
    min-height: 90 vh;
    display: flex;
    align-items: center;
    justify-content: space-beetween;
    padding: 0px 150px;
    color: white;
`;

export const Description = styled.div`
    flex: 1;
    padding-right: 50px;
    z-index: 2;
    h2 {
        font-weight: lighter;
        color: white;
    }
`;

export const Imagem = styled.div`
    flex: 1;
    padding-top: 10px;
    padding-right: 10px;
    z-index: 2;
    overflow: hidden;
    img {
        width: 100%;
        height: 75%;
        object-fit: cover;
    }
`;