import {useState} from "react"

function Button(){
    const min = 0
    const max = 30

    const [trekkNum,setTrekkNum] = useState(0);

    function trekk(){
        const rand = Math.floor(Math.random() * (max + 1) - min) + min
    
        setTrekkNum(rand)
    }
    
    return (
        <div style={{
            position: 'absolute',
            top: '150px',
            left: '50px',
        }}>
            <button onClick={trekk} className='button' >Trekk</button>
            <span className="results" style={{marginLeft: '10px'}}>Resultat: {trekkNum}</span>
        </div>
    )
}



export default Button;
