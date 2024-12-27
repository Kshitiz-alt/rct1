// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Home from '/Home.svg'

import Playlists from './Playlists'
import Header from './Header'


function Source() {

  const [mystyle, setMystyle] = useState({
    backgroundImage: 'url(../lightmode.png)',
    backgroundSize: 'cover'
  })

  const togglestyle = () => {
    if (mystyle.backgroundImage == 'url(../lightmode.png)') {
      setMystyle({
        backgroundImage: 'url(../darkmode.png)',
        backgroundSize: 'cover'
      })
    }
    else {
      setMystyle({
        backgroundImage: 'url(../lightmode.png)',
        backgroundSize: 'cover'
      })
    }
  }

  const navigate = useNavigate();
  return (
    <div className="container flex bg-black" style={mystyle}>
      <div className="left">
        <a className="Musio-Btn" onClick={togglestyle}>
          <img className="Favicon" src="favicon.icon.png" alt="" />
          <div className="Name">I-Beat</div>
        </a>
          
        <div className="library bg-bluish rounded m-1 p-1">
          {/* <div className="Home m-1 p-1">
            <a>
              <img className="Home0" src={Home} alt="Home" />
            </a>
            <h2 onClick={() => navigate('/')} className="Home1">Home</h2>
          </div> */}
          <div className="center">
            <button className="btn1" onClick={() => navigate('/About')}>
              <a>
                <img className="Home0" src={Home} alt="Home" />
              </a>
              <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
              </svg>
              <span>Home</span>
            </button>
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
