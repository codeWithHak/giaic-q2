const darkModeOn = true
const darkMode = "dark mode is on"
const lightMode = "light mode is on"

export default function ModeToggler(){
    return(
        <h1>{darkModeOn ? darkMode : lightMode}</h1>
    )
}