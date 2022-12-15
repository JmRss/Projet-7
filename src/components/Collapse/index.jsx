import './style.css'
// //useState   est un hook qui permet d’ajouter le state local React à des composants fonctions
// //Un hook est une fonction qui permet de « se brancher » (to hook up) sur des fonctionnalités React
import { useState } from 'react'
import vector from '../../assets/images/Vector.png'
import { dropdown } from '../../datas/Dropdown'

function Collapse() {
  // variables d'état
  const [isOpen, setIsOpen] = useState(false)

  const changeState = () => {
    setIsOpen(!isOpen)
  }

  return isOpen ? (
    <div className='dropdown__container'>
      {dropdown.map(({ title, description }) => (
        <>
          <button
            key={title}
            className='button__collapse'
            onClick={changeState}
          >
            {title}
            <img src={vector} alt='button' className='button--rotate' />
          </button>
          <p key={description} className='collapse__description'>
            {description}
          </p>
        </>
      ))}
    </div>
  ) : (
    <div className='dropdown__container'>
      {dropdown.map(({ title }) => (
        <>
          <button
            key={title}
            className='button__collapse--open'
            onClick={changeState}
          >
            {title}
            <img src={vector} alt='button' />
          </button>
        </>
      ))}
    </div>
  )
}

export default Collapse
