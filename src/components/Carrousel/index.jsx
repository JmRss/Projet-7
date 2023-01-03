import React, { useState } from 'react'
import './style.css'
import arrowLeft from '../../assets/images/arrow_left.png'
import arrowRight from '../../assets/images/arrow_right.png'

const Carrousel = ({ pictures }) => {
  const [current, setCurrent] = useState(0)
  const length = pictures.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null
  }

  const displayNone = pictures.length === 1 ? 'display-none' : ''

  return (
    <section className='slider'>
      <img
        src={arrowLeft}
        alt='fleche gauche'
        className={'left-arrow ' + displayNone}
        onClick={prevSlide}
      />
      <img
        src={arrowRight}
        alt='fleche droite'
        className={'right-arrow ' + displayNone}
        onClick={nextSlide}
      />
      {/* compter d'images */}
      <div className={'pictures-count ' + displayNone}>
        {current + 1}/{pictures.length}
      </div>

      {pictures.map((el, index, title) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={el} alt='photo du logement' className='slider_pic' />
            )}
          </div>
        )
      })}
    </section>
  )
}

export default Carrousel
