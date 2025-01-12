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
          path: 'general',
          component: () => import('../components/General/GeneralComp.vue')
        },
        {
          path: 'blocked',
          component: () => import('../components/Blocked/BlockedComp.vue')
        },
        {
          path: 'employees',
          component: () => import('../components/Employees/EmployeesComp.vue')
        },
        {
          path: 'managers',
          component: () => import('../components/Managers/ManagersComp.vue')
        },
        {
          path: 'tasks',
          component: () => import('../components/Tasks/TasksComp.vue')
        }
      ]
    }
  ]
})

export default router
