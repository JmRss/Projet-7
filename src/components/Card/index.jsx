import './style.css'
import { Link } from 'react-router-dom'
//recupére les props:
function Card({ cover, title, id }) {
  return (
    <>
      <Link to={'/lodging/' + id} className='card'>
        <p className='text_lodging' key={title + id}>
          {title}
        </p>
        <img src={cover} alt='' key={cover + id} className='cover' />
      </Link>
    </>
  )
}

export default Card
