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
        top: '150px',
        left: '50px',
    }

    return (
        <div>
            <button onClick={trekk} className='button' style={style}>Trekk</button>
        </div>
    )
}



export default Button;
