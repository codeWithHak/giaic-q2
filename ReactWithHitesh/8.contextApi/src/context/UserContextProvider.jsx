import React from 'react'
import UserContext from './UserContext'

function UserContextProvider({children}) {
    const [user,setUser] = React.useState(null)
  return (
    <UserContext>
        {children}
    </UserContext>
  )
}

export default UserContextProvider