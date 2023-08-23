import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const DivButtonPlay = styled.div`    
`

const ButtonPlay = styled.button`
    background-color: #fff;
    width:150px;
    height: 150px;
    border-radius: 50%;
    border: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1;

`;

function VideoPlayer(props) {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleContextMenu = (e) => {
        e.preventDefault(); // Impede o menu de contexto padrão
      };

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();

        }
        setIsPlaying(!isPlaying);
    };

    return (
        <DivButtonPlay onContextMenu={handleContextMenu}>

            <ButtonPlay onClick={handlePlayPause} style={{ opacity: isPlaying ? '0' : '1' }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 50 50"
                    fill="red"
                >
                    <polygon points="10,5 45,25 10,45" />
                </svg>
            </ButtonPlay>

            <video ref={videoRef} width='85%' height='400px'>
                <source src={props.src} type="video/mp4" />
            </video>

        </DivButtonPlay>
    );
}

export default VideoPlayer;