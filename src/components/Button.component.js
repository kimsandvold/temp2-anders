import {useEffect, useState} from "react"

function Button(props){
    const {amountOfParticipants, numHandler, setDrawState, displayError} = props

    const max = amountOfParticipants

    const [trekkNum,setTrekkNum] = useState();
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const trekk = (i) => {
        if (amountOfParticipants > 1){
            setDrawState('drawing')
            setButtonDisabled(true)
            setErrorMessage('')
            if (i > 0) {
                setTrekkNum(i - (Math.floor(i / amountOfParticipants) * amountOfParticipants))
                setTimeout(trekk, 150 - i, i - 1)
            } else {
                const rand = Math.floor(Math.random() * max)
                setTrekkNum(rand)
                setDrawState('done')
                setButtonDisabled(false)
            }
        }else {
            setErrorMessage('Du må velge minst 2 navn for å trekke')
        }
    }

    useEffect(() => {
            numHandler(trekkNum)
            displayError(errorMessage)
    }, [trekkNum, buttonDisabled, errorMessage])
    
    return (
        <div style={{
            display: "flex",
            flexDirection: 'column',
            alignSelf: 'center',
            width: '100%',
            alignContent: 'center',
            alignItems: 'center'
        }}>
            <button onClick={() => trekk(100)} className='button' disabled={buttonDisabled} >Trekk</button>
        </div>
    )
}



export default Button;
