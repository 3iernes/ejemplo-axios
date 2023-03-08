import axios,{CreateAxiosDefaults} from 'axios'
const config: CreateAxiosDefaults = {
    baseURL: 'http://localhost:5000',
}
export const customAxios = axios.create(config)