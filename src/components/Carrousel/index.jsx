import './style.css'
// import { useParams } from 'react-router-dom'
// import { useState, useEffect } from 'react'

function Carrousel({ cover }) {
  return (
    <>
      <div className='carrousel__background'>
        <img src={cover} alt="photos d'appartemments" key='' />
      </div>
    </>
  )
}

export default Carrousel
