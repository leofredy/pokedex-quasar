<template>
  <div class="pokedexListagem">
    <BreadCrump :childrens="breadcrump" />

    <SkeletonGeral v-if="loading.all" />

    <template v-else>
      <div class="row">
        <div class="column">
          <h1 class="pokedexListagem-title">{{ $t("todosOsPokemons") }}</h1>

          <div class="pokedexListagem-containerDisplay">
            <q-select
              outlined
              v-model="pagination.limit"
              :options="quantityPerPage"
              :label="$t('quantidade')"
              class="pokedexListagem-selectQuantity"
              @update:model-value="handleQuantity"
            ></q-select>

            <Filter :filters="pokeTypes" />
          </div>

          <input
            v-model="pokeSearch"
            :placeholder="$t('todosOsPokemons')"
            class="pokedexListagem-search"
            type="text"
          />

          <SkeletonPokes v-if="loading.listing" />

          <Pokemons
            v-else-if="getPokemons.length"
            class="pokedexListagem-listPokemons"
            :pokemons="getPokemons"
          />

          <p v-else class="pokedexListagem-notPokemons">
            {{ $t("notPokemon") }}
          </p>

          <Pagination
            class="pokedexListagem-pagination"
            @changePage="handlePagination"
            :controls="pagination"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useCounterStore } from "../stores/showcase/";
import { api } from "boot/axios";

import SkeletonPokes from "../components/skeletons/pokemons/cards.vue";
import SkeletonGeral from "../components/skeletons/listagem/geral.vue";
import BreadCrump from "../components/gerais/breadcrump.vue";
import Pokemons from "../components/listagem/pokemons.vue";
import Pagination from "../components/listagem/pagination.vue";
import Filter from "../components/listagem/filter.vue";

export default defineComponent({
  name: "ListagemPage",
  components: {
    SkeletonPokes,
    SkeletonGeral,
    BreadCrump,
    Pokemons,
    Pagination,
    Filter,
  },
  data() {
    const store = useCounterStore();
    return {
      store,
      breadcrump: [
        {
          label: "todosOsPokemons",
          path: "/todos-os-pokemons",
        },
      ],
      pokeData: false,
      pokeSearch: "",
      pokeTypes: [],
      quantityPerPage: [36, 56, 66],
      pagination: {
        limit: this.$route.query.ipp || 36,
        offset: 0,
        current: 1,
        count: 0,
      },
      loading: {
        all: true,
        listing: false,
      },
    };
  },
  computed: {
    getPokemons() {
      return this.store.pokemons.filter(
        ({ data }) =>
          data.name.includes(this.pokeSearch) && this.hasType(data.types)
      );
    },
  },
  methods: {
    initControlsPagination() {
      this.pagination.offset =
        (this.$route.query.pg ? this.$route.query.pg - 1 : 0) *
        this.pagination.limit;
      this.pagination.count = this.pokeData.count;
    },
    handleQuantity() {
      this.$router.push({
        query: { ...this.$route.query, ipp: this.pagination.limit },
      });
      this.loading.listing = true;
      this.store.setPokemons([]);
      this.loadPokemons();
    },
    handlePagination(current) {
      this.pagination.offset = (current - 1) * this.pagination.limit;
      this.$router.push({ query: { ...this.$route.query, pg: current } });
      this.loading.listing = true;
      this.store.setPokemons([]);
      this.loadPokemons();
    },
    hasType(types) {
      let isType = true;
      if (this.$route.query.type) {
        isType = types.some(({ type }) => type.name === this.$route.query.type);
      }

      return isType;
    },
    async *fetchPokemons(data) {
      for (const pokemon of data.results) {
        const pokeData = await api.get(
          `${pokemon.url.replace("https://pokeapi.co/api/v2/", "")}`
        );
        yield pokeData;
      }
    },
    loadPokemons() {
      return api
        .get(
          `pokemon?offset=${this.pagination.offset}&limit=${this.pagination.limit}`
        )
        .then(async ({ data }) => {
          this.pokeData = data;
          this.initControlsPagination();

          const pokemons = [];

          for await (const poke of this.fetchPokemons(data)) {
            pokemons.push(poke);
          }

          this.loading.listing = false;

          this.store.setPokemons(pokemons);
        });
    },
    loadTypes() {
      return api.get("type").then(({ data }) => {
        this.pokeTypes = data.results;
      });
    },
    loadPage() {
      this.loading.all = true;

      const fetchPokes = this.loadPokemons();
      const fetchTypes = this.loadTypes();
      Promise.all([fetchPokes, fetchTypes]).then(() => {
        this.loading.all = false;
      });
    },
  },
  created() {
    this.loadPage();

    document.title = "Pokedex | Todos os Pokémons";
  },
});
</script>
<style scoped>
.pokedexListagem-title {
  margin-bottom: 8px;
  font-size: 16px;
  color: var(--text-primary);
}
.pokedexListagem-containerDisplay {
  margin-bottom: 16px;
}
.pokedexListagem-selectQuantity {
  max-width: 120px;
  width: 100%;
}
.pokedexListagem-containerDisplay {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pokedexListagem-search {
  background-color: var(--background-secondary);
  color: var(--text-primary);
  border: none;
  outline: none;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 16px;
  max-width: 500px;
}
.pokedexListagem-listPokemons {
  margin-bottom: 24px;
}
.pokedexListagem-pagination {
  margin-bottom: 16px;
}
.pokedexListagem-notPokemons {
  margin: 24px 0;
  font-size: 14px;
  color: var(--text-secondary);
  text-align: center;
}
</style>
<style>
.pokedexListagem-selectQuantity.q-field--auto-height .q-field__control,
.pokedexListagem-selectQuantity .q-field__marginal {
  height: 50px;
}
.pokedexListagem-selectQuantity.q-field--auto-height .q-field__control,
.pokedexListagem-selectQuantity .q-field__marginal {
  min-height: 50px;
}
.pokedexListagem-selectQuantity
  .q-field--auto-height.q-field--labeled
  .q-field__control-container {
  padding-top: 14px;
}
.pokedexListagem-selectQuantity .q-field__append {
  padding-left: 0;
}
.pokedexListagem-selectQuantity .q-field__control {
  background-color: var(--background-secondary);
}
.pokedexListagem-selectQuantity .q-field__label,
.pokedexListagem-selectQuantity .q-icon {
  color: var(--text-tertiary);
}
.pokedexListagem-selectQuantity .items-center span {
  color: var(--text-primary);
}
</style>
