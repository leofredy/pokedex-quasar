<template>
  <div>
    <BreadCrump :childrens="childrens" />

    Listagem
  </div>
</template>

<script>
import { defineComponent } from "vue";
import BreadCrump from "../components/gerais/breadcrump.vue";

export default defineComponent({
  name: "ListagemPage",
  data() {
    return {
      childrens: [
        {
          label: "Todos os Pokémons",
          path: "/todos-os-pokemons",
        },
      ],
    };
  },
  components: {
    BreadCrump,
  },
  created() {},
});
</script>
