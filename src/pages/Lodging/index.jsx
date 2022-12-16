import './style.css'
import Header from '../../components/Header'
import Carrousel from '../../components/Carrousel'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

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
      {lodgingData.map(({ cover, pictures }) => (
        <Carrousel cover={cover} pictures={pictures} />
      ))}
    </>
  )
}

export default Lodging
