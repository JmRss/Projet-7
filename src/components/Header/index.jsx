import { Link } from 'react-router-dom'
import './style.css'
import logo from '../../assets/images/LOGO.png'

function Header() {
  return (
    <header>
      <img src={logo} alt='logo Kasa' className='logo' />
      <nav>
        <Link to='/' className='accueil'>
          Accueil
        </Link>
        <Link to='/about' className='apropos'>
          A Propos
        </Link>
      </nav>
    </header>
  )
}
export default Header
