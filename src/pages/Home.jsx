import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Logement from '../components/Logement'
import banner from '../assets/img/banner.png'

const Home = () => {
  return (
    <div className="home">
      <title>Accueil</title>
      <Header />
      <Banner
        titre="Chez vous, partout et ailleurs"
        image={banner}
        description="paysage bord de mer avec montagnes et sapins"
      />
      <Logement />
      <Footer />
    </div>
  )
}

export default Home
