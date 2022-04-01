<template>
  <div class="pokedexSkeletonGeral">
    <div class="row">
      <div class="column">
        <q-skeleton
          width="200px"
          height="20px"
          :dark="true"
          type="text"
          class="pokedexSkeletonGeral-text"
        ></q-skeleton>

        <div class="pokedexSkeletonGeral-btns">
          <q-skeleton
            width="120px"
            height="50px"
            :dark="true"
            type="rect"
          ></q-skeleton>

          <q-skeleton
            width="70px"
            height="40px"
            :dark="true"
            type="rect"
          ></q-skeleton>
        </div>

        <div class="pokedexSkeletonGeral-search">
          <q-skeleton
            width="100%"
            height="37px"
            :dark="true"
            type="rect"
            style="max-width: 500px"
          ></q-skeleton>
        </div>

        <SkeletonCards />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import SkeletonCards from "../pokemons/cards.vue";

export default defineComponent({
  name: "SkeletonGeral",
  components: {
    SkeletonCards,
  },
  data() {
    return {};
  },
});
</script>
<style scoped>
.pokedexSkeletonGeral-text {
  margin-bottom: 8px;
}
.pokedexSkeletonGeral-btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.pokedexSkeletonGeral-search {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
}
</style>