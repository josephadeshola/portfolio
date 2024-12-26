import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { DarkModeProvider } from '../DarkModeContext'
DarkModeProvider


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <DarkModeProvider>
    <App />
    </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
