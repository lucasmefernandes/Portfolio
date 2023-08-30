import React from 'react';
import Avatar from './avatar';
import styled from 'styled-components'
import Back from './back';
import { Name } from './name';

const DivHeader = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    width: 100%;
    background-color: #005e54;
    color: #fff;
    font-size: 24px;
    position: relative;
    height: 60px;
    z-index: 999;
`

function Header() {
    return (
    <DivHeader>
        <Back />
        <Avatar />
        <Name />
    </DivHeader>
    )
}


export default Header