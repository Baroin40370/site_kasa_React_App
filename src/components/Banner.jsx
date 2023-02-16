import React from 'react'

const Banner = ({ titre, image, description }) => {
  return (
    <div className="banner">
      <div className="title">
        <h1>{titre}</h1>

        <img src={image} alt={description} />
      </div>
    </div>
  )
}

export default Banner
