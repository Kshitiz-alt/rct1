
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Playcard from './Playcard'
import { playlistsdata } from '../assets'
// import { songsData } from '../assets'
// import Playsongs from './Playsongs'
// import ViralHit from './ViralHit'
//Playlists Section//
export default function Playlists() {
    return (
        <div className="Musio Playlists">
            <div className="Musio-Playlists"> LYTTE Playlists</div>
            <div className="play-card">
                {playlistsdata.map((item, index) => (<Playcard key={index} name={item.Name} desc={item.desc} id={item.id} image={item.image} />))}

            </div> 
            {/* <div className="Songs">
                {songsData.map((item,index)=>(<Playsongs key= {index} name={item.Name} desc={item.desc} id ={item.id} image={item.image}  />))}
            </div> */}
        </div>

    )
}


