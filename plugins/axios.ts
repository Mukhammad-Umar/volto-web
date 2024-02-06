import axios from 'axios'
import { LANG, URL_BASE } from '../defaults'
import { removeAllTokens, token } from '@/service/TokenService'

export default defineNuxtPlugin((nuxtApp) => {

  const router = useRouter()

  const api = axios.create({
    baseURL: URL_BASE,
    headers: {
      common: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }
  })


  api.interceptors.request.use(
    (config) => {
      config.headers['Accept-Language'] = localStorage.getItem('locale')
        ? localStorage.getItem('locale')
        : LANG
  
      if (token.get()) {
        config.headers.Authorization = 'Bearer ' + token.get()
      }
  
      return config
    },
    (error) => Promise.reject(error)
  )


  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        removeAllTokens()
        router.push({ name: 'BaseLogin' }).catch(() => {})
      }
  
      return Promise.reject(error)
    }
  )

  // return { api }

  return {
    provide: {
      api: api
    }
  }
})
