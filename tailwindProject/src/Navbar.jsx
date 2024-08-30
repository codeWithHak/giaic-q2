function Navbar() {
  const handleMenu = () => {
    const toggleNav = document.getElementById("toggle-nav");
    toggleNav.classList.toggle("hidden");
  };

  return (
    <>
      {/* Navbar */}
      <nav className="flex p-3 bg-white justify-between items-center">
        <a href="#" id="brand" className="flex gap--1 items-center flex-1">
          <img
            className="object-cover max-w-12 max-h-12"
            src="./assets/01-noBg.png"
            alt="ZeroOne Devs"
          />
          <span className="text-xl lg:text-lg font-medium font-display">
            ZeroOne Devs
          </span>
        </a>

        <div
          id="nav-menu"
          className="lg:flex gap-10 hidden font-body md:text-xl lg:text-lg text-2xl"
        >
          <a href="#" className="font-medium hover:text-primary">
            Pricing
          </a>
          <a href="#" className="font-medium hover:text-primary">
            Projects
          </a>
          <a href="#" className="font-medium hover:text-primary">
            Testimonials
          </a>
          <a href="#" className="font-medium hover:text-primary">
            Team
          </a>
          <a href="#" className="font-medium hover:text-primary">
            Address
          </a>
        </div>

        <div className="flex flex-1 justify-end">
          <div className="gap-3 items-center hidden xl:flex border border-gray-300 hover:border-gray-500 rounded-lg px-6 py-2">
            <img src="./assets/asset 1.svg" alt="ZeroOne Developers" />
            <button className="font-semibold text-lg">
              ZeroOne Developers
            </button>
            <i className="fa-solid fa-arrow-right text-gray-400"></i>
          </div>
        </div>

        <button className="p-2 lg:hidden text-lg" onClick={handleMenu}>
          <i className="fa-solid fa-bars text-gray-600"></i>
        </button>

        <div
          id="toggle-nav"
          className="hidden fixed z-10 inset-0 bg-white p-3 lg:hidden"
        >
          <div id="nav-bar" className="flex justify-between">
            <a href="#" id="brand" className="flex gap-2 items-center">
              <img
                className="object-cover max-w-12 max-h-12"
                src="./assets/01-noBg.png"
                alt="ZeroOne Devs"
              />
              <span className="text-xl font-medium font-display">
                ZeroOne Devs
              </span>
            </a>
            <button className="p-2 lg:hidden text-xl" onClick={handleMenu}>
              <i className="fa-solid fa-xmark text-gray-600"></i>
            </button>
          </div>
          <div className="mt-6">
            <a
              href="#"
              className="p-3 m-3 font-semibold text-lg hover:bg-gray-50 block"
            >
              Pricing
            </a>
            <a
              href="#"
              className="p-3 m-3 font-semibold text-lg hover:bg-gray-50 block"
            >
              Projects
            </a>
            <a
              href="#"
              className="p-3 m-3 font-semibold text-lg hover:bg-gray-50 block"
            >
              Testimonials
            </a>
            <a
              href="#"
              className="p-3 m-3 font-semibold text-lg hover:bg-gray-50 block"
            >
              Team
            </a>
            <a
              href="#"
              className="p-3 m-3 font-semibold text-lg hover:bg-gray-50 block"
            >
              Address
            </a>
            <div className="h-[1px] bg-gray-200"></div>
            <div className="mt-3 gap-3 items-center flex rounded-lg px-6 py-2 hover:bg-gray-50">
              <img src="./assets/asset 1.svg" alt="ZeroOne Developers" />
              <button className="font-semibold text-lg">
                ZeroOne Developers
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
