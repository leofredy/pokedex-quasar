<template>
  <div class="pokedexSkeletonCard">
    <q-skeleton
      :dark="true"
      width="100px"
      height="110px"
      style="border-radius: 4px"
      square
    >
    </q-skeleton>
    <q-skeleton
      width="50px"
      height="20px"
      :dark="true"
      type="text"
    ></q-skeleton>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SkeletonCard",
  data() {
    return {};
  },
});
</script>
<style scoped>
.pokedexSkeletonCard {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
