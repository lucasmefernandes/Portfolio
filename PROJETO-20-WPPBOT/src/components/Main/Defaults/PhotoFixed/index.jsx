import React from 'react';
import styled from 'styled-components';
import profile from '../../../../img/profile.jpg'

const DivMensegerPhoto = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`

const BoxImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-bottom: 8px;

    @media (min-width: 320px) and (max-width: 475px) {
        width: 35px;
        height: 35px;
    }
`

const Boxtest1 = styled.div`
    margin: 0 16px;
    display: flex;
    flex-direction: column;

    @media (min-width: 320px) and (max-width: 475px) {
        margin: 0;
    }
`

function Photofixed() {
    return (
        <Boxtest1>
            <DivMensegerPhoto>
                <BoxImage src={profile} alt='Icon-Profile' />
            </DivMensegerPhoto>
        </Boxtest1>
    )
}

export default Photofixed