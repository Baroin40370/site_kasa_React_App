import { createContext, useState, useEffect } from 'react'

const DataContext = createContext({})
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([])

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
