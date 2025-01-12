import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: 'ideas',
          component: () => import('../components/All/IdeasComp.vue')
        },
        {
          path: 'contacts',
          component: () => import('../components/All/ContactComp.vue')
        },
        {
          path: 'agents',
          component: () => import('../components/All/AgentsComp.vue')
        },
        {
          path: 'tickets',
          component: () => import('../components/All/TicketsComp.vue')
        },
        {
          path: 'articles',
          component: () => import('../components/All/ArticlesComp.vue')
        },
        {
          path: 'settings',
          component: () => import('../components/All/SettingsComp.vue')
        },
        {
          path: 'subscription',
          component: () => import('../components/All/SubscriptionComp.vue')
        },
        {
          path: '/',
          component: () => import('../components/All/OverviewComp.vue')
        }
      ]
    }
  ]
})

export default router
