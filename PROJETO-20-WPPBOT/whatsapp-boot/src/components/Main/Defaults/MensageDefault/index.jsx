import styled from 'styled-components';


const Message = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin: 5px 0;
`

const DivBox = styled.div`
    position: relative;
    right: 0;
    text-align: left;
    display: inline-block; /* Defina para inline-block */
    padding: 12px;
    background: #fff;
    border-radius: 10px;
    font-size: 0.9em;
    color: #303235;
    font-size: 16px;

    &::before {
    content: "";
    position: absolute;
    top: 0;
    right: -20px; /* Ajuste a posição para fora da caixa */
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #dcf8c6 100%);
  }
`

const Space = styled.div`
    height: 24px;
`

const Svg = styled.svg`
    position: relative;
    right: -8px;
`

function MensagemAuto(props) {
    return (
        <>
            <Message>
                <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100">
                    <polygon points="0,0 100,0 100,100" fill="#fff" transform="rotate(0 50 50)" />
                </Svg>
                <DivBox>
                    {props.preload}
                    {props.textOne}
                    {props.space === true ? <Space></Space> : <></>}
                    {props.textTwo}
                    {props.img}
                </DivBox>
            </Message>
        </>
    )
};



export default MensagemAuto;