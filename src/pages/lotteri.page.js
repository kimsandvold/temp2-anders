import Button from "../components/Button.component"
import Footer from "../components/Footer.component"
import Header from "../components/Header.component"
import ParticipantList from "../components/ParticipantList.component"
import { useState } from "react"
import ThemeSelect from "../components/ThemeOptions.component"


const Lotteri = () => {
    const [chosenParticipants, setChosenParticipants] = useState([])
    const [winner, setWinner] = useState('...')
    const [drawState, setDrawState] = useState(' ')
    const [errorMessage, setErrorMessage] = useState('')

    const catchParticipants = (participantArray) => {
        if (drawState != 'drawing') {
            setChosenParticipants(participantArray)
        }
    }

    const catchNumber = (num) => {
        setWinner(chosenParticipants[num])
    }

    return (
        <div>
            <Header />
            <div className="container">
                <div className="mainContent">
                    <div className={'results vinner'}>{winner}</div>
                    <Button amountOfParticipants={chosenParticipants.length} numHandler={catchNumber} setDrawState={setDrawState} displayError={setErrorMessage} />
                    <div className='errorMessage'>{errorMessage}</div>
                </div>
                <div className="sidebar">
                    <ParticipantList participantHandler={catchParticipants} />
                    <ThemeSelect />
                </div>
            </div>
        </div>
    )
}

export default Lotteri