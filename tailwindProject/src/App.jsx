
function App() {

const  handleMenu = ()=>{
    console.log("Helloo handle");
    
  }
  return (
    <>
    {/* Navbar */}
    <nav className="flex p-3 bg-white justify-between items-center">
    <a href="#" id="brand" className="flex gap-2 items-center">
      <img className="object-cover max-w-12 max-h-12" src="./assets/asset 0.png" alt="" />
      <span className="text-lg font-medium font-display">ToDesktop</span>
    </a>
    <div className="nav-menu ">
      <a href="# hover:text-primary" >Pricing</a>
    </div>
    
    <button className='fa-solid fa-bars text-gray-600 p-2 md:hidden' onClick={handleMenu}></button>
    
    </nav>
    </>
  )
}

export default App
