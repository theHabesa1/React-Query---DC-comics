import axios from "axios"
import { useQuery } from "react-query"


const fetchData = () => {
    return axios.get('http://localhost:4000/superheroes')
}


export const useSuperHerosData = (onError,onSuccess) => {
  return  useQuery("super-heros",fetchData,
   {
    enabled:false,
    onError,
    onSuccess,
   })
}