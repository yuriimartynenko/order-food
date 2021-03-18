import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { vuex } from '@/store'

export const routeGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const authPages = ['/auth/login', '/auth/sign-up']
  const authRequired = authPages.includes(to.fullPath)
  const isToken = vuex.authStore.accessToken

  if (authRequired && isToken) {
    next('/')
  } else {
    next()
  }
}
