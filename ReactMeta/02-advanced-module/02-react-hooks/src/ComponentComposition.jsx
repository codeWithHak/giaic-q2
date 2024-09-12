import React from 'react'


const Button = ({children,backgroundColor})=>{
    return <button style={{backgroundColor}}>{children}</button>
}

const Alert = ({children})=>{
    return(
    <>
    <div className="overlay"/>
    <div className="Alert">{children}</div>
    </>
    )
} 

const DeleteButton = ()=>{
    return <Button backgroundColor="red">Delete</Button>
}
const ComponentComposition = () => {

  return (
    <div>
        <header>Treano boyz restaurant</header>
        
        <Alert>
            <h4>delete</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsum sunt aliquid minima tempore nemo. Cumque tempore soluta ea dicta?</p>
            <DeleteButton/>
        </Alert>
    </div>
  )
}

export default ComponentComposition