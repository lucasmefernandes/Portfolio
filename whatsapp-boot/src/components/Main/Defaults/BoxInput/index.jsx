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
    right: -12px;
    bottom: 25px;
`

const DivBox = styled.div`
    position: relative;
    right: 20px;
    text-align: left;
    display: inline-block;
    padding: 12px;
    background: transparent;
    border-radius: 10px;
    font-size: 0.9em;
    color: #fff;
    width: 85%;
`

const DivBoxResult = styled.div`
    position: relative;
    right: 20px;
    text-align: left;
    display: inline-block;
    background: transparent;
    border-radius: 10px;
    color: #fff;
`

const ButtonClient = styled.button`
    background: rgba(0, 138, 134, 1);
    border-radius: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: none;
    color: transparent;
    bottom: 12px;
    left: 665px;
    cursor: pointer;


    &::before {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 25px;
        height: 25px;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="19px"><path d="M476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0027.14 52 24.65 24.65 0 0016 72.59v113.29a24 24 0 0019.52 23.57l232.93 43.07a4 4 0 010 7.86L35.53 303.45A24 24 0 0016 327v113.31A23.57 23.57 0 0026.59 460a23.94 23.94 0 0013.22 4 24.55 24.55 0 009.52-1.93L476.4 285.94l.19-.09a32 32 0 000-58.8z" fill="white"/></svg>');
    }
`

const Input = styled.input`
    display: flex;
    width: 100%;
    border: none;
    border-radius: 50px;
    height: 50px;
    padding-left: 20px;
    outline: none;

    &::placeholder {
        color: #888; 
    }

`;

const DivResult = styled.div`
    right: 20px;
    text-align: left;
    display: inline-block;
    padding: 12px;
    background: #D9FDD2;
    border-radius: 10px;
`

const ButtonClientResult = styled.button`
    width: 100px;
    height: 21px;
    border: none;
    color: #000;
    background: initial;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`

function BoxClient(props) {

    const [inputValue, setInputValue] = useState('')
    const [click, setClick] = useState(false)

    function handleSubmit() {
        props.onSubmit(inputValue);
        setClick(true);
    }

    if (props.status === true) {


        return (
            <BoxFixedAuto>
                <BoxtestClient>
                    <MessageClient>
                        {click ?
                            <DivBoxResult>
                                <DivResult>
                                    <ButtonClientResult>{inputValue}</ButtonClientResult>
                                    <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100" className="sc-kDnyCx dwrxBe"><polygon points="0,0 100,0 100,100" fill="#D9FDD2" transform="rotate(270 50 50)"></polygon></Svg>
                                </DivResult>
                            </DivBoxResult>
                            :
                            <DivBox>
                                <Input type='text' placeholder={props.place} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                                <ButtonClient onClick={handleSubmit} />
                            </DivBox>

                        }
                    </MessageClient>
                </BoxtestClient>
            </BoxFixedAuto>
        )
    } else {
        return <></>
    }
}


export default BoxClient