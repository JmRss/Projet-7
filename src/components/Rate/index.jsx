import './style.css'
import star from '../../assets/images/star.svg'
import fullStar from '../../assets/images/fullStar.png'
// créer un tableau avec la valeur de rating et condition affichage du nombre d'etoile en fonction de la valeur

export default function Rate({ rating }) {
  const starArray = [1, 2, 3, 4, 5]
  //affiche étoile rouge si le score est supérieur ou égal au score de la props. Sinon étoile grise
  return (
    <>
      <div className='rate'>
        {starArray.map((lvl, index) =>
          lvl >= rating ? (
            <img
              src={fullStar}
              alt='score en étoiles'
              className='star'
              key={index}
            />
          ) : (
            <img
              src={star}
              alt='score en étoiles'
              className='star'
              key={star + index}
            />
          )
        )}
      </div>
    </>
  )
}
