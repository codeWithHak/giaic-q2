import Button from "./Button"
function App(props) {

 const handleNumber = () =>{
  alert("Number:")
  }

  return (
    <div className="flex flex-col items-center text-center py-5 text-3xl">
    <h1 className="py-6 ">Calculator</h1>
    <div id="ouput" className=  " bg-gray-100 w-[288px] rounded text-right px-6 py-4">0</div>
    <div className="flex items-center justify-center  ">
    <div className="grid grid-cols-4 gap-2 w-max p-5 bg-gray-100">    
    <Button number="7" onClick={handleNumber}/>
    <Button number="8"/>
    <Button number="9"/>
    <Button id="multiply" number="x"/>
    <Button number="4"/>
    <Button number="5"/>
    <Button number="6"/>
    <Button id="minus" number="-"/>
    <Button number="1"/>
    <Button number="2"/>
    <Button number="3"/>
    <Button id="plus" number="+"/>
    <Button id="clear" number="C"/>
    <Button number="0"/>
    <Button id="equals" bg="#0377fc" color="white" number="="/>
    <Button id="plus" number="÷"/>
    </div>
    </div>
    </div>
  )
}

export default App
