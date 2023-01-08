import './style.css'
import { useState } from 'react'
import vector from '../../assets/images/Vector.png'

export default function LodgingDropRight({ equipments }) {
  const [isOpen, setIsOpen] = useState(false)

  const changeState = () => {
    setIsOpen(!isOpen)
  }

  return isOpen ? (
    <>
      <button className='dropdown' onClick={changeState}>
        Équipements
        <img
          src={vector}
          alt='button'
          className='button--rotate button__lodging'
        />
      </button>
      <div className='dropdown-description dropdown-descriptiontext'>
        {equipments.map((el) => (
          <p key={el}>{el}</p>
        ))}
      </div>
    </>
  ) : (
    <button className='dropdown' onClick={changeState}>
      Équipements
      <img src={vector} alt='button' className='button__lodging' />
    </button>
  )
}
