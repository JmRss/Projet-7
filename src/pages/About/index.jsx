import Header from '../../components/Header'
import AboutBanner from '../../components/AboutBanner'
import Collapse from '../../components/Collapse/index'
import Footer from '../../components/Footer'
import { dropdown } from '../../datas/Dropdown'
import '../../components/Collapse/style.css'

function About() {
  return (
    <>
      <Header />
      <AboutBanner />
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
    </>
  )
}

export default About
