import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-xl">
  <div id="hero" className=" py-32 bg-cyan-900 text-white px-0 border border-red-300">
     <div id="container" className="w-4/6  mx-auto border border-red-500">
      <div id="hero__text" className="w-4/6 max-w-3xl  border border-red-900">
      <h1 className="text-5xl font-bold">Responsive layouts don’t have to be a struggle</h1>
      <p className="mt-10 mb-16 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      <Link href="#" className="uppercase text-xl font-bold bg-cyan-400 text-cyan-900 px-4 py-3 rounded-full inline-block">i want to learn</Link>
      </div>
      </div> 
  </div>

  <div id="row" className="flex flex-col lg:flex-row w-4/6 mx-auto gap-6 my-8">
    <div id="col" className=" bg-cyan-400">
    <h2 className="text-3xl py-8 font-bold">Cheap</h2>
    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </div>
    <div id="col" className=" bg-cyan-400">
    <h2  className="text-3xl py-8 font-bold">Cheap</h2>
    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </div>
    <div id="col" className=" bg-cyan-400">
    <h2 className="text-3xl py-8 font-bold">Cheap</h2>
    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </div>
  </div>

  <div id="row" className="flex flex-col lg:flex-row w-4/6 mx-auto gap-6">
  <div id="col" className=" bg-blue-400">
    <h2  className="text-3xl py-8 font-bold">Cheap</h2>
    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </div>
    <div id="col" className=" bg-blue-400">
    <h2 className="text-3xl py-8 font-bold">Cheap</h2>
    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </div>
  </div>
  </main>
  
  );
}
