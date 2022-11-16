import Button from "../components/Button.component"
import Footer from "../components/Footer.component"
import Header from "../components/Header.component"
import ParticipantList from "../components/ParticipantList.component"
import { useState } from "react"


const Lotteri = () => {
    const [chosenParticipants, setChosenParticipants] = useState([])
    const [winner, setWinner] = useState('...')
    const [drawState, setDrawState] = useState(' ')

    const catchParticipants = (participantArray) => {
        // console.log({participantArray})
        setChosenParticipants(participantArray)
    }

    const catchNumber = (num) => {
        setWinner(chosenParticipants[num])
    }

    return (
        <div>
            <Header />
            <table>
                <tbody>
                    <tr>
                        <td className="container">
                            <div className="results" style={{fontSize: '20px', marginTop: '-150px'}} >{drawState}</div>
                            <div className={'results vinner'}>{winner}</div>
                            <Button amountOfParticipants={chosenParticipants.length} numHandler={catchNumber} setDrawState={setDrawState} />
                        </td>
                        <td className="sideBar">
                            <ParticipantList participantHandler={catchParticipants} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <Footer/>
        </div>
    )
}

export default Lotteri