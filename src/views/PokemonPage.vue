<template>
  <div>
    <h1 v-if="!Pokemon">Espere por favor ...</h1>
    <div class="pokemon-container" v-if="Pokemon">
      <h1>which is this pokemon?!</h1>
      <PokePicture :pokemonId="Pokemon.id" :showPokemon="showPokemon" />
      <PokeOptions :options="options" @selection="checkAnswer($event)" />
      <div>
        <div class="pokemon_container_menu">
          <h1 class="fade-in">{{ msg }}</h1>
          <button @click="getOptions">New Game</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PokeOptions from "@/components/PokeOptions.vue";
import PokePicture from "@/components/PokePicture.vue";
import getPokemonArr from "@/services/services.js";

export default {
  name: "PokemonPage",
  components: {
    PokeOptions,
    PokePicture,
  },
  data() {
    return {
      options: null,
      Pokemon: null,
      showPokemon: false,
      showAnswer: false,
      msg: null,
    };
  },
  created() {
    this.getOptions();
  },
  methods: {
    async getOptions() {
      this.options = await getPokemonArr();
      this.Pokemon = await this.options[Math.floor(Math.random() * 4)];
      this.showPokemon = false;
    },
    checkAnswer(idpokemon) {
      this.showPokemon = true;
      if (idpokemon == this.Pokemon.id) {
        this.msg = `Correcto, ${this.Pokemon.name}`;
      } else {
        this.msg = `Incorrecto, ${this.Pokemon.name}`;
      }
    },
  },
};
</script>
