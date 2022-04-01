<template>
  <div>
    <Header />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useCounterStore } from "./stores/showcase";

import Header from "./components/header/header.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
  },
  data() {
    const store = useCounterStore();
    return {
      store,
    };
  },
  created() {
    this.store.setLocale(sessionStorage.getItem("lang") || navigator.language);
  },
});
</script>

<style scoped>
</style>
