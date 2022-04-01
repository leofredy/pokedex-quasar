<template>
  <header class="pokedexHeader">
    <div class="row">
      <div class="column">
        <button @click="store.toggleTheme()" class="pokedexHeader-theme">
          <svg
            v-if="store.theme === 'light'"
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.04 19.36L19.84 12.2L14.2 17.84L21.36 25L27.04 19.36ZM16 42H4V50H16V42ZM52 2.2H44V14H52V2.2V2.2ZM81.8 17.84L76.16 12.2L69 19.36L74.64 25L81.8 17.84ZM68.96 72.64L76.12 79.84L81.76 74.2L74.56 67.04L68.96 72.64ZM80 42V50H92V42H80ZM48 22C34.76 22 24 32.76 24 46C24 59.24 34.76 70 48 70C61.24 70 72 59.24 72 46C72 32.76 61.24 22 48 22ZM44 89.8H52V78H44V89.8ZM14.2 74.16L19.84 79.8L27 72.6L21.36 66.96L14.2 74.16Z"
              fill="black"
            />
          </svg>
          <svg
            v-else
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48.04 48C48.04 33.72 56.84 21.52 69.28 16.52C72.84 15.08 72.28 9.76 68.52 8.92C64.12 7.96 59.44 7.72 54.6 8.36C36.56 10.76 22.12 25.6 20.24 43.68C17.76 67.72 36.52 88 60.04 88C62.96 88 65.76 87.68 68.52 87.08C72.32 86.24 72.92 80.96 69.32 79.48C56.44 74.32 48 61.84 48.04 48V48Z"
              fill="black"
            />
          </svg>
        </button>
        <div class="pokedexHeader-container">
          <Menu class="pokedexHeader-menu" />
          <router-link to="/" class="pokedexHeader-link">
            <img
              v-if="store.theme === 'dark'"
              class="pokedexHeader-logo"
              src="/src/assets/img/logo-pokedex.png"
              alt="Logo PokeDex"
            />
            <img
              v-else
              class="pokedexHeader-logo"
              src="/src/assets/img/logo-pokedex-light.png"
              alt="Logo PokeDex"
            />
          </router-link>

          <q-select
            v-model="locale"
            :options="localeOptions"
            :label="$t('Language')"
            dense
            borderless
            emit-value
            map-options
            options-dense
            style="width: 97px"
            class="pokedexHeader-selectLang"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";
import { useCounterStore } from "../../stores/showcase";
import Menu from "./menu/menu.vue";

export default defineComponent({
  name: "HeaderMenu",
  components: {
    Menu,
  },
  data() {
    const store = useCounterStore();
    return {
      store,
      locale: "",
      localeOptions: [
        { value: "en-US", label: "English" },
        { value: "pt-BR", label: "Português" },
      ],
    };
  },
  watch: {
    locale() {
      this.store.setLocale(this.locale);
    },
  },
  methods: {},
  created() {
    this.locale = this.store.localeI18;
  },
});
</script>

<style scoped>
.pokedexHeader-theme {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background-color: var(--background-tertiary);
  border-radius: 100%;
  margin: 0 0 0 auto;
}
.pokedexHeader-theme svg {
  width: 30px;
  height: 30px;
}
.pokedexHeader-selectLang {
  margin: 0 0 0 auto;
}
.pokedexHeader {
  padding: 16px 0;
  background-color: var(--background-secondary);
}
.pokedexHeader-container {
  display: grid;
  grid-template-columns: 40px 1fr 97px;
}
.pokedexHeader-menu {
  align-self: center;
}
.pokedexHeader-link {
  align-self: center;
}
.pokedexHeader-logo {
  max-width: 61px;
}
.pokedexHeader-search {
  justify-self: end;
}
@media (min-width: 1280px) {
  .pokedexHeader-container {
    display: flex;
    justify-content: space-between;
  }
  .pokedexHeader-link {
    display: none;
  }
}
</style>
<style>
.pokedexHeader-selectLang span,
.pokedexHeader-selectLang i,
.q-menu span {
  color: var(--text-primary);
}
.q-menu {
  background-color: var(--background-tertiary);
}
.q-item--active span {
  color: var(--color-primary);
}
.pokedexHeader-selectLang .q-field__label {
  color: var(--text-primary);
}
</style>
