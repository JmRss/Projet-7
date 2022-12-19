import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import './style.css'
import './responsive.css'

export default function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('../lodging.json')
      .then((res) => res.json())
      .then((res2) => setData(res2))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <Header />
      <Banner />
      <div className='container'>
        {data.map(({ title, cover, id }) => (
          <Card cover={cover} title={title} id={id} />
        ))}
      </div>
      <Footer />
    </>
  )
}
