//plus besoin de mettre "exact" ainsi que switch depuis la version 6.0
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Error from './components/Error/index'
import About from './pages/About'
import Lodging from './pages/Lodging/index'

function App() {
  return (
    <main className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='/about' element={<About />} />
        <Route path='/lodging/:id' element={<Lodging />} />
      </Routes>
    </main>
  )
}

export default App
