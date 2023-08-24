import React, { useState } from 'react';
import styled from 'styled-components';

const BoxFixedAuto = styled.div`
    width: 100%;
    display: flex;
`

const BoxtestClient = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const MessageClient = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  margin: 5px 0;
`

const Svg = styled.svg`
    position: absolute;
    right: 0px;
    bottom: 25px;

    @media (min-width: 320px) and (max-width: 768px){
    bottom: 20px;}
`

const DivBox = styled.div`
    margin-right: 12px;
    text-align: left;
    padding: 12px;
    background: ${(props) => props.color || '#128c7e'};
    border-radius: 10px;
    color: ${(props) => props.text || '#fff'};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
        background: ${(props) => props.color || '#107E71'};
    }

`

const ButtonClient = styled.div`
    width: 150px;
    border: none;
    color: ${(props) => props.color1 || '#fff'};
    background: initial;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 320px) and (max-width: 768px) {
      font-size: 12px;
    }


    &:hover {
        background: ${(props) => props.color || '#107E71'};
    }
`

const PingSpan = styled.span`
    display: inline-flex;
    position: absolute;
    top: -3px;
    right: 8px;
    border-radius: 50%;
    height: 15px;
    width: 15px;
    background: #1BD2BD;
    
    .ping-outer {
        display: inline-flex;
        position: relative;
        border-radius: 50%;
        background: #1BD2BD;
        height: 15px;
        width: 15px;
        animation: ping-animation 1s cubic-bezier(0,0,.2,1) infinite;
    }

    @keyframes ping-animation {
        75%, 100% {
        transform: scale(2);
        opacity: 0;
        }
    }
`;

const Triangle  = styled.div`
    position: absolute;
    left: 152px;
    top: -2.2px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #D9FDD2; 
    transform: rotate(314deg)
`

function BoxClient(props) {

    const [click, setClick] = useState(false)

    function handleClick() {
        setClick(true)
    }

    return (
        <BoxFixedAuto>
            <BoxtestClient>
                <MessageClient>
                    {click ?
                        <DivBox color='#D9FDD2'>
                            <ButtonClient color='#D9FDD2' color1='#000'>{props.text}</ButtonClient>
                            <Triangle />
                        </DivBox>
                        : 
                        <DivBox onClick={handleClick}>
                            <ButtonClient>{props.text}</ButtonClient>
                            <PingSpan>
                                <span className="ping-outer"></span>
                            </PingSpan>
                        </DivBox>}

                </MessageClient>
            </BoxtestClient>
        </BoxFixedAuto>
    )
}


export default BoxClient