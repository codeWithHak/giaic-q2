import React from 'react'

const Row = ({children})=>{
    return(
        <div className='Row'>
            {children}
        </div>
    )
}


function ColneElement() {
  return (
    <div>
        <Row>
            <p>Zinger</p>
            <p>3</p>
            <p>299</p>
            <p>HAK Foods</p>
            <p>5:12</p>
            <p>Usman</p>
        </Row>
    </div>
  )
}

export default ColneElement