import React from 'react'
import './Main.css'
import Navbar from '../../components/Navbar/Navbar'
import Slider from '../../components/Slider/Slider'
import Card from '../../components/Card/Card'
import Location from '../../components/Location/Location'
import Footer from '../../components/Footer/Footer'
const Main = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Card />
      <Location />
      <Footer />
    </div>
  )
}

export default Main