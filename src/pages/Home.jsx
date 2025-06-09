import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Category from '../components/Category/Category'
import BestSeller from '../components/BestSeller/BestSeller'
import Location from '../components/Location/Location'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Category/>
      <BestSeller/>
      <Location/>
      <Footer/>
    </>
  )
}

export default Home