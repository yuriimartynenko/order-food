import { RouteRecordRaw } from 'vue-router'

export const profileRouteNames = {
  profile: 'profile'
}

export const profileRoutes: Array<RouteRecordRaw> = [
  {
    path: '/profile',
    name: profileRouteNames.profile,
    component: () => import('./Profile.vue')
  }
]
