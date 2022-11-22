<template>
  <div class="pokemon-container">
    <h1>which is this pokemon?! </h1>
    <PokePicture :pokemonId="8" :showPokemon="true" />
    <PokeOptions />
  </div>
</template>

<script>
import PokeOptions from '@/components/PokeOptions.vue';
import PokePicture from '@/components/PokePicture.vue';

export default {
  name: 'PokemonPage',
  components: {
    PokeOptions,
    PokePicture
  },
  data() {
    return {
      
    }
  }
}
</script>
