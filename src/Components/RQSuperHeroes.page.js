import { useQuery } from "react-query"
import axios from "axios"

const fetchData = () => {
    return axios.get('http://localhost:4000/superheroes')
}
export const RQSuperHeroes = () => {
   const{ isLoading, data, isError , error , isFetching } = useQuery("super-heros",fetchData,
   {
    staleTime:0,
   })

    console.log({isLoading,isFetching})
    if(isLoading){
        return <h2>Loading Superheroes......</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }



    return (
        <>
        <h2>RQSuperHeroes</h2>
        {
            data?.data.map(hero => {
                return <div key = {hero.key}>{hero.name} </div>
            })
        }
        </>
    )

  }