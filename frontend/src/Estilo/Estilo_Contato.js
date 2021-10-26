import styled from 'styled-components';

const EstiloContatos = styled.div`
    height: 70vh;
    padding: 20px 40px;
`

const EstiloContato = styled.a`

    h3{
        font-size: 14px;
    }

    &:hover{
        cursor: pointer; 
    }
`

export { EstiloContatos, EstiloContato};