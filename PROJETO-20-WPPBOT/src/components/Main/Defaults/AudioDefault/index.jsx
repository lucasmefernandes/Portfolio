import React, { useState, useEffect, useRef } from 'react';
import audios from '../../../../audio';
import styled from 'styled-components';
import profile from '../../../../img/profile.jpg'

const BoxAudio = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const BoxImageAudio = styled.div`
    padding: 0px 0px 0 17px;

    & img {
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }

    @media (min-width: 320px) and (max-width: 475px) {
        & img {
        
        width: 35px;
        height: 35px;
        }
    }
`

const IconContainer = styled.div`
    color: #4ad954;
    transition: color 1s ease;

    & i {
        position: absolute;
        top: 42px; 
        right: 50px;
        font-size: 20px
    }

    @media (min-width: 320px) and (max-width: 475px) {
        & i {
            top: 25px;
            right: 35px;
            font-size: 15px
        }
    }

    
`

const Icon = styled.i`
    font-size: 1.4em;
    color: #4ad954;
    transition: color 1s ease;

    @media (min-width: 320px) and (max-width: 475px) {
        font-size: 1em;
    }
`

const ButtonPlay = styled.div`
    padding: 0px 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    & buttom {
        border: none;
        background-color: #fff;
    }
`

const ProgressArea = styled.div`
    height: 6px;
    width: 170px;
    border-radius: 50px;
    background: #f0f0f0;
    cursor: pointer;    
    
    &:hover {
        .ProgressBar::before {
            opacity: 1;
            pointer-events: auto;
        }
    }

    @media (min-width: 320px) and (max-width: 475px) {
        width: 130px;
    }
`

const ProgressBar = styled.div`
    height: inherit;
    width: ${props => props.value}%;
    position: relative;
    border-radius: inherit;
    background: #4ad954;
    margin: 0px 0;
        
    &::before {
        content: "";
        position: absolute;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        top: 50%;
        right: -5px;
        z-index: 2;
        opacity: 0;
        pointer-events: none;
        transform: translateY(-50%);
        background: inherit;
        transition: background 1s ease, opacity 1s ease;
    }

    

`

const CurrentTime = styled.span`
    font-size: 12px;
    position: relative;
    color: #303235;
    opacity: 0.6;
    top: 0px
`

function AudioAuto(props) {
    const [playing, setPlaying] = useState(false);
    const [audioProgress, setAudioProgress] = useState(0);
    const [buttonPlayColor, setButtonPlayColor] = useState('#4ad954');
    const [isMetadataLoaded, setIsMetadataLoaded] = useState(false);
    const audioRef = useRef(new Audio(audios[props.audioNumber]));

    const play = () => {
        setPlaying(true);
        setButtonPlayColor('#3db8ee')
        audioRef.current.play();
    };

    const pause = () => {
        setPlaying(false);
        audioRef.current.pause();
    };

    const audioTime = () => {
        if (isMetadataLoaded && !isNaN(audioRef.current.duration)) {
            let totalS = Math.floor(audioRef.current.duration % 60);
            let totalM = Math.floor(audioRef.current.duration / 60);

            if (totalS < 10) {
                totalS = `0${totalS}`;
            }

            return `${totalM}:${totalS}`;
        }
    }

    const audioCurrent = () => {
        let currentMin = Math.floor(audioRef.current.currentTime / 60);
        let currentSec = Math.floor(audioRef.current.currentTime % 60);
        if (currentSec < 10) {
            currentSec = `0${currentSec}`;
        }

        return `${currentMin}:${currentSec}`;
    }

    useEffect(() => {
        const updateProgress = () => {
            const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
            setAudioProgress(progress);

        }

        audioRef.current.addEventListener('timeupdate', updateProgress);
        audioRef.current.addEventListener('loadedmetadata', () => {
            setIsMetadataLoaded(true);
        });

        return () => {
            audioRef.current.removeEventListener('timeupdate', updateProgress);
        }
    }, []);


    return (
        <BoxAudio>
            <ButtonPlay>
                {playing ? (
                    <Icon onClick={pause} className="fa-solid fa-pause" style={{ color: buttonPlayColor }} />
                ) : (
                    <Icon onClick={play} className="fa-solid fa-play" style={{ color: buttonPlayColor }} />
                )}
            </ButtonPlay>
            <ProgressArea>
                <ProgressBar className="ProgressBar" style={{ background: buttonPlayColor }} value={audioProgress}></ProgressBar>
                <CurrentTime className="current-time">{playing ? audioCurrent() : audioTime()}</CurrentTime>
            </ProgressArea>
            <IconContainer style={{ color: buttonPlayColor }}>
                <i className="fa-solid fa-microphone" />
            </IconContainer>
            <BoxImageAudio>
                <img src={profile} alt='Icon-Profile' />
            </BoxImageAudio>
        </BoxAudio>
    )
}

export default AudioAuto;