import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
const Logement = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('./data.json').then((res) => setData(res.data))
  }, [])
  return (
    <section className="logement">
      <ul>
        {data.map((logements, id) => (
          <Card key={id} logements={logements} />
        ))}
      </ul>
    </section>
  )
}

export default Logement
