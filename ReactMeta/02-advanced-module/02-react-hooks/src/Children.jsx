import React from 'react'

const Parent = ({children,title})=>{
    return(
    <div>
    <h1>{title}</h1>
    <div>{children}</div>
    </div>
    )
}


function Children() {
  return (
    <div>
        <Parent title="This is the title">
        <h2>Children heading 2</h2>
        <p>Children paragraph</p>
        </Parent>

    </div>
  )
}

export default Children