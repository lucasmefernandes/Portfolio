import React, { useState, useEffect } from 'react';
import { useName } from '../../../context/NameContext';
import styled, { keyframes } from 'styled-components';
import Preload from "../Defaults/Preloand";

import MensagemAuto from "../Defaults/MensageDefault";
import Photofixed from "../Defaults/PhotoFixed";

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

function Part06(props) {
    const { setName } = useName();
    const [showPreload1, setShowPreload1] = useState([false, false, true]);
    const [showPreload2, setShowPreload2] = useState([false, false, true]);
    const [showPreload3, setShowPreload3] = useState([false, false, true]);
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
            }, 1500);

            const preloadTimer3 = setTimeout(() => {
                setShowPreload2([false, true, false]);
                setShowPreload3([true, false, false]);
                notifyNewMessage();
            }, 3000);

            const preloadTimer4 = setTimeout(() => {
                setShowPreload3([false, true, false]);
                notifyNewMessage();
                props.activateBoxInput(4);
            }, 4000);

            const timer1 = setTimeout(() => {
                setName('Escribiendo');
            }, 0);

            const timer2 = setTimeout(() => {
                setName("En línea");
            }, 4000);

            return () => {
                clearTimeout(preloadTimer1);
                clearTimeout(preloadTimer2);
                clearTimeout(preloadTimer3);
                clearTimeout(preloadTimer4);
                clearTimeout(timer1);
                clearTimeout(timer2);
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
                        <MensagemAuto textOne={"¡Perfecto " + props.name + '!'} textTwo={"Solo confirmando..."} space={true} img={false} />
                    </ExpandAnimation>
                )}
                {showPreload2[2] && <></>}
                {showPreload2[0] && <MensagemAuto textOne={<Preload />} />}
                {showPreload2[1] && (
                    <ExpandAnimation>
                        <MensagemAuto textOne={'Su peso: ' + props.weight} textTwo={<nav>{'Su edad: ' + props.age}</nav>} space={false} img={false} />
                    </ExpandAnimation>
                )}
                {showPreload3[2] && <></>}
                {showPreload3[0] && <MensagemAuto textOne={<Preload />} />}
                {showPreload3[1] && (
                    <ExpandAnimation>
                        <MensagemAuto textOne='¿Correcto?' textTwo={false} space={false} img={false} />
                    </ExpandAnimation>
                )}
            </Boxtest2>
        </>
    )

};

export default Part06;