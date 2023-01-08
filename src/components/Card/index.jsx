import './style.css'
import { Link } from 'react-router-dom'
//recupére les props:
export default function Card({ cover, title, id }) {
  return (
    <>
      <Link to={'/lodging/' + id} className='card'>
        <p className='text_lodging' key={title + id}>
          {title}
        </p>
        <img
          src={cover}
          alt={'photo ' + title}
          key={cover + id}
          className='cover'
        />
      </Link>
    </>
  )
}
