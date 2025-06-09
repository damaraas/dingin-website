import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Home from './pages/Home'
import MenuPage from './pages/MenuPage'
import OrderPage from './pages/OrderPage'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/Scroll/ScrollToTop';

const App = () => {
  React.useEffect(() => {
    Aos.init ({
      offset: 100,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 100,
    })
    Aos.refresh()
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<MenuPage />} />
        <Route path="/Order" element={<OrderPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App