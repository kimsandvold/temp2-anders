import { keyboard } from "@testing-library/user-event/dist/keyboard"
import { useEffect, useState } from "react"

const ThemeSelect = () => {
    const themes = {
        Light: {
            header: '#00A499',
            background: 'rgb(255,255,255)',
            sideBar: '#eeeeee'
        },
        Dark: {
            header: '#00A499',
            background: 'rgb(255,255,255)',
            sideBar: '#eeeeee'
        }
    }

    const [currentThemeKey, setCurrentThemeKey] = useState('Light')

    useEffect(() => {
        document.getElementById(`${currentThemeKey}-theme`).disabled = true
    }, [currentThemeKey])

    const changeTheme = (themeKey) => {
        document.getElementById(`${currentThemeKey}-theme`).disabled = false
        setCurrentThemeKey(themeKey)
    }

    return (
        <div className="themeOptions">
            <div className="colorThemeMenu">
                {Object.keys(themes).map((themeKey, i) => {
                    return(
                        <button className={'colorThemeButton'} id={`${themeKey}-theme`} key={themeKey} onClick={() => changeTheme(themeKey)}>
                            {themeKey}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default ThemeSelect