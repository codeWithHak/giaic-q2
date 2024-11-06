import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const increaseCount = ()=>{
    setCount(count => count+1)
    setCount(count => count+1)

//  Iterview Question: What will be the ouput ?
    // setCount(count => count+1)
    // setCount(count => count+1)
    // setCount(count => count+1)
    
  }
  const decreaseCount = ()=>{
    setCount(count-1)
  }
return(
  <div className="w-4/5 mx-auto">
    <div className="text-center mt-12 ">
      <h1 className="text-3xl">Counter {count}</h1>
      <div className="flex justify-center mt-12 gap-4">
        <button className="bg-slate-400 px-2 py-1 rounded-sm text-white" onClick={increaseCount}>Add + </button>
        <button  onClick={decreaseCount}>Subtract -</button>

      </div>
    </div>
  </div>
) 

}

export default App
