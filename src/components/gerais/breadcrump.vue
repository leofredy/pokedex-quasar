<template>
  <div class="pokedexBreadcrump">
    <div class="row">
      <div class="column">
        <q-breadcrumbs>
          <q-breadcrumbs-el icon="home" to="/"></q-breadcrumbs-el>
          <q-breadcrumbs-el
            v-for="(children, index) in childrens"
            :key="index"
            :label="$t(children.label)"
            :to="children.path"
          ></q-breadcrumbs-el>
        </q-breadcrumbs>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BreadCrump",
  props: {
    childrens: Array,
  },
  created() {},
});
</script>

<style scoped>
.pokedexBreadcrump {
  margin: 24px 0 16px;
}
.pokedexBreadcrump a,
.pokedexBreadcrump div {
  color: var(--text-tertiary);
}
.pokedexBreadcrump a.q-router-link--exact-active {
  color: var(--text-primary);
}
</style>
