import React, { useState, useEffect } from 'react';
import { useName } from '../../../context/NameContext';
import styled, { keyframes } from 'styled-components';
import Preload from "../Defaults/Preloand";

import VideoPlay from "../Defaults/VideoPlay"
import MensagemAuto from "../Defaults/MensageDefault";
import Photofixed from "../Defaults/PhotoFixed";
import MensagemAudioAuto from "../Defaults/MensageDesafultAudio";
import Depoimento3 from "../../../video/Depoimento3.mp4"

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

function Part11(props) {
    const { setName } = useName();
    const [showPreload1, setShowPreload1] = useState([false, false, true]);
    const [showPreload2, setShowPreload2] = useState([false, false, true]);
    const [showPreload3, setShowPreload3] = useState([false, false, true]);
    const [showPreload4, setShowPreload4] = useState([false, false, true]);
    const [showPreload5, setShowPreload5] = useState([false, false, true]);
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
            }, 2000);

            const preloadTimer3 = setTimeout(() => {
                setShowPreload2([false, true, false]);
                setShowPreload3([true, false, false]);
                notifyNewMessage();
            }, 11000);

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
                props.activateBoxInput(9);
            }, 20000);

            const timer1 = setTimeout(() => {
                setName('Escribiendo');
            }, 0);

            const timer2 = setTimeout(() => {
                setName('Grabando audio');
            }, 1900);

            const timer3 = setTimeout(() => {
                setName('Grabando audio')
            }, 10590);

            const timer4 = setTimeout(() => {
                setName('Escribiendo');
            }, 18000);

            const timer5 = setTimeout(() => {
                setName("En línea");
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
    }, [props.status]);

    return (

        <>

            {props.status && <Photofixed />}
            <Boxtest2>
                {showPreload1[2] && <></>}
                {showPreload1[0] && <MensagemAuto textOne={<Preload />} />}
                {showPreload1[1] && (
                    <ExpandAnimation>
                        <MensagemAuto textOne={props.name + ', guardé una sorpresa para usted... '} textTwo={false} space={false} img={false} />
                    </ExpandAnimation>
                )}
                {showPreload2[2] && <></>}
                {showPreload2[0] && <MensagemAuto textOne={<Preload />} />}
                {showPreload2[1] && (
                    <ExpandAnimation>
                        <MensagemAudioAuto audio='17' />
                    </ExpandAnimation>
                )}
                {showPreload3[2] && <></>}
                {showPreload3[0] && <MensagemAuto textOne={<Preload />} />}
                {showPreload3[1] && (
                    <ExpandAnimation>
                        <MensagemAuto textOne={false} textTwo={false} space={false} img={<VideoPlay src={Depoimento3} type="video/mp4"/>} />
                    </ExpandAnimation>
                )}
                {showPreload4[2] && <></>}
                {showPreload4[0] && <MensagemAuto textOne={<Preload />} />}
                {showPreload4[1] && (
                    <ExpandAnimation>
                        <MensagemAudioAuto audio='18' />
                    </ExpandAnimation>
                )}
                {showPreload5[2] && <></>}
                {showPreload5[0] && <MensagemAuto textOne={<Preload />} />}
                {showPreload5[1] && (
                    <ExpandAnimation>
                        <MensagemAuto textOne={'Hola, ' + props.name} textTwo={"¿Te gustaría inscribirte en el desafío de 21 días?"} space={true} img={false} />
                    </ExpandAnimation>
                )}
            </Boxtest2>
        </>
    )
};

export default Part11;