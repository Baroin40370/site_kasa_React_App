import React from 'react'
import Card from './Card'
import { useContext } from 'react'
import DataContext from '../context/DataContext'

const Logement = () => {
  const { data } = useContext(DataContext)
  //console.log(data)
  return (
    <section className="logement">
      <ul>
        {data.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </ul>
    </section>
  )
}

export default Logement
