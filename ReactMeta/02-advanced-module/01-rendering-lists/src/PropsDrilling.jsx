import React from 'react'



const PropsDrilling = () => {
    const user = {
        name:"huzair",
        email:"huzair@abc.com"
    };
  return (
    <div>
        <h1>Welcome to the app</h1>
        <ParentComponent user={user}/>
    </div>
  )
}

function ParentComponent ({user}){
    return(
        <div>
            <h2>Parent Component</h2>
            <ChildComponent user={user}/>
        </div>
    )
}

function ChildComponent ({user}){
    return(
        <div>
            <h3>Child Component</h3>
            <GrandChildComponent user={user}/>
        </div>
    )
}

function GrandChildComponent ({user}){
    return(
        <div>
            <h4>Grand Child Component</h4>
            <p>Name:{user.name}</p>
            <p>Email:{user.email}</p>
        </div>
    )
}

export default PropsDrilling