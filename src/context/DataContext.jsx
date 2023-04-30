import { createContext, useState, useEffect } from 'react'
/*Je crée un Contexte */
const DataContext = createContext({})
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([])
  /*J'utilise le hook useEffect pour récupèrer mes données et les injecter dans mon tabeau data, 
  j'ajoute comme deuxième argument un tableau de dépendances vide afin qu'il ne s'exécute qu'une seule fois*/
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/data.js`)
      const data = await response.json()
      setData(data)
    }
    fetchData()
  }, [])
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  )
}

export default DataContext
