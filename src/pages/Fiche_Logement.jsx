import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from '../context/DataContext'
import Slider from '../components/Slider'
import Stars from '../components/Stars'
import Collapse from '../components/Collapse'
import Error from './Error'

function Fiche_Logement() {
  const { data } = useContext(DataContext)
  const { id } = useParams()
  if (!data.length) {
    //console.log('etape 1')
    return <div></div>
  }
  const d = data.find((l) => {
    return l.id === id
  })
  if (!d) {
    //console.log('etape 2')
    return <div>{<Error />}</div>
  }
  //console.log(d)
  const tableau = d.pictures
  //console.log(tableau)
  const ratings = d.rating
  //console.log(ratings)
  const host = d.host
  //console.log(d.tags)
  return (
    <div className="fiche_logement">
      <title>{d.title}</title>
      <Header />
      <Slider key={tableau.index} tableau={tableau} />
      <main>
        <section>
          <div className="titre">
            <h1>{d.title}</h1>
            <h2>{d.location}</h2>
          </div>
          <div className="host">
            <div className="infos">
              <p>{host.name}</p>
              <img src={host.picture} alt={host.name} />
            </div>
          </div>
          <div className="tags">
            <ul>
              {d.tags.map(function (element, index) {
                return <li key={index}>{element}</li>
              })}
            </ul>
          </div>
          <Stars ratings={ratings} color="#FF6060" size="30px" />
        </section>
        <section className="description">
          <div className="rectangle">
            <Collapse title="Description" content={d.description} />
          </div>
          <div className="rectangle">
            <Collapse
              title="Équipements"
              liste={d.equipments.map(function (element, index) {
                return <li key={index}>{element}</li>
              })}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Fiche_Logement
