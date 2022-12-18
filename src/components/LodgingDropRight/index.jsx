// //useState   est un hook qui permet d’ajouter le state local React à des composants fonctions
// //Un hook est une fonction qui permet de « se brancher » (to hook up) sur des fonctionnalités React
import { useState } from 'react'
import vector from '../../assets/images/Vector.png'

export default function LodgingDropRight({ description }) {
  // variables d'état
  const [isOpen, setIsOpen] = useState(false)

  const changeState = () => {
    setIsOpen(!isOpen)
  }

  return isOpen ? (
    <>
      <button
        key='description_lodgingDropdown'
        className='dropdown'
        onClick={changeState}
      >
        Description
        <img src={vector} alt='button' className='button--rotate' />
      </button>
      <div
        key={description}
        className='dropdown-description dropdown-descriptiontext'
      >
        <p>{description}</p>
      </div>
    </>
  ) : (
    <button
      key='description_lodgingDropdown'
      className='dropdown'
      onClick={changeState}
    >
      Description
      <img src={vector} alt='button' />
    </button>
  )
}
