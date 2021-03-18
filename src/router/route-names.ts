import { homeViewRouteNames } from '@/views/home/home.routes'
import { authRouteNames } from '@/views/auth/auth.routes'
import { cartRouteNames } from '@/views/cart/cart.routes'

export const routesNames = {
  rootPage: 'rootPage',
  auth: 'auth',

  ...cartRouteNames,
  ...homeViewRouteNames,
  ...authRouteNames
}
