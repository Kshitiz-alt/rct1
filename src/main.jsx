import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/index.css'
import './styles/left.css'
import './styles/play.css'
import './styles/App.css'
import './styles/style.css'
import './styles/utility.css'
import './styles/header.css'

import App from './App.jsx'



//Main root connected to html//
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
 

)
