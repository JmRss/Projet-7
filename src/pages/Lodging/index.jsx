import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './style.css'
import Header from '../../components/Header'
import Carrousel from '../../components/Carrousel'
import Tag from '../../components/Tags'
import Rate from '../../components/Rate'
import LodgingDropLeft from '../../components/LodgingDropLeft'
import LodgingDropRight from '../../components/LodgingDropRight'
import Footer from '../../components/Footer'

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

  return (
    <>
      <Header />
      {lodgingData.map(
        ({
          cover,
          pictures,
          title,
          location,
          host,
          tags,
          rating,
          description,
          equipments,
        }) => (
          <>
            <Carrousel cover={cover} pictures={pictures} />
            <div className='lodging__title'>
              <p>{title}</p>
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
            <div className='container__tag_rate'>
              <Tag tags={tags} />
              <Rate rating={rating} />
            </div>
            <div className='container__dropdowns'>
              <div className='container__dropdown'>
                <LodgingDropLeft equipments={equipments} />
              </div>
              <div className='container__dropdown'>
                <LodgingDropRight description={description} />
              </div>
            </div>
            <Footer />
          </>
        )
      )}
    </>
  )
}

export default Lodging
