const routes = [
  {
    path: "/",
    component: () => import("pages/Home.vue"),
  },
  {
    path: "/todos-os-pokemons",
    name: "Todos os Pokémons",
    component: () => import("pages/Listagem.vue"),
  },
  {
    path: "/pokemon/:id",
    name: "Detalhe do Pokémon",
    component: () => import("pages/Detalhe.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
