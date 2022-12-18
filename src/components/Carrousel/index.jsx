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

  return (
    <section className='slider'>
      <img
        src={arrowLeft}
        alt='fleche gauche'
        className='left-arrow'
        onClick={prevSlide}
      />
      <img
        src={arrowRight}
        alt='fleche droite'
        className='right-arrow'
        onClick={nextSlide}
      />
      {pictures.map((el, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={el} alt='travel image' className='image' />
            )}
          </div>
        )
      })}
    </section>
  )
}

export default Carrousel
