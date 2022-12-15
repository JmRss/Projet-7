import './App.css'
//plus besoin de mettre "exact" ainsi que switch depuis la version 6.0
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Error from './components/Error/index'
import About from './components/About'
import Lodging from './components/Lodging'

function App() {
  return (
    <main className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='/about' element={<About />} />
        <Route path='/lodging' element={<Lodging />} />
      </Routes>
    </main>
  )
}

export default App
