import { httpService } from '@/services'
import { IFoods } from '@/types'

class HomeViewService {
  getFoods (): Promise<IFoods[]> {
    return httpService.local.get('/data.json')
  }
}

export const homeViewService = new HomeViewService()
