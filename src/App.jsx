import { useState } from 'react'


import MusioLogo from '/MusioLogo.svg'

import './styles/App.css'
import Playlists from './Components/Playlists'
import Header from './Components/Header'
import LibraryLeft from './Components/LibraryLeft'
// import MusioLogo from '/MusioLogo.svg'


function App() {
  // useState used for background toggle
  const [mystyle, setMystyle] = useState({
    // color: 'white',
    backgroundImage: 'url(../images/Scenery.jpg)',
    backgroundSize: 'cover'
  })

  // interchange between background
  const togglestyle = () => {
    if (mystyle.backgroundImage == 'url(../images/Scenery.jpg)') {
      setMystyle({
        backgroundImage: 'url(../images/Nightmode.jpg)',
        backgroundSize: 'cover'
      })
    }
    else {
      setMystyle({
        backgroundImage: 'url(../images/Scenery.jpg)',
        backgroundSize: 'cover'
      })
    }
  }



  // Main container of Musio
  return (
    <>
      <div className="container flex bg-black" style={mystyle}>
        <div className="left">
          <button className="Musio-Btn" onClick={togglestyle}>
            <img src={MusioLogo} alt="MusioLogo" />
          </button>
          <div className="Name">Musio</div>
          <LibraryLeft/>
        </div>

        <div className="right bg-bluish rounded m-1 p-1">
          <Header />
          <Playlists />

        </div>
      </div>
    </>
  )
}

export default App;
