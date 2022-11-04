import { useSuperHerosData } from "../hooks/useSuperHerosData.js"


export const RQSuperHeroes = () => {
   
   const onSuccess = () => {
    alert("sucessfully Fetched superheroes")
   }

   const onError = () =>{
    alert("Error fetching")
   }

 
   const{ isLoading, data, isError , error , isFetching, refetch } = useSuperHerosData(onError,onSuccess)

    console.log({isLoading,isFetching})
    if(isLoading || isFetching){
        return <h2>Loading Superheroes......</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }



    return (
        <>
        <h2>RQSuperHeroes</h2>
        <button onClick={refetch}>Fetch Heros</button>
        {
            data?.data.map(hero => {
                return <div key = {hero.key}>{hero.name} </div>
            })
        }
        </>
    )

  }