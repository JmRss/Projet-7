import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './style.css'
import Header from '../../components/Header'
import Carrousel from '../../components/Carrousel'
import Tag from '../../components/Tags'
import Rate from '../../components/Rate'
import LodgingDropRight from '../../components/LodgingDropRight'
import LodgingDropLeft from '../../components/LodgingDropLeft'
import Footer from '../../components/Footer'

export default function Lodging() {
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
          id,
          index,
        }) => (
          <div key={title + id}>
            <Carrousel cover={cover} pictures={pictures} />
            <div className='container_profil_and_title'>
              <div className='container__title'>
                <h2>{title}</h2>
                <p className='lodging__location'>{location}</p>
                <Tag tags={tags} />
              </div>
              <div className='container_profil'>
                <div className='profil_name_and_picture'>
                  <h2 className='lodging__profil-name'>{host.name}</h2>
                  <img
                    src={host.picture}
                    alt='photo de profil'
                    className='lodging__profil-picture'
                  />
                </div>
                <Rate rating={rating} index={index} />
              </div>
            </div>
            <div className='container__dropdowns'>
              <div className='container__dropdown'>
                <LodgingDropLeft description={description} />
              </div>
              <div className='container__dropdown'>
                <LodgingDropRight equipments={equipments} />
              </div>
            </div>
            <Footer />
          </div>
        )
      )}
    </>
  )
}
