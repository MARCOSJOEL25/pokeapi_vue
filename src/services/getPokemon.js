import axios from 'axios'

const getPokemon = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    withCredentials:false
})

export default{
    getData(id){
        return getPokemon.get('/' + id)
    }
}