import './style.css'
// //useState   est un hook qui permet d’ajouter le state local React à des composants fonctions
// //Un hook est une fonction qui permet de « se brancher » (to hook up) sur des fonctionnalités React
import { useState } from 'react'
import vector from '../../assets/images/Vector.png'

export default function Collapse({ title, description }) {
  // variables d'état
  const [isOpen, setIsOpen] = useState(false)

  const changeState = () => {
    setIsOpen(!isOpen)
  }

  return isOpen ? (
    <>
      <button key={title} className='button__collapse' onClick={changeState}>
        {title}
        <img src={vector} alt='button' className='button--rotate' />
      </button>
      <p key={description} className='collapse__description'>
        {description}
      </p>
    </>
  ) : (
    <button
      key={title}
      className='button__collapse--open'
      onClick={changeState}
    >
      {title}
      <img src={vector} alt='button' />
    </button>
  )
}
