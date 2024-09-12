import React from "react"
import {useState,useEffect} from "react"

const Fetch = () => {

  const [user,setUser] = useState([])

  const fetchData = ()=> {
     fetch("https://randomuser.me/api/?results=1")
     .then(response => response.json())
     .then(data => setUser(data))
  }

  const handleEffect = useEffect(()=>{
    fetchData()
  },[])

  return Object.keys(user).length > 0 ?(
   <div>
    <h1>User Data</h1>
    <h2>First Name: {user.results[0].name.first}</h2>
    <h2>Last Name: {user.results[0].name.last}</h2>
   </div>
  ):(<h1>Loading....</h1>)
}

export default Fetch



















"https://randomuser.me/api/?results=1"


