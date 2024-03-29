import React, { useState } from 'react'
import BtnSlider from './BtnSlider'

const Slider = ({ tableau }) => {
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== tableau.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === tableau.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(tableau.length)
    }
  }

  const inactive = tableau.length < 2

  return (
    <div className="container-slider">
      {tableau.map((obj, index) => {
        return (
          <div key={obj}>
            <div
              className={
                slideIndex === index + 1 ? 'slide active-anim' : 'slide'
              }
            >
              <img src={tableau[index]} />
            </div>
          </div>
        )
      })}
      <BtnSlider inactive={inactive} moveSlide={nextSlide} direction={'next'} />
      <BtnSlider inactive={inactive} moveSlide={prevSlide} direction={'prev'} />
      <div className="container-count">
        <div className="dots">
          <p className={inactive ? 'inactive' : ''}>
            {slideIndex} / {tableau.length}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Slider
