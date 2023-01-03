import './style.css'
import { useLocation } from 'react-router-dom'

function Banner() {
  // récupére le "path"
  const location = useLocation()

  // si on se trouve sur la page A Propos, alors rajout d'une classe pour changer l'image et dimensions
  const bannerAbout =
    location.pathname === '/about' ? 'about_banner --size' : ''
  const displayNone = location.pathname === '/about' ? 'display-none' : ''
  console.log(displayNone)
  return (
    <div className={'container_banner ' + bannerAbout}>
      <div className={'banner_background ' + bannerAbout}></div>
      <div
        alt='photo bannière'
        className={'banner_background-img ' + bannerAbout}
      >
        <p className={'text_banner ' + displayNone}>
          <span>Chez vous,&nbsp;</span> partout et ailleurs
        </p>
      </div>
    </div>
  )
}

export default Banner
