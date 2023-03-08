import { useState,useEffect } from "react"
import { getVehicles } from "./API/Model/Vehicle"
import {AxiosError} from 'axios'
import {handleFetchError} from './utils/handlerErrors'
function App() {
  const [vehicles,setVehicles] = useState<any[]>([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')

  const handleFetchVehicles = async() => {
    setLoading(true)
    setError('')
    try {
      const api_response = await getVehicles()
      if(api_response.status === 200){
        console.log(api_response.data)
        setVehicles([...api_response.data])
      }
    } catch (error) {
      const strError = handleFetchError(error)
      setError(strError)
    }finally{//se ejecuta siempre al final
      setLoading(false)
    }
  }

  useEffect(()=>{
    handleFetchVehicles()
  },[])
  if(loading){return(<>Loading...</>)}
  if(error){return(<>{error}</>)}
  return (
    <div className="App">

    </div>
  )
}

export default App
