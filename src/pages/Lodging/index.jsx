import './style.css'
import Header from '../../components/Header'
import Carrousel from '../../components/Carrousel'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Tag from '../../components/Tags'

function Lodging() {
  let { id } = useParams()
  const [lodgingData, setLodgingData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      await fetch('../lodging.json')
        .then((res) => res.json())
        .then((res2) => {
          const dataLodging = res2.find((e) => e.id === id)
          setLodgingData([dataLodging])
          if (!dataLodging) {
            navigate('/error')
          }
        })
        .catch((error) => console.log(error))
    }
    fetchData()
  }, [])
  console.log(lodgingData)
  return (
    <>
      <Header />
      {lodgingData.map(({ cover, pictures, title, location, host }) => (
        <>
          <Carrousel cover={cover} pictures={pictures} />
          <div className='lodging__title'>
            {title}
            <div className='container_profil'>
              <h2 className='lodging__profil-name'>{host.name}</h2>
              <img
                src={host.picture}
                alt='photo de profil'
                className='lodging__profil-picture'
              />
            </div>
          </div>
          <p className='lodging__location'>{location}</p>
          <Tag />
        </>
      ))}
    </>
  )
}

export default Lodging
