import React from 'react';
import styled from 'styled-components';

const DivMensegerFix = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0 16px 0;

    & p {
        background-color: #d5f4f0;
        border-radius: 10px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #53676b;


        & svg {
            margin-right: 14px;
        }
    }
`

function MensegerFix(props) {
    if(props.status === true) {
    
    return (
        <DivMensegerFix>
            <p>
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#4b5e63" fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"></path>
                </svg>
                {props.text}
            </p>
        </DivMensegerFix>

    )} else {
            return <></>
        }
}


export default MensegerFix