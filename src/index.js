import { createRouter, createWebHashHistory } from "vue-router";

import ToDo from "./pages/ToDo.vue";
import Modals from "./pages/Modals.vue";
import Messages from "./pages/Messages.vue";
import RickAndMorty from "./pages/RickAndMorty.vue";
import ChuckNorris from "./pages/ChuckNorris.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: ToDo },
    { path: "/modals", component: Modals },
    { path: "/messages", component: Messages },
    { path: "/chucknorris", component: ChuckNorris },
    { path: "/rickandmorty", component: RickAndMorty },
  ],
});