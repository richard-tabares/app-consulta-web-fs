// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import './app.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
  // </StrictMode>,
)
