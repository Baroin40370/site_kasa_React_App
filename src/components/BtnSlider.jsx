import React from 'react'
import leftArrow from '../assets/icons/leftArrow.png'
import rightArrow from '../assets/icons/rightArrow.png'

const BtnSlider = ({ direction, moveSlide, inactive }) => {
  let className = direction === 'next' ? 'btn-slide next' : 'btn-slide prev'
  if (inactive) {
    className += ' inactive'
  }
  return (
    <button onClick={moveSlide} className={className}>
      <img src={direction === 'next' ? rightArrow : leftArrow} />
    </button>
  )
}

export default BtnSlider
