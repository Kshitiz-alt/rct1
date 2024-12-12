// eslint-disable-next-line no-unused-vars
import React from 'react'

import Login from '/Login.svg'
export default function Header() {
  return (
    <div className="header">
      <div className="buttons">
        <a href="#">
          <img src={Login} />
        </a>
      </div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

    </div>
  )
}
