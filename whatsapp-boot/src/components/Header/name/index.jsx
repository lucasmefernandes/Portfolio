import React from 'react';
import { useName } from '../../../context/NameContext';
import styled from "styled-components"

const DivName = styled.div`
    font-size: 17px;
    font-weight: 600;
    margin-left: 16px;
    display: flex;
`

const BoxDivName = styled.div`
    margin-right: 8px;
`

const P = styled.p`
    font-size: 13px;
    font-weight: normal;
`

export function Name() {
    const { name } = useName();

    return (
        <DivName>
            <BoxDivName>
                <p>Dr. Andreia</p>
                <P>{name}</P>
            </BoxDivName>
            <span>
                <svg
                    viewBox="0 0 18 18"
                    height="18"
                    width="18"
                    preserveAspectRatio="xMidYMid meet"
                    version="1.1"
                    x="0px"
                    y="0px"
                    enableBackground="new 0 0 18 18"
                    xmlSpace="preserve"
                >
                    <polygon
                        id="Star-2"
                        fill="#00DA60"
                        points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9"
                    ></polygon>
                    <polygon
                        id="Check-Icon"
                        fill="#FFFFFF"
                        points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4"
                    ></polygon>
                </svg>
            </span>
        </DivName>
    )
}