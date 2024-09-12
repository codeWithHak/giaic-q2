import React from 'react'
import { useReducer } from "react";

const reducer = (state, action)=>{
    if(action.type === "buy-meat") return{money: state.money - 10}
    if(action.type === "sell-steak") return{money:state.money + 10}
    if(action.type === "big-tip") return{money:state.money + 100}
    if(state.money < 0){
        alert("We are in loss")
    }
}
const Reducer = () => {
const initialValue = {money:0}
const [state, dispatch] = useReducer(reducer, initialValue)    

    return (
    <div>
        <h1>Todays Expenses:{state.money}</h1>
        <button onClick={()=>dispatch({type:"buy-meat"})}>Buy Meat</button>
        <button onClick={()=>dispatch({type:"sell-steak"})}>Sell Steak</button>
        <button onClick={()=>dispatch({type:"big-tip"})}>Got a big tip</button>
    </div>
  )
}

export default Reducer