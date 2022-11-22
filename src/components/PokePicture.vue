<template>
    <div class="pokemon-container">
        <img :src="getSrc" alt="Pokemon" class="hidden_pokemon">
        <img v-if="showPokemon" :src="getSrc" alt="Pokemon" class="fade-in">
    </div>
</template>

<script>

import getPokemonArr from '../services/services.js'

    export default {
        props:{
            pokemonId:{
                required: true,
                default:1,
                type:Number
            },
            showPokemon:{
                required:true,
                default: false,
            }
        },
        data() {
            return {
                
            }
        },
        computed:{
            getSrc(){
                getPokemonArr()
                return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
            }
        }
    }
</script>

<style scoped>

</style>