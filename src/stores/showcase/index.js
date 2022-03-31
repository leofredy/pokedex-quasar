import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    showFundoEscuro: false,
  }),
  actions: {
    toggleFundoEscuro() {
      this.showFundoEscuro = !this.showFundoEscuro;
    },
  },
});
