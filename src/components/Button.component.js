import { useState } from "react"

function Button(){
    const min = 0
    const max = 30

    const [displayNumber, setDisplayNumber] = useState()

    function trekk(){
        const rand = Math.floor(Math.random() * max - min + 1) + min
        setDisplayNumber(rand)
        console.log(rand)
    }

    const style = {
        position: 'absolute',
        top: '15vh'
    }

    return (
        <div>
            <h1 className="displayWinner">{displayNumber}</h1>
            <button onClick={trekk} style={style}>trekk</button>
            // TODO sette alt i midten med stilsetting
            <h3> Trykk på "Trekk", dette vil trekke et tall fra 1-30</h3>
        </div>
    )
}


export default Button;
