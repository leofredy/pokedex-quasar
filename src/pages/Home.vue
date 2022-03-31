<template>
  <div>
    <BreadCrump />

    Home
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
});
</script>
