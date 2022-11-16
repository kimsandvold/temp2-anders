import { useEffect, useState } from "react"

function ParticipantList(props) {
    const {participantHandler} = props
    const participants = ['Anders', 'Kim', 'Vegard', 'Sander', 'Gjermund', 'Helene', 'Lisa', 'Per Magne', 'Rune', 'Johan', 'Anders Jr.', 'Britt', 'Anton', 'Magnus', 'Gudmund']

    const [selectedParticipants, setSelectedParticipants] = useState([])
    useEffect(() => {
        participantHandler(selectedParticipants)
    }, [selectedParticipants])

    const handleCheckbox = (event) => {
        const name = event.target.value
        const existing = [...selectedParticipants]
        if (event.target.checked) {
            existing.push(name)
        }else {
            for (let i = 0; i < existing.length; i++) {
                if (existing[i] == name){
                    existing.splice(i, 1)
                }
            }
        }

        setSelectedParticipants(existing)
    }

    return (
        <div className="participantList">
            <div>
                {selectedParticipants.length} av {participants.length} valgt
            </div>
            {participants.map((participant, index) => {
                return (
                    <label key={index}>
                        <input type={'checkbox'} value={participant} onClick={handleCheckbox} />{participant}
                    </label>
                )
            })}
        </div>
    )
}

export default ParticipantList