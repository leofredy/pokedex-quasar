<template>
  <div>
    <div v-show="store.showFundoEscuro" id="maskToggle"></div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useCounterStore } from "stores/showcase/index";

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
});
</script>

<style scoped>
#maskToggle {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
}
</style>
