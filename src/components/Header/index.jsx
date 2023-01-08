import { NavLink } from 'react-router-dom'
import './style.css'
import logo from '../../assets/images/LOGO.png'

export default function Header() {
  return (
    <header>
      <img src={logo} alt='logo Kasa' className='logo' />
      <nav>
        <NavLink
          to='/'
          className={(nav) =>
            nav.isActive ? 'accueil underline_nav' : 'accueil'
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to='/about'
          className={(nav) =>
            nav.isActive ? 'apropos underline_nav' : 'apropos'
          }
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}
