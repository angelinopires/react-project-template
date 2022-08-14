import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// CORE
import { App, Routes } from './core/index'

// STYLES
import './shared/scss/main.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root'),
)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
)