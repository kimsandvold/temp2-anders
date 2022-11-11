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
            display: "flex",
            flexDirection: 'column',
            alignSelf: 'center',
            width: '100%',
            alignContent: 'center',
            alignItems: 'center',
            marginTop: '100px'
        }}>
             <span className="results" style={{marginBottom: '30px'}}>Resultat: {trekkNum}</span>
            <button onClick={trekk} className='button' >Trekk</button>
        </div>
    )
}


export default Button;
