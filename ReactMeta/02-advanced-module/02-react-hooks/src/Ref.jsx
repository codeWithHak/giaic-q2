import React from 'react'
import {useRef} from "react"

const Ref = () => {

 const myRef  = useRef(null)
 const buttonRef = useRef(null)
 
 const handleRef = ()=>{
  myRef.current.focus()
  buttonRef.current.innerText = buttonRef.current.innerText === "Focused" ? "Click to focus" : "Focused"
 } 

  return (
  <div>
    <input ref={myRef} type="text" placeholder='focus here'/>
    <button ref={buttonRef} onClick={handleRef}>Click to foucs</button>
  </div>  
  )
}

export default Ref