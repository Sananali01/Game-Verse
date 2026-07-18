import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import { ThemeProvider } from './context/ThemeContext'
import { ShopProvider } from './context/ShopContext'
import './styles/theme.css'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <ShopProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ShopProvider>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
)
