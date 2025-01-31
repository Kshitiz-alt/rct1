// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import '../styles/Playlist.css'
function API() {
    const [tracks, setTracks] = useState([])

    // const [playbar,setPlaybar] = useState([])

    const getTracks = async () => {

        let data = await fetch("https://v1.nocodeapi.com/kshitiz/spotify/kcSkWwpnbVVitQWz/search?q=tnbee&type=track&id=50")
      

        let convertedData = await data.json()
        
        setTracks(convertedData.tracks.items)

    }

    return (
        <>
            <div>
                <div className="Playlist-Down">
                    <button className="Blackmic" onClick={getTracks}>
                        <img src="mic.svg" alt="" />

                    </button>



                    {tracks.map((element) => {
                        return (<div key={element.id} className="Tracks">

                            <div className="card">
                                <img src={element.album.images[0].url} className="card-img-top" alt="..." />


                            </div>
                            <div className="Playbar">
                                <audio src={element.preview_url} controls ></audio>


                            </div>
                       



                        </div>


                        )

                    }

                    )}
                </div>


            </div>
        </>

    )
}

export default API
