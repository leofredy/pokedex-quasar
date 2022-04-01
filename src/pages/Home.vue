<template>
  <div class="pokedexHome">
    <div class="row">
      <div class="column">
        <div class="pokedexHome-container">
          <h1>PokeDex</h1>
          <p>
            {{ this.$t("descricaoHome") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  created() {
    document.title = "Pokedex | Home";
  },
});
</script>
<style scoped>
.pokedexHome {
}
.pokedexHome-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 162.59px);
}
.pokedexHome h1 {
  font-size: 36px;
  text-align: center;
  color: var(--color-primary);
}
.pokedexHome p {
  font-size: 14px;
  color: var(--text-primary);
  text-align: center;
  max-width: 400px;
}
</style>
