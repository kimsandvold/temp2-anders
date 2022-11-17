import { useEffect, useState } from "react"

const ThemeSelect = () => {
    const themes = {
        Light: {
            Name: 'lyst',
            header: 'rgb(0, 164, 153)',
            background: 'rgb(255,255,255)',
            sideBar: 'rgb(238, 238, 238)',
            textColor: 'rgb(0, 0, 0)'
        },
        Dark: {
            Name: 'Mørkt',
            header: 'rgb(0, 164, 153)',
            background: 'rgb(77, 77, 77)',
            sideBar: 'rgb(56, 56, 56)',
            textColor: 'rgb(255, 255, 255)'
        },
        Black: {
            Name: 'Svart',
            header: 'rgb(0, 0, 0)',
            background: 'rgb(77, 77, 77)',
            sideBar: 'rgb(56, 56, 56)',
            textColor: 'rgb(255, 255, 255)'
        }
    }

    const [currentThemeKey, setCurrentThemeKey] = useState('Dark')
    const [lastThemeKey, setLastThemeKey] = useState()
    const [themeDropDownActive, setThemeDropDownActive] = useState(false)

    useEffect(() => {
        changeTheme()
    }, [currentThemeKey, themeDropDownActive])

    const changeTheme = () => {
        if(lastThemeKey) {
            document.getElementById(`${lastThemeKey}-theme`).disabled = false
        }
        document.getElementById(`${currentThemeKey}-theme`).disabled = true
        setLastThemeKey(currentThemeKey)

        const root = document.querySelector(':root')
        const theme = themes[currentThemeKey]

        root.style.setProperty('--headerColor', theme.header)
        root.style.setProperty('--backgroundColor', theme.background)
        root.style.setProperty('--sidebarColor', theme.sideBar)
        root.style.setProperty('--textColor', theme.textColor)
    }

    const themeDropDown = () => {
        if(themeDropDownActive == false) {
            setThemeDropDownActive(true)
            return
        }
        setThemeDropDownActive(false)
    }

    return (
        <div className="themeOptions">
            <button className="dropDownButton" onClick={themeDropDown}>Tema</button>
            <div className="colorThemeMenu">
                {Object.keys(themes).map((themeKey, i) => {
                    return(
                        <button className={`colorThemeButton ${function(){
                            if(themeDropDownActive == false) {
                                return 'hidden'
                            }
                        }()}`} id={`${themeKey}-theme`} key={themeKey} onClick={() => {setCurrentThemeKey(themeKey)}}>
                            {themes[themeKey].Name}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default ThemeSelect