
import React, { useState } from 'react'

function App() {
  const [color,setColor] = useState("blue")
  
  
  function changeColor(e){
    setColor(e.target.value)
    console.log(e.target.value);
    
    }
  return (
    <div className='h-screen w-full' style={{backgroundColor:color}} >
      <div className='flex w-[80% mx auto] justify-center items-end h-screen pb-12 gap-3'>
    <button className='btn text-white bg-blue-400  shadow-lg  px-6 py-2 rounded-full'  value='blue' onClick={changeColor}>Blue</button>
    <button className='btn text-white bg-green-400 shadow-lg  px-6 py-2 rounded-full'  value='green' onClick={changeColor}>Green</button>
    <button className='btn text-white bg-red-400 shadow-lg  px-6 py-2 rounded-full'  value='red' onClick={changeColor}>Red</button>
      </div>
    </div>
  )
}

export default App


// bad and robust code -- Non Dynamic


// import React, { useState } from "react";

// function App() {
//   const [color, setColor] = useState("green");
//   function bgGreen() {
//     return setColor("green");
//   }
//   function bgBlue() {
//     return setColor("blue");
//   }
//   function bgRed() {
//     return setColor("red");
//   }
//   return (
//     <div className={`h-screen w-full bg-[${color}]`}>
//       <div className="flex w-[80% mx auto] justify-center items-end h-screen pb-12 gap-3">
//         <button
//           className="btn text-white bg-red-400 shadow-lg  px-6 py-2 rounded-full"
//           onClick={bgRed}
//         >
//           Red
//         </button>
//         <button
//           className="btn text-white bg-green-400 shadow-lg  px-6 py-2 rounded-full"
//           onClick={bgGreen}
//         >
//           Green
//         </button>
//         <button
//           className="btn text-white bg-blue-400  shadow-lg  px-6 py-2 rounded-full"
//           onClick={bgBlue}
//         >
//           Blue
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
