import React, { useState } from 'react';
import styled from 'styled-components';

const BoxFixedAuto = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

const BoxtestClient = styled.div`
    width: 100%;
    height: 100%;
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
    width: 100px;
    position: relative;
    background: initial;
    right: -15px;
    padding: 20px;
    color: #fff;
`

const DivBox = styled.div`
    position: relative;
    right: 20px;
    background: #128c7e;
    border-radius: 10px;
    cursor: pointer;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    &:hover {
        background: #107E71};
    }

`

const ButtonClient = styled.div`
    width: 300px;
    border: none;
    color: #fff;
    background: initial;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding: 10px;

    &:hover {
        background: #107E71};
    }
`

const PingSpan = styled.span`
    display: inline-flex;
    position: absolute;
    top: -5px;
    right: -10px;
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

function BoxClient(props) {
    if (props.status === true) {
        return (
            <BoxFixedAuto>
                <BoxtestClient>
                    <MessageClient>
                        <DivBox>
                            <ButtonClient>
                                <Svg fill='#fff' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'><path d='M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z' /></Svg>
                                {props.text}
                            </ButtonClient>
                            <ButtonClient>{props.text2}</ButtonClient>
                            <PingSpan>
                                <span className="ping-outer"></span>
                            </PingSpan>
                        </DivBox>
                    </MessageClient>
                </BoxtestClient>
            </BoxFixedAuto>
        )
    } else {
        return <></>
    }
}


export default BoxClient