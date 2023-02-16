import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const DataContext = createContext({})
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('/data.js').then((res) => setData(res.data))
  }, [])
  //console.log(data)

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  )
}

export default DataContext
