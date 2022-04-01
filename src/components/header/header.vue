<template>
  <header class="pokedexHeader">
    <div class="row">
      <div class="column">
        <div class="pokedexHeader-container">
          <Menu class="pokedexHeader-menu" />
          <router-link to="/" class="pokedexHeader-link">
            <img
              class="pokedexHeader-logo"
              src="src/assets/img/logo-pokedex.png"
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
            label-color="primary"
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
  created() {
    this.locale = this.store.localeI18;
  },
});
</script>

<style scoped>
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
</style>
