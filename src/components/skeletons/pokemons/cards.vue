<template>
  <div class="pokedexSkeletonCards">
    <Card v-for="index in parseInt(this.$route.query.ipp) || 36" :key="index" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Card from "./card.vue";

export default defineComponent({
  name: "SkeletonCards",
  components: {
    Card,
  },
});
</script>
<style scoped>
.pokedexSkeletonCards {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  column-gap: 20px;
  row-gap: 20px;
  justify-content: center;
}
@media (min-width: 767px) {
  .pokedexSkeletonCards {
    grid-template-columns: repeat(6, 100px);
  }
}
@media (min-width: 1024px) {
  .pokedexSkeletonCards {
    grid-template-columns: repeat(8, 100px);
  }
}
@media (min-width: 1280px) {
  .pokedexSkeletonCards {
    grid-template-columns: repeat(10, 100px);
  }
}
@media (min-width: 1600px) {
  .pokedexSkeletonCards {
    grid-template-columns: repeat(13, 100px);
  }
}
</style>