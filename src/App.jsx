import {useState} from 'react'
import Library from '/Library.svg'


import './styles/App.css'
import Playlists from './Components/Playlists'
import Header from './Components/Header'
import LeftHomeSearch from './Components/LeftHomeSearch'
import MusioLogo from '/MusioLogo.svg'


function App() {

  const [mystyle, setMystyle] = useState({
    // color: 'white',
    backgroundImage: 'url(../images/Scenery.jpg)',
    backgroundSize: 'cover'
  })


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



  return (
    <>
      <div className="container flex bg-black" style ={mystyle}>

        <div className="left">
          <button className="Musio-Btn" onClick = {togglestyle}>
            <img src={MusioLogo} alt="MusioLogo" />
          </button>
          <div className="Name">Musio</div>
          <LeftHomeSearch/>
          <div className="library bg-bluish rounded m-1 p-1">
            <div className="heading">
              <a>
                <img src={Library} alt="Library" />
              </a>
              <h1>Library</h1>
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
    </>
  )
}

export default App;
