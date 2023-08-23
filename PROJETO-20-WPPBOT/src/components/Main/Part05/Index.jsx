import React, { useState, useEffect } from 'react';
import { useName } from '../../../context/NameContext';
import styled, { keyframes } from 'styled-components';
import Preload from "../Defaults/Preloand";

import MensagemAuto from "../Defaults/MensageDefault";
import Photofixed from "../Defaults/PhotoFixed";
import MensagemAudioAuto from "../Defaults/MensageDesafultAudio";

const Boxtest2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const openAnimation = keyframes`
from {
  opacity: 0.6;
}
to {
  opacity: 1;
}
`;

const ExpandAnimation = styled.div`
  animation: ${openAnimation} 0.5s ease-in-out;
}`

function Part05(props) {
    const { setName } = useName();
    const [showPreload1, setShowPreload1] = useState([false, false, true]);
    const [showPreload2, setShowPreload2] = useState([false, false, true]);
    const notifyNewMessage = () => {
        props.onNewMessage();
      };
    

    useEffect(() => {
        if (props.status === true) {

            const preloadTimer1 = setTimeout(() => {
                setShowPreload1([true, false, false]);
                notifyNewMessage();
            }, 0);

            const preloadTimer2 = setTimeout(() => {
                setShowPreload1([false, true, false]);
                setShowPreload2([true, false, false]);
                notifyNewMessage();
            }, 3000);

            const preloadTimer3 = setTimeout(() => {
                setShowPreload2([false, true, false]);
                notifyNewMessage();
                props.activateBoxInput(3);
            }, 4500);

            const timer1 = setTimeout(() => {
                setName('Grabando audio');
            }, 0);

            const timer2 = setTimeout(() => {
                setName('Escribiendo');
            }, 3000);

            const timer3 = setTimeout(() => {
                setName("En línea");
            }, 4500);

            return () => {
                clearTimeout(preloadTimer1);
                clearTimeout(preloadTimer2);
                clearTimeout(preloadTimer3);
                clearTimeout(timer1);
                clearTimeout(timer2);
                clearTimeout(timer3);
            };
        }
    }, [props.status]);

    return (
        <>
            {props.status && <Photofixed />}
            <Boxtest2>
                {showPreload1[2] && <></>}
                {showPreload1[0] && <MensagemAuto textOne={<Preload />} />}
                {showPreload1[1] && (
                    <ExpandAnimation>
                        <MensagemAudioAuto audio='3' />
                    </ExpandAnimation>
                )}
                {showPreload2[2] && <></>}
                {showPreload2[0] && <MensagemAuto textOne={<Preload />} />}
                {showPreload2[1] && (
                    <ExpandAnimation>
                        <MensagemAuto textOne='Introduzca su edad' textTwo={false} space={false} img={false} />
                    </ExpandAnimation>
                )}
            </Boxtest2>
        </>
    )
};

export default Part05;