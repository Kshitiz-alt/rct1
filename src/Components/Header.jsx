// eslint-disable-next-line no-unused-vars
import React from 'react'
import LeftArrow from '/LeftArrow.svg'
import RightArrow from '/RightArrow.svg'
import Login from '/Login.svg'
export default function Header() {
  return (
    <div className="header">
                <div className="nav">
                  <a>
                    <img src={LeftArrow} alt="LeftArrow" />
                  </a>
                  <a>
                    <img src={RightArrow} alt="RightArrow" />
                  </a>
    
                </div>
                <div className="buttons">
                  <a href="#">
                    <img src={Login} />
                  </a>
                </div>
              </div>
  )
}
