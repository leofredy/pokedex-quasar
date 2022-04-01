<template>
  <div class="pokedexDetalhe">
    <SkeletonDetalhe class="pokedexDetalhe-skeleton" v-if="loading" />
    <template v-else>
      <BreadCrump :childrens="getBreadcrump" />
      <div class="row">
        <div class="column">
          <div class="pokedexDetalhe-container">
            <img
              :src="pokemon.sprites.other.home.front_default"
              :alt="`Um lindo ${pokemon.name} de frente!`"
              width="250"
              height="250"
              class="pokedexDetalhe-img"
            />

            <div class="pokedexDetalhe-infos">
              <h1 class="pokedexDetalhe-infos-name">
                {{
                  pokemon.name.replace(
                    pokemon.name[0],
                    pokemon.name[0].toUpperCase()
                  )
                }}
              </h1>
              <div class="pokedexDetalhe-infos-pesoAltura">
                <div class="pokedexDetalhe-infos-altura">
                  <h3 class="pokedexDetalhe-infos-title">
                    {{ $t("Height") }}
                  </h3>
                  <p class="pokedexDetalhe-infos-description">
                    {{ getHeight }}
                  </p>
                </div>
                <div class="pokedexDetalhe-infos-altura">
                  <h3 class="pokedexDetalhe-infos-title">
                    {{ $t("Weight") }}
                  </h3>
                  <p class="pokedexDetalhe-infos-description">
                    {{ getWeight }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useCounterStore } from "../stores/showcase/";
import { api } from "boot/axios";

import BreadCrump from "../components/gerais/breadcrump.vue";
import SkeletonDetalhe from "../components/skeletons/detalhe/geral.vue";

export default defineComponent({
  name: "DetalhePokemon",
  components: {
    BreadCrump,
    SkeletonDetalhe,
  },
  data() {
    const store = useCounterStore();
    return {
      store,
      pokemon: false,
      loading: false,
    };
  },
  computed: {
    getBreadcrump() {
      const breadcrump = [
        {
          label: this.pokemon.name,
          path: `/pokemon/${this.pokemon.id}`,
        },
      ];
      return breadcrump;
    },
    getHeight() {
      let height;
      if (this.store.localeI18 === "pt-BR") {
        height = `${(this.pokemon.height / 3.281).toFixed(0)} m`;
      } else {
        height = `${this.pokemon.height.toFixed(0)} ft`;
      }
      return height;
    },
    getWeight() {
      let weight;
      if (this.store.localeI18 === "pt-BR") {
        weight = `${(this.pokemon.weight / 2.205).toFixed(0)} kg`;
      } else {
        weight = `${this.pokemon.weight.toFixed(0)} lb`;
      }
      return weight;
    },
  },
  methods: {
    async fetchPokemon() {
      this.loading = true;
      if (this.store.pokemons.length) {
        const { data } = this.store.pokemons.find(
          ({ data: pokemon }) => pokemon.id === parseInt(this.$route.params.id)
        );
        this.pokemon = data;
      } else {
        const { data } = await api.get(`pokemon/${this.$route.params.id}`);
        this.pokemon = data;
      }
      this.aplicaSeo();
      this.loading = false;
    },
    aplicaSeo() {
      document.title = `Pokedex | ${this.pokemon.name.replace(
        this.pokemon.name[0],
        this.pokemon.name[0].toUpperCase()
      )}`;
    },
  },
  created() {
    this.fetchPokemon();
  },
});
</script>

<style scoped>
.pokedexDetalhe-skeleton {
  margin-top: 61px;
}
.pokedexDetalhe-infos {
  padding: 8px;
  width: 100%;
  min-height: 120px;
  background-color: var(--background-secondary);
  border-radius: 4px;
}
.pokedexDetalhe-img {
  width: 100%;
  max-width: 250px;
  margin: 0 auto 8px;
}
.pokedexDetalhe-infos-name {
  margin-bottom: 8px;
  font-size: 24px;
  text-align: center;
}
.pokedexDetalhe-infos-pesoAltura {
  display: flex;
  justify-content: space-around;
}
.pokedexDetalhe-infos-name,
.pokedexDetalhe-infos-title,
.pokedexDetalhe-infos-description {
  color: var(--text-primary);
}
.pokedexDetalhe-infos-title,
.pokedexDetalhe-infos-description {
  font-size: 12px;
  text-align: center;
}
@media (min-width: 768px) {
  .pokedexDetalhe-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pokedexDetalhe-img {
    margin: 0;
  }
  .pokedexDetalhe-infos {
    max-width: 400px;
  }
}
</style>