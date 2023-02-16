import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({ data }) => {
  const url = `/fiche_logement/${data.id}`
  return (
    <li className="card">
      <img src={data.cover} alt={data.description}></img>
      <NavLink to={url}>
        <h2>{data.title}</h2>
      </NavLink>
    </li>
  )
}

export default Card
