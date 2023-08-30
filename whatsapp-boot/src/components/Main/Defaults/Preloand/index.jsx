import styled, { keyframes } from 'styled-components';

const ballLoader = keyframes`
    from {
        opacity: 1;
        transform: translateY(-8px);
    }
    to {
        opacity: 0.5;
        transform: translateY(0);
    }
`;

const BoxBall = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 12.5px;
        height: 12.5px;
        margin: 10px 4px;
        background: #303235;;
        border-radius: 50%;
        animation: ${ballLoader} 0.6s infinite alternate;
    }

    & div:nth-child(2) {
        animation-delay: 0.2s;
    }

    & div:nth-child(3) {
        animation-delay: 0.4s;
    }
`;



function Preload() {
    return (
        <BoxBall className="bolinhas-loader">
            <div></div>
            <div></div>
            <div></div>
        </BoxBall>
    )
}

export default Preload;