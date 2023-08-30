import React from 'react';
import profile from "../../../img/profile.jpg"
import styled from 'styled-components'

const DivImg = styled.div`
    margin-left: 16px;
    width: 36px;
    height: 36px;
`

const Img = styled.img`  
    border-radius: 50%;
    width: 100%;
    height: 100%;

`

function Avatar() {
    return (
        <DivImg>
            <Img src={profile} alt='the-profile' />
        </DivImg>
    )
}

export default Avatar