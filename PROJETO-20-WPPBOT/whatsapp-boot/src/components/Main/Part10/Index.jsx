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

function Part10(props) {
    const { setName } = useName();
    const [showPreload1, setShowPreload1] = useState([false, false, true]);
    const [showPreload2, setShowPreload2] = useState([false, false, true]);
    const [showPreload3, setShowPreload3] = useState([false, false, true]);
    const [showPreload4, setShowPreload4] = useState([false, false, true]);
    const [showPreload5, setShowPreload5] = useState([false, false, true]);



    useEffect(() => {
        const notifyNewMessage = () => {
            props.onNewMessage();
        };

        if (props.status === true) {

            const preloadTimer1 = setTimeout(() => {
                setShowPreload1([true, false, false]);
                notifyNewMessage();
            }, 0);

            const preloadTimer2 = setTimeout(() => {
                setShowPreload1([false, true, false]);
                setShowPreload2([true, false, false]);
                notifyNewMessage();
            }, 6000);

            const preloadTimer3 = setTimeout(() => {
                setShowPreload2([false, true, false]);
                setShowPreload3([true, false, false]);
                notifyNewMessage();
            }, 8000);

            const preloadTimer4 = setTimeout(() => {
                setShowPreload3([false, true, false]);
                setShowPreload4([true, false, false]);
                notifyNewMessage();
            }, 12000);

            const preloadTimer5 = setTimeout(() => {
                setShowPreload4([false, true, false]);
                setShowPreload5([true, false, false]);
                notifyNewMessage();
            }, 18000);

            const preloadTimer6 = setTimeout(() => {
                setShowPreload5([false, true, false]);
                notifyNewMessage();
                props.activateBoxInput(8);
            }, 20000);

            const timer1 = setTimeout(() => {
                setName('Gravando');
            }, 0);

            const timer2 = setTimeout(() => {
                setName('Digitando');
            }, 5900);

            const timer3 = setTimeout(() => {
                setName('Gravando')
            }, 11900);

            const timer4 = setTimeout(() => {
                setName('Digitando');
            }, 17900);

            const timer5 = setTimeout(() => {
                setName('Online');
            }, 20100);

            return () => {
                clearTimeout(preloadTimer1);
                clearTimeout(preloadTimer2);
                clearTimeout(preloadTimer3);
                clearTimeout(preloadTimer4);
                clearTimeout(preloadTimer5);
                clearTimeout(preloadTimer6);
                clearTimeout(timer1);
                clearTimeout(timer2);
                clearTimeout(timer3);
                clearTimeout(timer4);
                clearTimeout(timer5);
            };
        }

        // eslint-disable-next-line
    }, [notifyNewMessage, props, setName]);

    return (

        <>
            {props.status && <Photofixed />}
            <Boxtest2>
                {showPreload1[2] && <></>}
                {showPreload1[0] && <MensagemAuto textOne={<Preload />} />}
                {showPreload1[1] && (
                    <ExpandAnimation>
                        <MensagemAudioAuto audio='15' />
                    </ExpandAnimation>
                )}
                {showPreload2[2] && <></>}
                {showPreload2[0] && <MensagemAuto textOne={<Preload />} />}
                {showPreload2[1] && (
                    <ExpandAnimation>
                        <MensagemAuto textOne={'Los beneficios de participar en el reto en 21 días son estos...'} textTwo={false} space={false} img={false} />
                    </ExpandAnimation>
                )}
                {showPreload3[2] && <></>}
                {showPreload3[0] && <MensagemAuto textOne={<Preload />} />}
                {showPreload3[1] && (
                    <ExpandAnimation>
                        <MensagemAuto textOne={
                            <>
                                ✅ Pérdida rápida de peso <br />
                                ✅ Reducción de la celulitis<br />
                                ✅ Aumento del autoestima<br />
                                ✅ Reducción de la ansiedad<br />
                                ✅ Menos pérdida de cabello<br />
                                ✅ Eliminación de dolores corporales<br />
                                ✅ Aumento de apetito sexual<br />
                                ✅ Sensación de bienestar<br />
                                ✅ Prevención de enfermedades
                            </>
                        } textTwo={false} space={false} img={false} />
                    </ExpandAnimation>
                )}
                {showPreload4[2] && <></>}
                {showPreload4[0] && <MensagemAuto textOne={<Preload />} />}
                {showPreload4[1] && (
                    <ExpandAnimation>
                        <MensagemAudioAuto audio='16' />
                    </ExpandAnimation>
                )}
                {showPreload5[2] && <></>}
                {showPreload5[0] && <MensagemAuto textOne={<Preload />} />}
                {showPreload5[1] && (
                    <ExpandAnimation>
                        <MensagemAuto textOne={<>¿Te gustaría <strong>PARTICIPAR?</strong></>} textTwo={false} space={false} img={false} />
                    </ExpandAnimation>
                )}
            </Boxtest2>
        </>
    )
};

export default Part10;