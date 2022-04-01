<template>
  <div class="pokedexSkeletonCard">
    <q-skeleton
      :dark="store.theme === 'dark'"
      width="100px"
      height="110px"
      style="border-radius: 4px"
      square
    >
    </q-skeleton>
    <q-skeleton
      width="50px"
      height="20px"
      :dark="store.theme === 'dark'"
      type="text"
    ></q-skeleton>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useCounterStore } from "../../../stores/showcase";

export default defineComponent({
  name: "SkeletonCard",
  data() {
    const store = useCounterStore();
    return {
      store,
    };
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
