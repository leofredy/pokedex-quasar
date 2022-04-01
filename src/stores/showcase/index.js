import { defineStore } from "pinia";

import { useI18n } from "vue-i18n";

export const useCounterStore = defineStore("counter", {
  state: () => {
    let { locale: localeI18 } = useI18n({ useScope: "global" });
    return {
      pokemons: [],
      localeI18,
      theme: "dark",
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
    toggleTheme() {
      if (this.theme === "dark") {
        this.theme = "light";
      } else {
        this.theme = "dark";
      }
      sessionStorage.setItem("theme", this.theme);
      document.body.classList.toggle("dark");
    },
    initTheme(theme) {
      sessionStorage.setItem("theme", theme);
      this.theme = theme;
      this.theme === "dark"
        ? document.body.classList.add("dark")
        : document.body.classList.remove("dark");
    },
  },
});
