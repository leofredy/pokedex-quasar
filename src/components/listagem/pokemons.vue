<template>
  <ul class="pokedexPokemons">
    <li
      v-for="({ data: pokemon }, index) in pokemons"
      :key="index"
      class="pokedexPokemons-pokemon"
    >
      <router-link :to="`/pokemon/${pokemon.id}`">
        <div class="pokedexPokemons-pokemon-top">
          <p class="pokedexPokemons-pokemon-top-id">
            #{{ String(pokemon.id).padStart(2, "0") }}
          </p>
          <img
            width="98"
            height="98"
            :src="pokemon.sprites.other.home.front_default"
            :alt="`Um lindo ${formatName(pokemon.name)} de frente`"
          />
          <ul class="pokedexPokemons-pokemon-top-types">
            <li
              v-for="({ type }, index) in pokemon.types"
              :key="`type-${index}`"
              class="pokedexPokemons-pokemon-top-type"
            >
              <p>
                {{ $t(type.name) }}
              </p>
            </li>
          </ul>
        </div>
        <h3 class="pokedexPokemons-pokemon-name">
          {{ formatName(pokemon.name) }}
        </h3>
      </router-link>
    </li>
  </ul>
</template>
<script>
import { defineComponent } from "vue";
//
export default defineComponent({
  name: "ListagemPokemons",
  props: {
    pokemons: Array,
  },
  computed() {},
  methods: {
    formatName(name) {
      return name.replace(name[0], name[0].toUpperCase());
    },
  },
});
</script>
<style scoped>
.pokedexPokemons {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  justify-content: center;
  column-gap: 20px;
  row-gap: 20px;
}
.pokedexPokemons-pokemon {
  padding: 4px 0;
  border: 1px solid var(--color-primary);
  border-radius: 4px;
}
.pokedexPokemons-pokemon-top {
  position: relative;
  margin-bottom: 4px;
}
.pokedexPokemons-pokemon-top-id {
  position: absolute;
  top: 3px;
  right: 3px;
  color: var(--text-tertiary);
}
.pokedexPokemons-pokemon-top-types {
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.pokedexPokemons-pokemon-top-type:not(:first-child) {
  margin-top: 1px;
}
.pokedexPokemons-pokemon-top-type {
  padding: 2px;
  max-width: 70px;
  border-radius: 4px;
  background-color: var(--background-secondary);
}
.pokedexPokemons-pokemon-top-type p {
  font-size: 12px;
  color: var(--text-secondary);
}
.pokedexPokemons-pokemon-top-type p,
.pokedexPokemons-pokemon-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.pokedexPokemons-pokemon-name {
  padding: 0 4px;
  font-size: 14px;
  color: var(--text-primary);
  text-align: center;
}
@media (min-width: 767px) {
  .pokedexPokemons {
    grid-template-columns: repeat(6, 100px);
  }
}
@media (min-width: 1024px) {
  .pokedexPokemons {
    grid-template-columns: repeat(8, 100px);
  }
}
@media (min-width: 1280px) {
  .pokedexPokemons {
    grid-template-columns: repeat(10, 100px);
  }
  .pokedexPokemons-pokemon {
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }
  .pokedexPokemons-pokemon:hover {
    transform: scale(1.1);
  }
}
@media (min-width: 1600px) {
  .pokedexPokemons {
    grid-template-columns: repeat(13, 100px);
  }
}
</style>