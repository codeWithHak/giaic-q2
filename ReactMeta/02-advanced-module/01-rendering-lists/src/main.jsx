import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {UserProvider} from './UserContext.jsx'
// import App from './App.jsx'
// import Form from './Form.jsx'
// import FeedbackForm from './FeedbackForm.jsx'
// import Blog from './Blog.jsx'
// import LearnContext from './LearnContext.jsx'
import './index.css'
// import PropsDrilling from './PropsDrilling.jsx'
import LearnContext from './LearnContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LearnContext/>
  </StrictMode>,
)
