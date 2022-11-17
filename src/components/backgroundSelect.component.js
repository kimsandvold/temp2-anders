import { useEffect, useState } from "react"

const BackgroundSelect = (props) => {
    const {setBackground} = props

    const backgroundIDs = ['Wine1', 'Beer1', 'Giftcard', 'Julebrus']

    const [dropDownActive, setDropDownActive] = useState(false)
    const [currentBackgroundKey, setCurrentBackgroundKey] = useState('')

    useEffect(() => {
        if(currentBackgroundKey != '') {
            setBackground(`url(/backgroundImages/${currentBackgroundKey}.large.jpg)`)
        }
    }, [currentBackgroundKey])
    const DropDown = () => {
        if(dropDownActive == false) {
            setDropDownActive(true)
            return
        }
        setDropDownActive(false)
    }
    const handleBackgroundSwitch = (event) => {
        const buttons = document.getElementsByClassName('backgroundButton')
        const keys = Object.keys(buttons)
        const newKey = event.target.id
        keys.map((bKey, index) => {
            const button = buttons[bKey]
            if(button.id == currentBackgroundKey) {
                button.disabled = false
            }
            if(button.id == newKey){
                button.disabled = true
            }
        })
        setCurrentBackgroundKey(newKey)
    }

    return (
        <div className="themeOptions">
            <button className="dropDownButton" onClick={DropDown}>Bakgrunn</button>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {backgroundIDs.map((bgID, index) => {
                    return(
                        <button id={bgID} key={bgID} className={'backgroundButton'+ function(){
                            if(dropDownActive == false) {
                                return ' hidden'
                            }
                            return ''
                        }()} style={{
                            backgroundImage: `url(/backgroundImages/${bgID}.small.jpg)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }} onClick={handleBackgroundSwitch}></button>
                    )
                })}
            </div>
        </div>
    )
}

export default BackgroundSelect