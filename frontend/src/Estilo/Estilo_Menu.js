import styled from 'styled-components'

const EstiloMenu = styled.div`
    height: 10vh;
    background: #282828;
    font-size: 20px;

    ul {
        display: flex;
        list-style: none;
        padding: 15px;
    }
    li{
        padding: 20px;
    }
    a{
        color: white;
        text-decoration: none;
    }
`;

export default EstiloMenu;