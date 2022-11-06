import { useQuery } from "react-query"
import axios from "axios"

const fetchFriends = () => {
    return axios.get('http://localhost:4000/friends')
}

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

export const ParallelQueriesPage = () => {
    const{ data:Superheroes }=useQuery('friends', fetchFriends)
    const {data:friends }=useQuery('superheroes', fetchSuperHeroes)

    return <div>parallel query</div>
}