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

    <transition name="fadeLeft">
      <nav v-show="handleMenu" class="pokedexMenu-navigation">
        <div class="pokedexMenu-topo">
          <router-link to="/" class="pokedexMenu-link">
            <img
              class="pokedexMenu-logo"
              src="/src/assets/img/logo-pokedex.png"
              alt="Logo PokeDex"
            />
          </router-link>
          <button @click="toggleMenu" class="pokedexMenu-btnClose">
            <svg
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M76 25.64L70.36 20L48 42.36L25.64 20L20 25.64L42.36 48L20 70.36L25.64 76L48 53.64L70.36 76L76 70.36L53.64 48L76 25.64Z"
                fill="#47C08F"
              />
            </svg>
          </button>
        </div>
        <ul class="pokedexMenu-linksPage">
          <li @click="toggleMenu" class="pokedexMenu-linkPage">
            <router-link to="/"> Home </router-link>
          </li>
          <li @click="toggleMenu" class="pokedexMenu-linkPage">
            <router-link to="/todos-os-pokemons">
              Todos os Pokémons
            </router-link>
          </li>
          <li @click="toggleMenu" class="pokedexMenu-linkPage">
            <router-link to="/historico"> Historico de Pesquisa </router-link>
          </li>
        </ul>
      </nav>
    </transition>
    <div v-show="showMenu" @click="toggleMenu" class="pokedexMenu-mask"></div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderMenu",
  data() {
    return {
      showMenu: false,
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
      }
    },
  },
});
</script>
<style scoped>
.pokedexMenu-navigation {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  padding: 15px 0;
  background-color: var(--background-secondary);
  max-width: 285px;
}
.pokedexMenu-topo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 24px;
}
.pokedexMenu-btnMenu {
  display: block;
}
.pokedexMenu-logo {
  width: 70px;
}
.pokedexMenu-btnClose svg {
  width: 30px;
  height: 30px;
}
.pokedexMenu-linkPage a {
  padding: 8px 15px;
  font-size: 16px;
  color: var(--text-tertiary);
}
.pokedexMenu-mask {
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
  .pokedexMenu-navigation {
    position: static;
    height: auto;
    max-width: unset;
    width: auto;
    padding: 0;
  }
  .pokedexMenu-btnMenu,
  .pokedexMenu-btnClose {
    display: none;
  }
  .pokedexMenu-linksPage,
  .pokedexMenu-navigation {
    display: flex;
  }
  .pokedexMenu-topo {
    margin-bottom: 0;
  }
  .pokedexMenu-logo {
    width: 100px;
  }
  .pokedexMenu-linkPage:hover a {
    color: var(--text-primary);
  }
}
</style>