import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Logement from '../components/Logement'

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Logement />
      <Footer />
    </div>
  )
}

export default Home
