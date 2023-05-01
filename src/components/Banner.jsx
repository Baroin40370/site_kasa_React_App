import React from 'react'

const Banner = ({ titre, image, description }) => {
  const hasContent = titre && titre.length
  return (
    <div className="banner">
      <div className="title">
        {hasContent && <h1>{titre}</h1>}

        <img src={image} alt={description} />
      </div>
    </div>
  )
}

export default Banner
