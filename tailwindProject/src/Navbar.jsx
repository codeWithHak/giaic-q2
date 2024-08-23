function Navbar() {
    const toggleNav = document.getElementById("toggle-nav")
    const handleMenu = () => {
      toggleNav.classList.toggle("hidden")
    }
    return (
      <>
        {/* Navbar */}
  
        <nav className="flex p-3 bg-white justify-between items-center">
          <a href="#" id="brand" className="flex gap-2 items-center flex-1">
            <img className="object-cover max-w-12 max-h-12" src="./assets/asset 0.png" alt="" />
            <span className="text-2xl md:text-xl lg:text-lg font-medium font-display">ToDesktop</span>
          </a>
  
          <div className="nav-menu md:flex gap-10 hidden font-body md:text-xl lg:text-lg text-2xl  ">
            <a href="#" className="font-medium hover:text-primary" >Pricing</a>
            <a href="#" className="font-medium hover:text-primary" >Docs</a>
            <a href="#" className="font-medium hover:text-primary" >Changelog</a>
            <a href="#" className="font-medium hover:text-primary" >Blogs</a>
            <a href="#" className="font-medium hover:text-primary" >Login</a>
          </div>
          <div className="flex flex-1 justify-end">
          <div className=" gap-3 items-center hidden lg:flex border border-gray-300 hover:border-gray-500 rounded-lg px-6 py-2">
            <img src="./assets/asset 1.svg" alt="" />
            <button className=" font-semibold text-lg ">ZeroOne Developers</button>
            <i class="fa-solid fa-arrow-right text-gray-400"></i>
          </div>
          </div>
          <button className='fa-solid fa-bars text-gray-600 p-2 md:hidden text-lg' onClick={handleMenu}></button>
  
          <div id="toggle-nav" className="fixed z-10 inset-0 bg-white p-3 hidden md:hidden">
            <div id="nav-bar" className="flex justify-between">
              <a href="#" id="brand" className="flex gap-2 items-center">
                <img className="object-cover max-w-12 max-h-12" src="./assets/asset 0.png" alt="" />
                <span className="text-xl font-medium font-display">ToDesktop</span>
              </a>
              <button className=' fa-solid fa-xmark text-gray-600 p-2 md:hidden text-xl' onClick={handleMenu}></button>
              </div>
              <div className="mt-6">
              <a href="#" className="p-3 m-3 font-semibold text-lg hover:bg-gray-50 block" >Pricing</a>
              <a href="#" className="p-3 m-3 font-semibold text-lg hover:bg-gray-50 block" >Docs</a>
              <a href="#" className="p-3 m-3 font-semibold text-lg hover:bg-gray-50 block" >Changelog</a>
              <a href="#" className="p-3 m-3 font-semibold text-lg hover:bg-gray-50 block" >Blogs</a>
              <a href="#" className="p-3 m-3 font-semibold text-lg hover:bg-gray-50 block" >Login</a>
              <div className="h-[1px] bg-gray-200">
              </div>
              <div className="mt-3 gap-3 items-center  flex  rounded-lg px-6 py-2 hover:bg-gray-50">
              <img src="./assets/asset 1.svg" alt="" />
              <button className=" font-semibold text-lg ">Electron Developers</button>
        
              </div>
            </div>
          </div>
        </nav>
      </>
    )
  }
  
  export default Navbar
  