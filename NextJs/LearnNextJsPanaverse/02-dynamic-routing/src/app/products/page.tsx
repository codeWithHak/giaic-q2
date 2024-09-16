import Link from "next/link"

function Products() {
    return (
      <div className="flex flex-col items-center h-screen w-full bg-slate-500">
      <h1 className="text-8xl text-white mt-12 mb-12">These are our products</h1>
      <ul className="text-3xl ">
      <li className="my-2"><Link href="/products/1">Product 1</Link></li>
      <Link href="/products/2"><li className="my-2">Product 2</li></Link>
      <li className="my-2">Product 3</li>
      <li className="my-2">Product 4</li>
      <li className="my-2">Product 5</li>
      </ul>
    </div>
    )
  }
  
  export default Products