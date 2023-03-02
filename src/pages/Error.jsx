import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
const Error = () => {
  return (
    <div className="error">
      <Header />
      <main>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <ul>
          <NavLink className="retour" to="/">
            <li>Retourner sur la page d’accueil</li>
          </NavLink>
        </ul>
      </main>
    </div>
  )
}

export default Error
