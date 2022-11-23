import getPokemon from "./getPokemon"

const getPokemonArrUnde = ()=>{
    const arrPokemon = Array.from(Array(650))
    return arrPokemon.map((_, index) => index + 1)
}

const getPokemonArr = async ()=>{
    const mixedPokemon = getPokemonArrUnde().sort(()=> Math.random() - 0.5)

    //console.log(await getPokemonNames(mixedPokemon.splice(0,4)))
    const Pokemon = await getPokemonNames(mixedPokemon.splice(0,4))
    return Pokemon
}

const getPokemonNames = async ([a,b,c,d] = []) => {
    
    const arrPromeses = [
            getPokemon.getData(a),
            getPokemon.getData(b),
            getPokemon.getData(c),
            getPokemon.getData(d),
    ]

    const [p1, p2, p3, p4] = await Promise.all(arrPromeses)

    return [
        {name: p1.data.name, id:p1.data.id},
        {name: p2.data.name, id:p2.data.id},
        {name: p3.data.name, id:p3.data.id},
        {name: p4.data.name, id:p4.data.id}
    ]
}

export default getPokemonArr