import { RouteRecordRaw } from 'vue-router'

export const homeViewRouteNames = {
  homeView: 'homeView',
  homeViewDetails: 'homeViewDetails'
}

export const homeViewRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: homeViewRouteNames.homeView,
    component: () => import('./HomeView.vue')
  },
  {
    path: '/details/:id',
    name: homeViewRouteNames.homeViewDetails,
    component: () => import('./HomeViewDetails.vue')
  }
]
