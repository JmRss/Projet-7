import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse/index'
import Footer from '../../components/Footer'
import { dropdown } from '../../datas/Dropdown'
import '../../components/Collapse/style.css'

export default function About() {
  return (
    <div className='container_about'>
      <Header />
      <Banner />
      <div className='dropdown__container'>
        {dropdown.map(({ title, description, index }) => (
          <Collapse
            title={title}
            description={description}
            key={title + index}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}
