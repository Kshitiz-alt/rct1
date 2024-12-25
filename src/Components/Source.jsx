// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import MusioLogo from '/MusioLogo.svg'
import Home from '/Home.svg'

import Playlists from './Playlists'
import Header from './Header'


function Source() {

  const [mystyle, setMystyle] = useState({
    backgroundImage: 'url(../images/lightmode.png)',
    backgroundSize: 'cover'
  })

  const togglestyle = () => {
    if (mystyle.backgroundImage == 'url(../images/lightmode.png)') {
      setMystyle({
        backgroundImage: 'url(../images/darkmode.png)',
        backgroundSize: 'cover'
      })
    }
    else {
      setMystyle({
        backgroundImage: 'url(../images/lightmode.png)',
        backgroundSize: 'cover'
      })
    }
  }

  const navigate = useNavigate();
  return (
    <div className="container flex bg-black" style={mystyle}>
      <div className="left">
        <button className="Musio-Btn" onClick={togglestyle}>
          <img src={MusioLogo} alt="MusioLogo" />
        </button>
        <div className="Name">I-Beat</div>
        <div className="library bg-bluish rounded m-1 p-1">
          <div className="Home m-1 p-1">
            <a>
              <img className="Home0" src={Home} alt="Home" />
            </a>
            <h2 onClick={() => navigate('/')} className="Home1">Home</h2>
          </div>

          <div className="Library-songs">
          </div>
        </div>
      </div>

      <div className="right bg-bluish rounded m-1 p-1">
        <Header />
        <Playlists />

      </div>
    </div>
  )
}
export default Source
