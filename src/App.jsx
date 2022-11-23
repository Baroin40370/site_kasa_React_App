import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './pages/Error'
import Home from './pages/Home'
import Propos from './pages/Propos'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
