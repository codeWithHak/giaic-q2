import { useState ,useEffect} from 'react'



function App() {

  const [toggle,setTogggle] = useState(false)
  
  const handleClick = ()=>{
    setTogggle(!toggle)
  }

  const handleTitle = useEffect(()=>{
    document.title = toggle? "Welcome to our app" : "using useeffect"
  },[toggle])
  return (
    <>
      <div>
       <h1>Welcome to our App</h1>
       <button onClick={handleClick}>Toggle Welcome</button>
       {toggle && <h2> Welcome to our app</h2>}
       </div>
    </>
  )
}

export default App
