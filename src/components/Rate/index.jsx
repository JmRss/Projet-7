import './style.css'
import star from '../../assets/images/star.svg'
import fullStar from '../../assets/images/fullStar.png'
// créer un tableau avec la valeur de rating et condition affichage du nombre d'etoile en fonction de la valeur

export default function Rate({ rating }) {
  const starArray = []
  //itére le nombre d'étoiles pleines
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      starArray.push(
        <img
          src={fullStar}
          alt='score en étoiles'
          className='star'
          key={rating + starArray.length}
        />
      )
    } else {
      starArray.push(
        <img
          src={star}
          alt='score en étoiles'
          className='star'
          key={starArray.length + rating}
        />
      )
    }
  }

  return <div className='rate'>{starArray}</div>
}
