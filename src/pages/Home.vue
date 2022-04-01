<template>
  <div>
    <div class="row">
      <div class="column">
        <BreadCrump />
        <h1>Home</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import BreadCrump from "../components/gerais/breadcrump.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    BreadCrump,
  },
  created() {
    document.title = "Pokedex | Home";
  },
});
</script>
<style scoped>
h1 {
  color: white;
}
</style>
