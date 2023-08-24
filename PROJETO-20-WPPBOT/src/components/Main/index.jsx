import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ButtonEnd from './Defaults/ButtonEnd'
import MensegerFix from './Defaults/MensageFixedTop';
import BoxInput from "./Defaults/BoxInput"
import Part01 from './Part01/index';
import Part02 from './Part02/Index';
import Part03 from './Part03/Index.jsx';
import Part04 from './Part04/Index.jsx';
import Part05 from './Part05/Index.jsx';
import Part06 from './Part06/Index.jsx';
import Part07 from './Part07/Index.jsx';
import Part08 from './Part08/Index.jsx';
import Part09 from './Part09/Index.jsx';
import Part10 from './Part10/Index.jsx';
import Part11 from './Part11/Index.jsx';
import Part12 from './Part12/Index.jsx';

const ChatBox = styled.div`
    position: relative;
    width: 800px;
    height: 700px;
    overflow: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        width: 0px;
    }

    @media (min-width: 350px) and (max-width: 768px) {
        bottom: 0px;
        width: 400px;
        height: 600px;

        p {
            font-size: 14px;
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        bottom: 0px;
        width: 700px;
        height: 600px;
    }
`

const BoxFixedAuto = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    a {
        color: #fff;
        text-decoration: none;
    }
`

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;  
`

function Main() {
    const [nameUsuario, setNomeUsuario] = useState('');
    const [ageUser, setAgeUser] = useState('')
    const [weightUser, setWeightUserUser] = useState('')
    const [elementosVisiveis, setElementosVisiveis] = useState({
        Part03: false,
        Part04: false,
        Part05: false,
        Part06: false,
        Part07: false,
        Part08: false,
        Part09: false,
        Part10: false,
        Part11: false,
        Part12: false
    });
    const [buttonOff, setButtonOff] = useState({
        Btn1: false,
        Btn2: false,
        Btn3: false,
        Btn4: false,
        Btn5: false,
        Btn6: false,
        Btn7: false,
        Btn8: false,
    });


    const toggleVisibilidade = (elemento, Btn) => {
        setElementosVisiveis((prevState) => ({ ...prevState, [elemento]: !prevState[elemento], }));
        setButtonOff((prevState) => ({ ...prevState, [Btn]: !prevState[Btn], }));
    };

    const handleNameSubmit = (name) => {
        setNomeUsuario(name);
        toggleVisibilidade('Part04')
    };

    const handleAgeSubmit = (age) => {
        setAgeUser(age);
        toggleVisibilidade('Part06')
    };

    const handleWeightSubmit = (weight) => {
        setWeightUserUser(weight);
        toggleVisibilidade('Part05')
    };

    const [isBoxInputActive, setIsBoxInputActive] = useState([false, false, false, false, false, false, false, false, false, false, false,]);

    const activateBoxInput = (n) => {
        setIsBoxInputActive(prevState => {
            // Crie uma nova matriz com a atualização desejada
            return prevState.map((value, index) => (index === n ? true : value));
        });
    };

    const [contador, setContador] = useState(0);
    let cont = 0;

    const adicionarMensagem = () => {
        setContador(cont++);
    };

    const chatBoxRef = useRef(null);

    const scrollToBottom = () => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        // Sempre que o contador for atualizado, role para o final do chat.
        scrollToBottom();
    }, [contador]);

    const link = 'https://pay.hotmart.com/E76959711Y?off=krqi4sbu&checkoutMode=10&bid=1692740611137'

    return (
        <>
            <ChatBox ref={chatBoxRef}>
                <MensegerFix text="Ésta es una cuenta comercial y no recibimos llamadas " status={true} />

                <BoxFixedAuto>
                    <Part01 activateBoxInput={activateBoxInput} onNewMessage={adicionarMensagem} />
                </BoxFixedAuto>

                <BoxFixedAuto>
                    <Button onClick={() => toggleVisibilidade('Part03', 'Btn1')} disabled={buttonOff.Btn1} >
                        <Part02 text='¡SÍ!' status={isBoxInputActive[0]} />
                    </Button>
                </BoxFixedAuto>

                <BoxFixedAuto>
                    <Part03 status={elementosVisiveis.Part03} activateBoxInput={activateBoxInput} onNewMessage={adicionarMensagem} />
                </BoxFixedAuto>

                <BoxInput onSubmit={handleNameSubmit} place='Introduzca sólo el nombre.' status={isBoxInputActive[1]} req='text' />
                <BoxFixedAuto>
                    <Part04 name={nameUsuario} status={elementosVisiveis.Part04} activateBoxInput={activateBoxInput} onNewMessage={adicionarMensagem} />
                </BoxFixedAuto>

                <BoxInput onSubmit={handleWeightSubmit} place='Introduzca sólo números' status={isBoxInputActive[2]} req='idade' />

                <BoxFixedAuto>
                    <Part05 status={elementosVisiveis.Part05} activateBoxInput={activateBoxInput} onNewMessage={adicionarMensagem} />
                </BoxFixedAuto>

                <BoxInput onSubmit={handleAgeSubmit} place='Introduzca su edad ' status={isBoxInputActive[3]} req='peso' />

                <BoxFixedAuto>
                    <Part06 age={ageUser} name={nameUsuario} weight={weightUser} status={elementosVisiveis.Part06} activateBoxInput={activateBoxInput} onNewMessage={adicionarMensagem} />
                </BoxFixedAuto>

                <BoxFixedAuto>
                    <Button
                        onClick={() => toggleVisibilidade('Part07', 'Btn2')} disabled={buttonOff.Btn2}>
                        <Part02 text='¡Sí, así es!' status={isBoxInputActive[4]} />
                    </Button>
                </BoxFixedAuto>

                <BoxFixedAuto>
                    <Part07 name={nameUsuario} status={elementosVisiveis.Part07} activateBoxInput={activateBoxInput} onNewMessage={adicionarMensagem} />
                </BoxFixedAuto>

                <BoxFixedAuto>
                    <Button
                        onClick={() => toggleVisibilidade('Part08', 'Btn3')} disabled={buttonOff.Btn3}>
                        <Part02 text='Continuar' status={isBoxInputActive[5]} />
                    </Button>
                </BoxFixedAuto>

                <BoxFixedAuto>
                    <Part08 status={elementosVisiveis.Part08} activateBoxInput={activateBoxInput} onNewMessage={adicionarMensagem} />
                </BoxFixedAuto>

                <BoxFixedAuto>
                    <Button
                        onClick={() => toggleVisibilidade('Part09', 'Btn4')} disabled={buttonOff.Btn4} >
                        <Part02 text='¡Sí, lo haría!' status={isBoxInputActive[6]} />
                    </Button>
                </BoxFixedAuto>
                <BoxFixedAuto>
                    <Part09 name={nameUsuario} status={elementosVisiveis.Part09} activateBoxInput={activateBoxInput} onNewMessage={adicionarMensagem} />
                </BoxFixedAuto>

                <BoxFixedAuto>
                    <Button
                        onClick={() => toggleVisibilidade('Part10', 'Btn5')} disabled={buttonOff.Btn5} >
                        <Part02 text='¡Quiero saber más!' status={isBoxInputActive[7]} />
                    </Button>
                </BoxFixedAuto>

                <BoxFixedAuto>
                    <Part10 name={nameUsuario} status={elementosVisiveis.Part10} activateBoxInput={activateBoxInput} onNewMessage={adicionarMensagem} />
                </BoxFixedAuto>

                <BoxFixedAuto>
                    <Button
                        onClick={() => toggleVisibilidade('Part11', 'Btn6')} disabled={buttonOff.Btn6} >
                        <Part02 text='Sí, quiero participar' status={isBoxInputActive[8]} />
                    </Button>
                </BoxFixedAuto>

                <BoxFixedAuto>
                    <Part11 name={nameUsuario} status={elementosVisiveis.Part11} activateBoxInput={activateBoxInput} onNewMessage={adicionarMensagem} />
                </BoxFixedAuto>

                <BoxFixedAuto>
                    <Button
                        onClick={() => toggleVisibilidade('Part12', 'Btn7')} disabled={buttonOff.Btn7} >
                        <Part02 text='¡Sí, me encantaría!' status={isBoxInputActive[9]} />
                    </Button>
                </BoxFixedAuto> 
                <BoxFixedAuto>
                    <Part12 name={nameUsuario} status={elementosVisiveis.Part12} activateBoxInput={activateBoxInput} onNewMessage={adicionarMensagem} />
                </BoxFixedAuto>

                <BoxFixedAuto onClick={() => toggleVisibilidade('Part13', 'Btn8')} style={{ display: isBoxInputActive[10] ? 'flex' : 'none' }}>
                    <a href={link}>
                        <ButtonEnd text='Regístrate' text2='Haga clic en regístrate para completar su registro' status={true} />
                    </a>
                </BoxFixedAuto> 

            </ChatBox>
        </>
    )
}


export default Main