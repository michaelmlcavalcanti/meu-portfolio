import styled from 'styled-components';

const EstiloContatos = styled.div`
    height: 70vh;
    padding: 20px 0px;
`

const EstiloContato = styled.a`
    display: flex;
    padding: 0px 40px 20px;
    align-items: center;
    width: 10vw;
    border-radius: 0px 50px;
    h3{
        font-size: 14px;
    }

    &:hover{
        cursor: pointer;
        color: black;
        background: grey;
    }
`

export { EstiloContatos, EstiloContato};