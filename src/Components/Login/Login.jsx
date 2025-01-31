/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Login.css'
const Login = () => {
  const navigate = useNavigate()
  return (
    <>
      <section id="Back" className="Section1">
        <h1 className="LOGO">I-Beat</h1>
        <nav>
          <a onClick={() => navigate('/About')}>About</a>
          <a href="#SignUp"> SignUp</a>
        </nav>
        <form className="Login-Box">
          <div className="Login-details">
            <h1> E-Mail </h1>
            <input placeholder="e-mail" />
          </div>
          <div className="Login-details">
            <h1>Password</h1>
            <input type="password" placeholder="Password" />
          </div>
          <div className="Login-btn">
            <button className="Login-btnn">Login</button>
          </div>
        </form>

      </section>
      <section className="Section2">
        <div className="SignUp-Page" id="SignUp">
          <div className="Back-btn">
            <a href="#Back">
              <img src="Login.svg" alt="" />
            </a>
          </div>
          <form className="Login-Box">
            <div className="Login-details">
              <h1> Name </h1>
              <input placeholder="Name" />
            </div>
            <div className="Login-details">
              <h1> E-Mail </h1>
              <input placeholder="e-mail" />
            </div>
            <div className="Login-details">
              <h1>Password</h1>
              <input type="password" placeholder="password" />
            </div>
            <div className="Login-btn">
              <button className="SignUp-btnn">SignUp</button>
            </div>
          </form>

        </div>
      </section>
    </>
  )
}

export default Login
