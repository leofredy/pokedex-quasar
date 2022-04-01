<template>
  <q-pagination
    v-model="current"
    color="primary"
    :max="numberPages"
    :max-pages="visiblePages"
    boundary-numbers
    class="pokedexPagination"
  ></q-pagination>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "PaginationComponent",
  props: {
    controls: Object,
  },
  data() {
    return {
      current: parseInt(this.$route.query.pg) || 1,
      numberPages: parseInt(
        (this.controls.count / this.controls.limit).toFixed(0)
      ),
      visiblePages: window.screen.width < 767 ? 6 : 10,
    };
  },
  watch: {
    current() {
      this.$emit("changePage", this.current);
    },
  },
});
</script>

<style scoped>
.pokedexPagination {
  margin: 0 auto;
  max-width: 210px;
}
@media (min-width: 767px) {
  .pokedexPagination {
    margin: 0 0 0 auto;
    max-width: 320px;
  }
}
</style>