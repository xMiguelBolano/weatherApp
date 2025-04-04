import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Comments from './comments.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Comments />
  </StrictMode>,
)
