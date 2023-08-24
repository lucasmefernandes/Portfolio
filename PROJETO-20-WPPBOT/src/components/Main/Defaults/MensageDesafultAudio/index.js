import styled from 'styled-components';
import AudioAuto from '../../../Main/Defaults/AudioDefault';

const Message = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin: 5px 0;
`

const Svg = styled.svg`
    position: relative;
    right: -8px;

    @media (min-width: 320px) and (max-width: 475px) {
        right: -7px;
    }
`
const AudioP = styled.div`
    position: relative;
    right: 0;
    text-align: left;
    display: inline-block; /* Defina para inline-block */
    padding: 12px;
    background: #fff;
    border-radius: 10px;
    color: #303235;
    font-size: 16px;

    @media (min-width: 320px) and (max-width: 475px) {
        padding: 7px;
    }

   
`

function MensagemAudioAuto(props) {
    return (
        <>
            <Message>
                <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100">
                    <polygon points="0,0 100,0 100,100" fill="#fff" transform="rotate(0 50 50)" />
                </Svg>

                <AudioP>
                    <AudioAuto audioNumber={props.audio} />
                </AudioP>

            </Message>
        </>
    )
};

export default MensagemAudioAuto;