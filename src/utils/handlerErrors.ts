import {AxiosError} from 'axios'
//esta func recibe un error y lo trabaja para retornar 
//un string
export const handleFetchError = (error: any): String=> { 
    let str = 'Algo salio mal'
    if(error instanceof AxiosError){
        str = error.response?.data.msj
      }else if(error instanceof Error){
        str = 'Algo salio mal.'
      }else {
        str = 'No se que paso'
      }
    return str
 }