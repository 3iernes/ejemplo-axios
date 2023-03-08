import { customAxios } from "../axiosInstanse";
import { urlGetVehicles } from "../URLs/VehiclesURLs";
import {AxiosResponse} from 'axios'

export const getVehicles = async():Promise<AxiosResponse>=>{
    return await customAxios.get(urlGetVehicles)
}