import './style.css'
import star from '../../assets/images/star.svg'
// créer un tableau avec la valeur de rating et condition affichage du nombre d'etoile en fonction de la valeur

function Rate(rating) {
  return (
    <>
      <div className='rate'>
        <img src={star} alt='score en étoiles' />
        <img src={star} alt='score en étoiles' />
        <img src={star} alt='score en étoiles' />
        <img src={star} alt='score en étoiles' />
        <img src={star} alt='score en étoiles' />
      </div>
    </>
  )
}
export default Rate
