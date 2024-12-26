
// eslint-disable-next-line no-unused-vars
import react from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom'

import './styles/App.css'
import About from './Components/About';
import Source from './Components/Source';


// import Home from './Components/Home'
// import MusioLogo from '/MusioLogo.svg'


function App() {



  // Main container of Musio
  return (
    <>
      <Router>
        <Routes>
          {/* Define the routes */}
          <Route path="/" element={<About />} />
          <Route path="/I-Beatt" element={<Source />} />
          <Route path="*" element={<Navigate to="/I-Beatt" />} />
        </Routes>
      </Router>

    </>
  )
}

export default App;
