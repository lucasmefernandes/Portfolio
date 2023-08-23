import styled from "styled-components"

const DivBack = styled.div`
    margin-left: 16px;
    display: flex;
    align-items: center;
`

function Back() {
    return (
        <DivBack>
            <span className="material-symbols-outlined">
                arrow_back
            </span>
        </DivBack>
    )
}


export default Back