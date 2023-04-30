import React, { useState } from 'react'
import BtnSlider from './BtnSlider'

const Slider = ({ tableau }) => {
  const [slideIndex, setSlideIndex] = useState(1)

  /* 
  Pour choisir l'image à afficher, je me base sur un tableau d'images et un index.
  En changeant l'index, je change l'image.
  Donc, pour gérer la navigation entre les images, j'incrémente ou décrémente l'index.
  Quand le tableau est arrivé à la fin, je repasse l'index à 0 [pour] créer une boucle et ne pas rester bloqué à la fin du slider.
  Idem dans l'autre sens, quand je remonte jusqu'à zéro, ensuite je me base sur tableau.length pour retourner à la fin.
  Comme ça on peut bouger dans le slider sans jamais s'arrêter.
  */

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

  /*
En dessous du slider, j'affiche l'index et la longueur du tableau
pour permettre à l'utilisateur de savoir où il se situe dans le slider
et combien de photos il y a en tout.

S'il n'y a qu'une seule image c'est pas la peine d'afficher 1/1 donc on vérifie la longueur du tableau
pour afficher ou non cette information (via une classe CSS).

*/

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
