import styled from 'styled-components'

const DivHeader = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #005e54;
    color: #fff;
    font-size: 6px;
    bottom: 0px;
    height: 40px;

    a {
        color: #fff;
        text-decoration: none;
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