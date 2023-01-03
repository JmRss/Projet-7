import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse/index'
import Footer from '../../components/Footer'
import { dropdown } from '../../datas/Dropdown'
import '../../components/Collapse/style.css'

function About() {
  return (
    <div className='container_about'>
      <Header />
      <Banner />
      <div className='dropdown__container'>
        {dropdown.map(({ title, description, id }) => (
          <Collapse
            title={title}
            description={description}
            id={id}
            key={title + id}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default About
