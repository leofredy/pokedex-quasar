<template>
  <div class="pokedexSkeletonDetalhe">
    <q-skeleton
      :dark="store.theme === 'dark'"
      width="250px"
      height="250px"
      style="border-radius: 4px"
      square
      class="pokedexSkeletonDetalhe-img"
    >
    </q-skeleton>
    <div class="pokedexSkeletonDetalhe-infos">
      <q-skeleton
        width="200px"
        height="30px"
        :dark="store.theme === 'dark'"
        type="text"
        class="pokedexSkeletonDetalhe-title"
      ></q-skeleton>
      <div class="pokedexSkeletonDetalhe-infos-pesoAltura">
        <q-skeleton
          width="50px"
          height="15px"
          :dark="store.theme === 'dark'"
          type="text"
        ></q-skeleton>
        <q-skeleton
          width="50px"
          height="15px"
          :dark="store.theme === 'dark'"
          type="text"
        ></q-skeleton>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useCounterStore } from "../../../stores/showcase/index";

export default defineComponent({
  name: "SkeletonDetalhe",
  data() {
    const store = useCounterStore();
    return {
      store,
    };
  },
});
</script>
<style scoped>
.pokedexSkeletonDetalhe {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pokedexSkeletonDetalhe-img,
.pokedexSkeletonDetalhe-title {
  margin-bottom: 8px;
}
.pokedexSkeletonDetalhe-infos {
  width: 100%;
}
.pokedexSkeletonDetalhe-title {
  margin-left: auto;
  margin-right: auto;
}
.pokedexSkeletonDetalhe-infos-pesoAltura {
  display: flex;
  justify-content: space-around;
}
@media (min-width: 768px) {
  .pokedexSkeletonDetalhe {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .pokedexSkeletonDetalhe-infos {
    max-width: 400px;
  }
}
</style>
