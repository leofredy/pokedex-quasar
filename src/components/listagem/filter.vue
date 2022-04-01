<template>
  <div class="pokedexFilter">
    <button @click="toggleFilter" class="pokedexFilter-btn">
      {{ $t("filtrar") }}
    </button>

    <transition name="fadeRight">
      <ul v-show="showFilter" class="pokedexFilter-filters">
        <li class="pokedexFilter-filterTopo">
          <button @click="toggleFilter" class="pokedexMenu-btnClose">
            <svg
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M76 25.64L70.36 20L48 42.36L25.64 20L20 25.64L42.36 48L20 70.36L25.64 76L48 53.64L70.36 76L76 70.36L53.64 48L76 25.64Z"
                fill="var(--text-primary)"
              />
            </svg>
          </button>
          <h3>{{ $t("Types") }}</h3>
        </li>
        <li
          v-for="({ name }, index) in filters"
          :key="`filter-${index}`"
          class="pokedexFilter-filter"
          @click="toggleFilter"
        >
          <input
            :checked="this.$route.query.type === name"
            name="typePokemon"
            :id="`type-${index}`"
            class="pokedexFilter-type-hiden"
            type="radio"
          />
          <router-link
            :to="{
              query: {
                ...this.$route.query,
                type: this.$route.query.type !== name ? name : '',
              },
            }"
          >
            <label :for="`type-${index}`">
              {{ $t(name) }}
            </label>
          </router-link>
        </li>
      </ul>
    </transition>
    <div
      v-show="showFilter"
      @click="toggleFilter"
      class="pokedexFilter-mask"
    ></div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "FilterListing",
  props: {
    filters: Array,
  },
  data() {
    return {
      showFilter: false,
    };
  },
  methods: {
    toggleFilter() {
      this.showFilter = !this.showFilter;

      if (this.showFilter) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    },
  },
});
</script>
<style scoped>
.pokedexFilter-btn {
  padding: 8px 16px;
  background-color: var(--color-primary);
  color: var(--text-primary);
  font-size: 16px;
  border-radius: 4px;
}
.pokedexFilter-filters {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  padding: 15px 0;
  background-color: var(--background-secondary);
  max-width: 285px;
  overflow-y: auto;
}
.pokedexFilter-filterTopo {
  padding: 0 15px;
  margin-bottom: 24px;
}
.pokedexFilter-filterTopo svg {
  width: 30px;
  height: 30px;
}
.pokedexFilter-filterTopo h3 {
  color: var(--text-primary);
  font-size: 24px;
}
.pokedexFilter-type-hiden {
  display: none;
}
.pokedexFilter-filter a {
  padding: 8px 15px;
  font-size: 16px;
  color: var(--text-tertiary);
}
.pokedexFilter-filter input:checked ~ a,
.pokedexFilter-filter:hover a {
  background-color: var(--background-tertiary);
}
.pokedexFilter-filter input:checked ~ a {
  color: var(--color-primary);
}
.pokedexFilter-filter:hover a {
  color: var(--text-primary);
}
.pokedexFilter-mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
}
@media (min-width: 1280px) {
  .pokedexFilter-btn {
    cursor: pointer;
    transition: filter 0.3s ease-in-out;
  }
  .pokedexFilter-btn:hover {
    filter: brightness(0.8);
  }
}
</style>