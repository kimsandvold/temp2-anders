import {useEffect, useState} from "react"

function Button(props){
    const {amountOfParticipants, numHandler, setDrawState} = props

    const max = amountOfParticipants

    const [trekkNum,setTrekkNum] = useState();

    const trekk = (i) => {
        if (amountOfParticipants > 1){
            setDrawState('Trekker')
            if (i > 0) {
                setTrekkNum(i - (Math.floor(i / amountOfParticipants) * amountOfParticipants))
                setTimeout(trekk, 150 - i, i - 1)
            } else {
                const rand = Math.floor(Math.random() * max)
                setTrekkNum(rand)
                setDrawState('Vinner')
            }
        }
    }

    useEffect(() => {
            numHandler(trekkNum)
    }, [trekkNum])
    
    return (
        <div style={{
            display: "flex",
            flexDirection: 'column',
            alignSelf: 'center',
            width: '100%',
            alignContent: 'center',
            alignItems: 'center'
        }}>
            <button onClick={() => trekk(100)} className='button' >Trekk</button>
        </div>
    )
}



export default Button;
