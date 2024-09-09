import { useState } from "react"

import Button from "./Button"
function App() {

const [calc, setCalc] = useState({
  current:"0",
  total:"0",
  initialVal:true,
  preOp:""
})


 const handleNumber = (value) =>{
   let newValue = value
  if (!calc.initialVal){
  newValue = calc.current + value
  }
  setCalc({
    current:newValue, total:calc.total, initialVal:false, preOp:calc.preOp
  })
  }


 const handleOperator = (value)=>{
  const total = doCalculation()
  setCalc({current:total.toString(), total:total.toString(),initialVal:true, preOp:value})
 } 


 const doCalculation = ()=>{
  let total = parseInt(calc.total)
  
  switch (calc.preOp){
    case "+":
      total += parseInt(calc.current)
      break;
    case "-":
      totoal -= parseInt(calc.current)
      break;    
    case "x":
      total *= parseInt(calc.current)
      break;
    case "÷":
      totoal /= parseInt(calc.current)
      break;    
    default:
      total = parseInt(calc.current)
  }
    return total
}


const handleClear = ()=>{
  setCalc({
    current:"0",
    total:"0",
    initialVal:true,
    preOp:""
  })
}



 const renderDisplay = ()=>{
  return calc.current
 }
  
  return (
    <div className="flex flex-col items-center text-center py-5 text-3xl">
    <h1 className="py-6 ">Calculator</h1>
    <div id="ouput" className=  "bg-gray-100 w-[288px] rounded text-right px-6 py-4">{renderDisplay()}</div>
    <div className="flex items-center justify-center  ">
    <div className="grid grid-cols-4 gap-2 w-max p-5 bg-gray-100">    
    <Button value="7" onClick={handleNumber}/>
    <Button value="8" onClick={handleNumber}/>
    <Button value="9" onClick={handleNumber}/>
    <Button id="multiply" value="x" onClick={handleOperator}/>
    <Button value="4" onClick={handleNumber}/>
    <Button value="5" onClick={handleNumber}/>
    <Button value="6" onClick={handleNumber}/>
    <Button id="minus" value="-" onClick={handleOperator}/>
    <Button value="1" onClick={handleNumber}/>
    <Button value="2" onClick={handleNumber}/>
    <Button value="3" onClick={handleNumber}/>
    <Button id="plus" value="+" onClick={handleOperator}/>
    <Button id="clear" value="C" onClick={handleClear}/>
    <Button value="0" onClick={handleNumber}/>
    <Button id="equals" bg="#0377fc" color="white" value="=" onClick={handleOperator}/>
    <Button id="plus" value="÷" onClick={handleOperator}/>
    </div>
    </div>
    </div>
  )
}

export default App
