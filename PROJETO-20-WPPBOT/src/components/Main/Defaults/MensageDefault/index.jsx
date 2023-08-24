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

    @media (min-width: 320px) and (max-width: 768px) {
        font-size: 12px;
    }
}
`

const Space = styled.div`
    height: 24px;
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

function MensagemAuto(props) {
    return (
        <>
            <Message>
                <Triangle />
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