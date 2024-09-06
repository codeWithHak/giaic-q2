import React from 'react'
import ReactPlayer from 'react-player'
const Video = () => {
    const vidUrl = "https://www.youtube.com/watch?v=M-fNJYuOTKc&ab_channel=ImJayD"
  return (
    <div>
        <ReactPlayer
            url={vidUrl}
            playing={false}
            volume={0.1}
            controls={true}
            />
        <h1>React Video player</h1>
    </div>
  )
}

export default Video