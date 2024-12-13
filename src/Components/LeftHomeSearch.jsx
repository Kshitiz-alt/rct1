// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from '/Home.svg'
import Search from '/Search.svg'


export default function LeftHomeSearch() {
  return (
    <div className="home bg-bluish rounded m-1 p-1">
      
      <div className="Home-Search">
        <a>
          <img className="Home" src={Home} alt="Home" />
        </a>
        <h2 className="Home1">Home</h2>
        <a>
          <img className="Search" src={Search} alt="Search" />
        </a>
        <h2 className="Search1">Search</h2>
      </div>
    </div>

  )
}
