/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",  
  ],
  theme: {
    
    extend: {

    //   // ----- import a custom font -----

    //   // fontFamily:{
    //   //   "new":["New Amsterdam", "sans-serif"]
    //   // },

    //   // ----- import custom color -----

      // colors:{
      //   neon:{
      //     100:"#74EE15",
      //     200:'#5cbe10',
      //     300:"#51a60e"
      //   }
      // }

     },
  },
  plugins: [],
}

