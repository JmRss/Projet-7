import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import './style.css'

function Error() {
  return (
    <section className='error_page'>
      <Header />
      <p className='error_code'>404</p>
      <p className='error_text'>
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <Link to='/' className='link'>
        Retourner sur la page d’accueil
      </Link>
    </section>
  )
}

export default Error
