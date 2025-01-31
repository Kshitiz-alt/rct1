// eslint-disable-next-line no-unused-vars
import React from 'react'

import PropTypes from 'prop-types'
import API from './API';




// eslint-disable-next-line react/prop-types
const Playcard = ({ name, image, desc }) => {


  return (
    <div className="Playcard">
      <img className="Playcard-1" src={image} alt="" /> <API />
      <p className="Playcard1-Name">{name}</p>
      <p className="Playcard1-desc">{desc}</p>
    </div>
  )
}
Playcard.propTypes = {
  image: PropTypes.string, // Image should be a string
  Name: PropTypes.string,  // Name should be a string
  id: PropTypes.number.isRequired,              // Optional (remove if unused)
  desc: PropTypes.string,  // Description should be a string
};


export default Playcard
