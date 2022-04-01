<template>
  <footer>
    <div class="row">
      <div class="column">
        <p>© 2022 Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterComponent",
  data() {},
});
</script>
<style scoped>
footer {
  padding: 8px 0;
}
p {
  font-size: 12px;
  color: var(--text-primary);
  text-align: center;
}
</style>
