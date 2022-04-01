<template>
  <div class="row">
    <div class="column">
      <h1>DETALHE</h1>
      <p v-if="pokemon">
        {{ pokemon.name }}
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useCounterStore } from "../stores/showcase/";
import { api } from "boot/axios";

export default defineComponent({
  name: "DetalhePokemon",
  data() {
    const store = useCounterStore();
    return {
      store,
      pokemon: false,
    };
  },
  methods: {
    fetchPokemon() {
      if (this.store.pokemons.length) {
        const { data } = this.store.pokemons.find(
          ({ data: pokemon }) => pokemon.id === parseInt(this.$route.params.id)
        );
        this.pokemon = data;
      } else {
        api.get(`pokemon/${this.$route.params.id}`).then(({ data }) => {
          this.pokemon = data;
        });
      }
    },
  },
  created() {
    this.fetchPokemon();
  },
});
</script>

<style>
</style>