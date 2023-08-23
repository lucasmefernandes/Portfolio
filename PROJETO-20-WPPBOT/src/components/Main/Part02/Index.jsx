import BoxClient from "../Defaults/BoxClient"

function Part02(props) {
    
    if (props.status === true) {
        
        return (
            <>
                <BoxClient text={props.text} />
            </>
        )
    } else {
        return <></>
    }
}

export default Part02