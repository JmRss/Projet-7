import './style.css'
import { lodging } from '../../datas/Lodging'

function Card() {
  // const title = lodging.reduce(
  //   (acc, elem) => (acc.includes(elem.title) ? acc : acc.concat(elem.title)),
  //   []
  // )
  return (
    <>
      {lodging.map(({ title, cover }) => (
        <div className='card'>
          <p className='text_lodging' key={title}>
            {title}
          </p>
          <img src={cover} alt='photo logement' key={cover} className='cover' />
        </div>
      ))}
    </>
  )
}

export default Card
