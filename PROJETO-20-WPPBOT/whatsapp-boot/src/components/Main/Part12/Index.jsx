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


function Part12(props) {
    const { setName } = useName();
    const [showPreload1, setShowPreload1] = useState([false, false, true]);
    const [showPreload2, setShowPreload2] = useState([false, false, true]);
    const [showPreload3, setShowPreload3] = useState([false, false, true]);
    const [showPreload4, setShowPreload4] = useState([false, false, true]);
    const [showPreload5, setShowPreload5] = useState([false, false, true]);
    const [showPreload6, setShowPreload6] = useState([false, false, true]);
    const [showPreload7, setShowPreload7] = useState([false, false, true]);
    const [showPreload8, setShowPreload8] = useState([false, false, true]);
   

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
            }, 3000);

            const preloadTimer3 = setTimeout(() => {
                setShowPreload2([false, true, false]);
                setShowPreload3([true, false, false]);
                notifyNewMessage();
            }, 14000);

            const preloadTimer4 = setTimeout(() => {
                setShowPreload3([false, true, false]);
                setShowPreload4([true, false, false]);
                notifyNewMessage();
            }, 23000);

            const preloadTimer5 = setTimeout(() => {
                setShowPreload4([false, true, false]);
                setShowPreload5([true, false, false]);
                notifyNewMessage();
            }, 30000);

            const preloadTimer6 = setTimeout(() => {
                setShowPreload5([false, true, false]);
                setShowPreload6([true, false, false]);
                notifyNewMessage();
            }, 50000);

            const preloadTimer7 = setTimeout(() => {
                setShowPreload6([false, true, false]);
                setShowPreload7([true, false, false]);
                notifyNewMessage();
            }, 73000);

            const preloadTimer8 = setTimeout(() => {
                setShowPreload7([false, true, false]);
                setShowPreload8([true, false, false]);
                notifyNewMessage();
            }, 89000);

            const preloadTimer9 = setTimeout(() => {
                setShowPreload8([false, true, false]);
                notifyNewMessage();
                props.activateBoxInput(10);
            }, 105000);

            const timer1 = setTimeout(() => {
                setName('Digitando');
            }, 0);

            const timer2 = setTimeout(() => {
                setName('Gravando');
            }, 3000);

            const timer3 = setTimeout(() => {
                setName('Online')
            }, 105000);

            return () => {
                clearTimeout(preloadTimer1);
                clearTimeout(preloadTimer2);
                clearTimeout(preloadTimer3);
                clearTimeout(preloadTimer4);
                clearTimeout(preloadTimer5);
                clearTimeout(preloadTimer6);
                clearTimeout(preloadTimer7);
                clearTimeout(preloadTimer8);
                clearTimeout(preloadTimer9);
                clearTimeout(timer1);
                clearTimeout(timer2);
                clearTimeout(timer3);
            };
        }
        // eslint-disable-next-line
    }, [props.status, notifyNewMessage, props, setName]);

    return (

        <>

            {props.status && <Photofixed />}
            <Boxtest2>
                {showPreload1[2] && <></>}
                {showPreload1[0] && <MensagemAuto textOne={<Preload />} />}
                {showPreload1[1] && (
                    <ExpandAnimation>
                        <MensagemAuto textOne={'Gran decisión, ' + props.name} textTwo={'Escucha los audios para finalizar tu registro... 👇🏽'} space={true} img={false} />
                    </ExpandAnimation>
                )}
                {showPreload2[2] && <></>}
                {showPreload2[0] && <MensagemAuto textOne={<Preload />} />}
                {showPreload2[1] && (
                    <ExpandAnimation>
                        <MensagemAudioAuto audio='19' />
                    </ExpandAnimation>
                )}
                {showPreload3[2] && <></>}
                {showPreload3[0] && <MensagemAuto textOne={<Preload />} />}
                {showPreload3[1] && (
                    <ExpandAnimation>
                        <MensagemAudioAuto audio='20' />
                    </ExpandAnimation>
                )}
                {showPreload4[2] && <></>}
                {showPreload4[0] && <MensagemAuto textOne={<Preload />} />}
                {showPreload4[1] && (
                    <ExpandAnimation>
                        <MensagemAudioAuto audio='21' />
                    </ExpandAnimation>
                )}
                {showPreload5[2] && <></>}
                {showPreload5[0] && <MensagemAuto textOne={<Preload />} />}
                {showPreload5[1] && (
                    <ExpandAnimation>
                        <MensagemAudioAuto audio='22' />
                    </ExpandAnimation>
                )}
                {showPreload6[2] && <></>}
                {showPreload6[0] && <MensagemAuto textOne={<Preload />} />}
                {showPreload6[1] && (
                    <ExpandAnimation>
                        <MensagemAudioAuto audio='23' />
                    </ExpandAnimation>
                )}

                {showPreload7[2] && <></>}
                {showPreload7[0] && <MensagemAuto textOne={<Preload />} />}
                {showPreload7[1] && (
                    <ExpandAnimation>
                        <MensagemAudioAuto audio='24' />
                    </ExpandAnimation>
                )}

                {showPreload8[2] && <></>}
                {showPreload8[0] && <MensagemAuto textOne={<Preload />} />}
                {showPreload8[1] && (
                    <ExpandAnimation>
                        <MensagemAudioAuto audio='25' />
                    </ExpandAnimation>
                )}
            </Boxtest2>
        </>
    )
};

export default Part12;