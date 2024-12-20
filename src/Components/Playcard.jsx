// eslint-disable-next-line no-unused-vars
import React from 'react'

import PropTypes from 'prop-types'
// import {useNavigate} from 'react-router-dom'
const Playcard = ({ image, Name, desc,id}) => {
  // const navigate = useNavigate()

  return (
    <div  className="Playcard">
      <img className="Playcard-1" src={image} alt="" />
      <p className="Playcard1-Name">{Name}</p>
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
