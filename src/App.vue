<template>
  <div class="pokedexApp">
    <Header />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useCounterStore } from "./stores/showcase";

import Header from "./components/header/header.vue";
import Footer from "./components/footer/foooter.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    const store = useCounterStore();
    return {
      store,
    };
  },
  created() {
    console.log(this.$t("descricaoHome"))
    this.store.setLocale(sessionStorage.getItem("lang") || navigator.language);
    this.store.initTheme(sessionStorage.getItem("theme") || "dark");
  },
});
</script>

<style scoped>
main {
  min-height: calc(100vh - 162.59px);
}
</style>
