import './style.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Card() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('../lodging.json')
      .then((res) => res.json())
      .then((res2) => setData(res2))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      {data.map(({ title, cover, id, text }) => (
        <Link to={id} className='card'>
          <p className='text_lodging' key={text}>
            {title}
          </p>
          <img src={cover} alt='logement' key={cover} className='cover' />
        </Link>
      ))}
    </>
  )
}

export default Card
