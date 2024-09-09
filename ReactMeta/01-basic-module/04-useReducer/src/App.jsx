import React,{useReducer} from "react"
function App() {

const reducer = (state, action)=>{
console.log(state,action)
if (action.type === "+"){
  return state + 1
}

if (action.type === "-"){
  return state - 1
}
}

const [count, dispatch] = useReducer(reducer,0)


  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>dispatch({type:"+"})}>Increment</button>
      <button onClick={()=>dispatch({type:"-"})}>Decrement</button>
    </>
  )
}

export default App
