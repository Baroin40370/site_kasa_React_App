import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({ logements }) => {
  return (
    <li className="card">
      <img src={logements.cover} alt={logements.description}></img>
      <NavLink to="./article">
        <h2>{logements.title}</h2>
      </NavLink>
    </li>
  )
}

export default Card
