import styled from 'styled-components'

const DivHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #005e54;
    color: #fff;
    font-size: 6px;
    height: 40px;

    a {
        color: #fff;
        text-decoration: none;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        height: 30px;
    }
    
}
`

function Footer() {
    return (
        <DivHeader>
            <h1>Desenvolvido por <a href="https://lucasmefernandes.com/">@Lucasmefernandes &hearts;</a></h1>
        </DivHeader>
    )
}


export default Footer