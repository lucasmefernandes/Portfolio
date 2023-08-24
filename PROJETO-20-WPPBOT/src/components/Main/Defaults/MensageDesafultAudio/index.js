import styled from 'styled-components';
import AudioAuto from '../../../Main/Defaults/AudioDefault';

const Message = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin: 5px 0;
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

const Triangle  = styled.div`
    position: absolute;
    left: -10px;
    top: -2px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #fff; 
    transform: rotate(44deg)
`

function MensagemAudioAuto(props) {
    return (
        <>
            <Message>
                <Triangle />
                <AudioP>
                    <AudioAuto audioNumber={props.audio} />
                </AudioP>

            </Message>
        </>
    )
};

export default MensagemAudioAuto;