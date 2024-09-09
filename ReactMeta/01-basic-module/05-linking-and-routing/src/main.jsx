import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"

// import App from './App.jsx'
// import Day from './Day.jsx'
import Video from './Video.jsx'
import Asset from './Asset.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Video />
    </BrowserRouter>
  </StrictMode>,
)
