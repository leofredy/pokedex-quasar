import { defineStore } from "pinia";

import { useI18n } from "vue-i18n";

export const useCounterStore = defineStore("counter", {
  state: () => {
    let { locale: localeI18 } = useI18n({ useScope: "global" });
    return {
      pokemons: [],
      localeI18,
    };
  },
  actions: {
    setPokemons(pokemons) {
      this.pokemons = pokemons;
    },
    setLocale(locale) {
      sessionStorage.setItem("lang", locale);
      this.localeI18 = locale;
    },
  },
});
