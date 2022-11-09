import React from "react"

function Button(){
    const min = 0
    const max = 30

    function trekk(){
        const rand = Math.floor(Math.random() * max - min + 1) + min
    
        console.log(rand)
    }

    const style = {
        position: 'absolute',
        top: '15vh'
    }

    return (
        <div>
            <button onClick={trekk} style={style}>trekk</button>
        </div>
    )
}



export default Button;