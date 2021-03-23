import { RouteRecordRaw } from 'vue-router'

export const cartRouteNames = {
  cart: 'cart'
}

export const cartRoutes: Array<RouteRecordRaw> = [
  {
    path: '/cart',
    name: cartRouteNames.cart,
    component: () => import('./Cart.vue')
  }
]
