import HomePage from "./HomePage"
import AboutMe from "./AboutMe"
import {Routes,Route,Link} from "react-router-dom"
function App() {

  return (
    <div className="App">
    <nav className="nav">
      <Link to ="/" className="nav-item">Home</Link>
      <Link to='/about-me' className="nav-item">About</Link>
    </nav>
    <Routes>
     <Route path="/" element={<HomePage/>}/>
     <Route path="/about-me" element={<AboutMe/>}/>
     </Routes>
     
    </div>
  )
}

export default App
