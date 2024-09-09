import babar from "./assets/babar.jpg"
const url = "http://localhost:5175/src/assets/babar.jpg"
import React from 'react'

const Asset = () => {
  return (
    <div>
        <h1>Display Three Images in React</h1>
        <img src={babar}
             width={200}
             alt="Babar Azam"
             />   

        <img 
            src={babar}
            width={200}
            alt="Babar"
        />
        <img
            src={url}
            width={200}
            alt="Bobzi"
            />
        </div>
  )
}

export default Asset