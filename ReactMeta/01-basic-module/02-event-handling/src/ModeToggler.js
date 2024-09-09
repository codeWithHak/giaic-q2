let darkModeOn = false
const darkMode = "dark mode is on"
const lightMode = "light mode is on"

const handleClick = ()=>{
        darkModeOn = !darkModeOn

        if (darkModeOn == true){
            console.log("dark mode is on");
            
        }
        else{
            console.log("Light mode is on");
            
        }
    
}

export default function ModeToggler(){
    return(
        <div>
        <h1>{darkModeOn ? darkMode : lightMode}</h1>
        <button onClick={handleClick}>Click Me</button>
        </div>
    )
}