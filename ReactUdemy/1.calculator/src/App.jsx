import Button from "./Button"
function App(props) {


  return (
    <div className="text-center py-5 text-3xl">
    <h1 className="py-6 ">Calculator</h1>
    <div className="flex items-center justify-center  ">
    <div className="grid grid-cols-4 gap-2 w-max p-5 bg-gray-100">
    <Button number="7"/>
    <Button number="8"/>
    <Button number="9"/>
    <Button number="x"/>
    <Button number="4"/>
    <Button number="5"/>
    <Button number="6"/>
    <Button number="-"/>
    <Button number="1"/>
    <Button number="2"/>
    <Button number="3"/>
    <Button number="+"/>
    <Button number="C"/>
    <Button number="0"/>
    <Button bg="#0377fc" color="white" number="="/>
    <Button number="÷"/>
    </div>
    </div>
    </div>
  )
}

export default App
