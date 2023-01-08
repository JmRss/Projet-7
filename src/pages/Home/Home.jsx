import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import './style.css'
import '../../responsive.css'
import useFetch from '../../utils/hooks'

export default function Home() {
  const { data, isLoading, error } = useFetch('../lodging.json')
  if (isLoading) return <h1>LOADING...</h1>
  if (error) console.log(error)

  return (
    <>
      <Header />
      <Banner />
      <div className='container'>
        {data.map(({ title, cover, id }) => (
          <Card cover={cover} title={title} id={id} key={id} />
        ))}
      </div>
      <Footer />
    </>
  )
}
