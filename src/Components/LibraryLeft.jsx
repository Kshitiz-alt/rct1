// eslint-disable-next-line no-unused-vars
import React from 'react'
import Library from '/Library.svg'
import Home from '/Home.svg'
export default function LibraryLeft(){
    return (
        <div className="library bg-bluish rounded m-1 p-1">
            <div className="Home m-1 p-1">
                <a>
                    <img className="Home" src= {Home} alt= "Home"/>
                </a>
                <h2 className= "Home1">Home</h2>

               

            </div>
            <div className="heading">
                <a>
                    <img src={Library} alt="Library" />
                </a>
                <h1>Library</h1>
            </div>
            <div className="Library-songs">
            </div>
        </div>

    )
}
