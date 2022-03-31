<template>
  <header class="pokedexHeader">
    <div class="row">
      <div class="column">
        <div class="pokedexHeader-container">
          <Menu />
          <router-link to="/" class="pokedexHeader-link">
            <img
              class="pokedexHeader-logo"
              src="src/assets/img/logo-pokedex.png"
              alt="Logo PokeDex"
            />
          </router-link>

          <button class="pokedexHeader-search">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9167 11.6667H12.2583L12.025 11.4417C12.8417 10.4917 13.3333 9.25833 13.3333 7.91667C13.3333 4.925 10.9083 2.5 7.91667 2.5C4.925 2.5 2.5 4.925 2.5 7.91667C2.5 10.9083 4.925 13.3333 7.91667 13.3333C9.25833 13.3333 10.4917 12.8417 11.4417 12.025L11.6667 12.2583V12.9167L15.8333 17.075L17.075 15.8333L12.9167 11.6667V11.6667ZM7.91667 11.6667C5.84167 11.6667 4.16667 9.99167 4.16667 7.91667C4.16667 5.84167 5.84167 4.16667 7.91667 4.16667C9.99167 4.16667 11.6667 5.84167 11.6667 7.91667C11.6667 9.99167 9.99167 11.6667 7.91667 11.6667Z"
                fill="#DEDEDE"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";
import Menu from "./menu/menu.vue";

export default defineComponent({
  name: "HeaderMenu",
  components: {
    Menu,
  },
});
</script>

<style scoped>
.pokedexHeader {
  padding: 16px 0;
  background-color: var(--background-secondary);
}
.pokedexHeader-container {
  display: grid;
  grid-template-columns: 40px 1fr 40px;
}
.pokedexHeader-link {
  justify-self: center;
  align-self: center;
}
.pokedexHeader-logo {
  max-width: 61px;
}
.pokedexHeader-search {
  justify-self: end;
}
</style>
