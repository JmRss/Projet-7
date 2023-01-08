import { useState } from 'react'
import vector from '../../assets/images/Vector.png'

export default function LodgingDropLeft({ description }) {
  const [isOpen, setIsOpen] = useState(false)

  const changeState = () => {
    setIsOpen(!isOpen)
  }

  return isOpen ? (
    <>
      <button className='dropdown' onClick={changeState}>
        Description
        <img
          src={vector}
          alt='button'
          className='button--rotate button__lodging'
        />
      </button>
      <div
        key={description}
        className='dropdown-description dropdown-descriptiontext'
      >
        <p>{description}</p>
      </div>
    </>
  ) : (
    <button className='dropdown' onClick={changeState}>
      Description
      <img src={vector} alt='button' className='button__lodging' />
    </button>
  )
}
