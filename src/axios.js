import axios  from "axios";
import {baseUrl} from './constanse/constanse'
const instance = axios.create({
    baseURL: baseUrl,
  });

  export default instance