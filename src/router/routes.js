const routes = [
  {
    path: "/",
    component: () => import("pages/Home.vue"),
  },
  {
    path: "/todos-os-pokemons",
    component: () => import("pages/Listagem.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
