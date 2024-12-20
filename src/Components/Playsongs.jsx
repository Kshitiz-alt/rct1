// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
const Playsongs = ({Name,image,desc}) => {
  return (
    <div className="abc">
        <img className="abcd" src={image} alt="" />
        <p className="abcde">{Name}</p>
        <p className="abedef">{desc}</p>
    
    </div>
  )
}
Playsongs.propTypes = {
  image: PropTypes.string, // Image should be a string
  Name: PropTypes.string,  // Name should be a string
  id: PropTypes.string,               // Optional (remove if unused)
  desc: PropTypes.string,  // Description should be a string
};


export default Playsongs
