import Link from "next/link"

function Navbar() {
  return (
    <div>
        <ul className=" w-full h-16 items-center text-white flex gap-8 p-6 text-xl bg-blue-500">
           
           <Link href="/"> <li>Home</li></Link>
            <Link href="/services"><li>Services</li></Link>
            <Link href="/about"><li>About Us</li></Link>
            <Link href="/contact"><li>Contatc Us</li></Link>
        </ul>
    </div>
  )
}

export default Navbar