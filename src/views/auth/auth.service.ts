import { httpService } from '@/services'
import { ILoginForm, ISignUpForm, IUserData } from '@/views/auth/auth.types'

class AuthService {
  signUp (payload: ILoginForm): Promise<ISignUpForm> {
    return httpService.auth.post(
      `/accounts:signUp?key=${process.env.VUE_APP_API_KEY}`,
      {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      }
    )
  }

  login (payload: ILoginForm): Promise<ISignUpForm> {
    return httpService.auth.post(`/accounts:signInWithPassword?key=${process.env.VUE_APP_API_KEY}`,
      {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
  }

  setUser (localId: string, userData: IUserData): Promise<IUserData> {
    return httpService.main.post(`/users/${localId}/.json`, {
      email: userData.email,
      nickname: userData.nickname
    })
  }

  getUser (userId: string | null): Promise<any> {
    return httpService.main.get(`/users/${userId}/.json`)
  }
}

export const authService = new AuthService()
