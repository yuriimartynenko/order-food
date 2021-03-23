import { createRouter, createWebHistory, RouteRecordRaw, onBeforeRouteUpdate, useRoute } from 'vue-router'

import { routesNames } from './route-names'
import { routeGuard } from './route-guard'

import { homeViewRoutes } from '@/views/home/home.routes'
import { authRoutes } from '@/views/auth/auth.routes'
import { cartRoutes } from '@/views/cart/cart.routes'
import { profileRoutes } from '@/views/profile/profile.routes'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: routesNames.homeView },
    name: routesNames.rootPage,
    component: DefaultLayout,
    children: [
      ...homeViewRoutes,
      ...cartRoutes,
      ...profileRoutes
    ]
  },
  {
    path: '/auth',
    name: routesNames.auth,
    redirect: { name: routesNames.login },
    component: DefaultLayout,
    children: authRoutes
  },
  {
    path: '/profile',
    name: routesNames.cart,
    component: DefaultLayout,
    children: cartRoutes
  }
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(routeGuard)

export {
  routesNames,
  routes,
  onBeforeRouteUpdate,
  useRoute
}
