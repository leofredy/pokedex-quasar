<template>
  <div class="pokedexMenu">
    <button @click="toggleMenu" class="pokedexMenu-btnMenu">
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.75 22.5H26.25V20H3.75V22.5ZM3.75 16.25H26.25V13.75H3.75V16.25ZM3.75 7.5V10H26.25V7.5H3.75Z"
          fill="#47C08F"
        />
      </svg>
    </button>

    <nav v-show="handleMenu">
      <div class="pokedexMenu-topo">
        <router-link to="/" class="pokedexHeader-link">
          <img
            class="pokedexHeader-logo"
            src="src/assets/img/logo-pokedex.png"
            alt="Logo PokeDex"
          />
        </router-link>
      </div>
      <ul>
        <li></li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useCounterStore } from "stores/showcase/index";

export default defineComponent({
  name: "HeaderMenu",
  data() {
    const store = useCounterStore();
    return {
      showMenu: false,
      store,
    };
  },
  computed: {
    handleMenu() {
      return window.screen.width > 1024 || this.showMenu;
    },
  },
  methods: {
    toggleMenu() {
      if (window.screen.width < 1024) {
        this.showMenu = !this.showMenu;
        this.store.toggleFundoEscuro();
      }
    },
  },
  created() {},
});
</script>
<style scoped>
</style>