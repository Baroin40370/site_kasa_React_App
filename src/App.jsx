import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './pages/Error'
import Fiche_Logement from './pages/Fiche_Logement'
import Home from './pages/Home'
import Propos from './pages/Propos'
import { DataProvider } from './context/DataContext'
/*j'englobe toutes mes pages (qui contiennent mes composants) avec mon provider pour accéder au contexte, 
le chemin '*' de la page d'erreur fonctionne si l'URL ne correspond a rien de déclaré */
const App = () => {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propos" element={<Propos />} />
          <Route path="/fiche_logement/:id" element={<Fiche_Logement />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  )
}

export default App
