import React from 'react'
import { useUser,UserProvider } from './UserContext'

const LoggedInUser =()=>{
    const {user} = useUser()
    return(
        <p className="flex justify-end p-3 text-xl ">Hello <span className='UserName'>{user.name}</span></p>
    )
}

const Page =()=>{
    const {user} = useUser()
    return(
        <div>
            const[user]
            <h2 className='text-2xl font-bold mb-2'>What is Lorem Ipsum</h2>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eveniet, non officia eaque aliquam ducimus eos nihil nemo sint adipisci! Quibusdam veniam quaerat iste sint reprehenderit architecto hic reiciendis blanditiis, impedit fugiat!lorem 32
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cumque tempora quibusdam perspiciatis tempore, odio quaerat illo rem animi magnam! Dolores dignissimos soluta eius earum libero, doloribus necessitatibus cum placeat corrupti optio!
            </p>
            <p className='text-lg pt-4'>Written By {user.name}</p>
        </div>
    )
}

const Blog = () => {
  return (
    <UserProvider>
    <div className='m-2 p-2'>
        <header>
        <h2 className='text-center text-3xl font-bold '>Blog App</h2>
        <LoggedInUser />
        <Page/>
    </header>
    </div>
    </UserProvider>
  )
}

export default Blog