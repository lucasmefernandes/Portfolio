import React, { useState, useEffect } from 'react';
import MensagemAuto from "../Defaults/MensageDefault";
import styled, { keyframes } from 'styled-components';
import Photofixed from "../Defaults/PhotoFixed";
import MensagemAudioAuto from "../Defaults/MensageDesafultAudio";
import news from "../../../img/news.jpg"
import Preload from "../Defaults/Preloand";
import { useName } from '../../../context/NameContext';
import MensegerFix from '../Defaults/MensageFixedTop';

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
}
`;

function Part01(props) {
  const { setName } = useName();
  const [showPreload1, setShowPreload1] = useState([true, false]);
  const [showPreload2, setShowPreload2] = useState([false, false, true]);
  const [showPreload3, setShowPreload3] = useState([false, false, true]);
  const [showPreload4, setShowPreload4] = useState([false, false, true]);
  const [showPreload5, setShowPreload5] = useState([false, false, true]);
  const [showPreload6, setShowPreload6] = useState([false, false, true]);
  const [showPreload7, setShowPreload7] = useState([false, false, true]);

  useEffect(() => {
    const notifyNewMessage = () => {
      props.onNewMessage();
    };

    if (props.status === true) {

      const preloadTimer1 = setTimeout(() => {
        setShowPreload1([false, true]);
        setShowPreload2([true, false, false])
        notifyNewMessage();

      }, 2000);

      const preloadTimer2 = setTimeout(() => {
        setShowPreload2([false, true, false]);
        setShowPreload3([true, false, false])
        notifyNewMessage();
      }, 4000);

      const preloadTimer3 = setTimeout(() => {
        setShowPreload3([false, true, false]);
        setShowPreload4([true, false, false])
        notifyNewMessage();
      }, 6000);

      const preloadTimer4 = setTimeout(() => {
        setShowPreload4([false, true, false]);
        setShowPreload5([true, false, false])

        notifyNewMessage();
      }, 8000);

      const preloadTimer5 = setTimeout(() => {
        setShowPreload5([false, true, false]);
        setShowPreload6([true, false, false])

        notifyNewMessage();
      }, 10000);

      const preloadTimer6 = setTimeout(() => {
        setShowPreload6([false, true, false]);
        setShowPreload7([true, false, false])
        notifyNewMessage();
      }, 21000);

      const preloadTimer7 = setTimeout(() => {
        setShowPreload7([false, true, false]);
        notifyNewMessage();
        props.activateBoxInput(0);
      }, 24000);

      const timer1 = setTimeout(() => {
        setName('Escribiendo');
      }, 0);

      const timer2 = setTimeout(() => {
        setName('Grabando audio');
      }, 10000);

      const timer3 = setTimeout(() => {
        setName('Escribiendo');
      }, 21000);

      const timer4 = setTimeout(() => {
        setName("En línea");
      }, 24000);

      return () => {
        clearTimeout(preloadTimer1);
        clearTimeout(preloadTimer2);
        clearTimeout(preloadTimer3);
        clearTimeout(preloadTimer4);
        clearTimeout(preloadTimer5);
        clearTimeout(preloadTimer6);
        clearTimeout(preloadTimer7);
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }
    // eslint-disable-next-line
  }, [props.status, notifyNewMessage, props, setName]);


  return (
    <>
      <Photofixed />
      <Boxtest2>
        <MensegerFix text="Ésta es una cuenta comercial y no recibimos llamadas " status={true} />
        {showPreload1[0] && <MensagemAuto textOne={<Preload />} />}
        {showPreload1[1] && (

          <ExpandAnimation>
            <MensagemAuto
              textOne={<u><i>El Dr. Andreia entró en la conversación...</i></u>} textTwo={false} space={false} />
          </ExpandAnimation>)
        }
        {showPreload2[2] && <></>}
        {showPreload2[0] && <MensagemAuto textOne={<Preload />} />}
        {showPreload2[1] && (
          <ExpandAnimation>
            <MensagemAuto textOne={<strong>[INICIO DE SU SERVICIO]</strong>} textTwo={<u>Esta consulta es <strong>GRATUITA</strong></u>} space={true} />
          </ExpandAnimation>)
        }
        {showPreload3[2] && <></>}
        {showPreload3[0] && <MensagemAuto textOne={<Preload />} />}
        {showPreload3[1] && (
          <ExpandAnimation>
            <MensagemAuto textOne='¡Hola, bienvenido!' textTwo={false} space={false} />
          </ExpandAnimation>)
        }
        {showPreload4[2] && <></>}
        {showPreload4[0] && <MensagemAuto textOne={<Preload />} />}
        {showPreload4[1] && (
          <ExpandAnimation>
            <MensagemAuto textOne='Mi nombre es Dr. Andrea...' textTwo={<p>Soy el <strong>creador</strong> del Método <strong>"Rutina Costarricense"</strong></p>} space={true} />
          </ExpandAnimation>)
        }
        {showPreload5[2] && <></>}
        {showPreload5[0] && <MensagemAuto textOne={<Preload />} />}
        {showPreload5[1] && (<ExpandAnimation>

          <MensagemAuto textOne={false} textTwo={false} space={false} img={<img width='512px' src={news} alt='Icon-News' />} />

        </ExpandAnimation>)
        }
        {showPreload6[2] && <></>}
        {showPreload6[0] && <MensagemAuto textOne={<Preload />} />}
        {showPreload6[1] && (<ExpandAnimation>
          <MensagemAudioAuto audio='0' />
        </ExpandAnimation>)
        }
        {showPreload7[2] && <></>}
        {showPreload7[0] && <MensagemAuto textOne={<Preload />} />}
        {showPreload7[1] && (<ExpandAnimation>
          <MensagemAuto textOne={<>¿Te gustaría participar en mi programa de pérdida de peso <strong>GRATIS?</strong></>} textTwo={false} space={false} img={false} />

        </ExpandAnimation>)
        }
      </Boxtest2>

    </>
  );
}

export default Part01;
