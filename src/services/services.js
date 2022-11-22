const getPokemonArrUnde = ()=>{
    const arrPokemon = Array.from(Array(650))
    return arrPokemon.map((_, index) => index + 1)
}

const getPokemonArr = ()=>{
    const mixedPokemon = getPokemonArrUnde().sort(()=> Math.random() - 0.5)
    console.log(mixedPokemon)

    getPokemonNames(mixedPokemon.splice(0,4))
}

const getPokemonNames = ([a,b,c,d] = []) => {
    console.log(a,b,c,d)
}

export default getPokemonArr