import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router> 
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
      </Router> 
    </>
  )
}

export default App
