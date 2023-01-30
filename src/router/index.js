import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/pages/Main.vue";
import CardGame from "@/pages/CardGame.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/game',
      component: CardGame
    },
  ]
})

export default router
