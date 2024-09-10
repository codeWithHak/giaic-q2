import React, { createContext, useContext } from 'react'

const UserContext = createContext()

const LearnContext = () => {
    const user = {
        name:"huzair",
        email:"huzair@abc.com"
    };
  return (
    <UserContext.Provider value={user}>
    <div>
        <h1>Welcome to the app</h1>
        <ParentComponent />
    </div>
    </UserContext.Provider>
  )
}

function ParentComponent (){
    
    return(
        <div>
            <h2>Parent Component</h2>
            <ChildComponent />
        </div>
    )
}

function ChildComponent (){
    
    return(
        <div>
            <h3>Child Component</h3>
            <GrandChildComponent />
        </div>
    )
}

function GrandChildComponent (){
    const user = useContext(UserContext)
    return(
        <div>
            <h4>Grand Child Component</h4>
            <p>Name:{user.name}</p>
            <p>Email:{user.email}</p>
        </div>
    )
}

export default LearnContext