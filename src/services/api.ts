/* eslint-disable class-methods-use-this */
import axios from 'axios'

class ApiService {
  constructor() {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL
  }

  setBearerToken(token: string) {
    try {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
    } catch (error) {
      console.error('setBearerToken error', error)
      throw error
    }
  }

  unsetBearerToken() {
    try {
      axios.defaults.headers.common.Authorization = null
    } catch (error) {
      console.error('unsetBearerToken error', error)
      throw error
    }
  }

  async validateUser(authType: string, accessToken: string) {
    try {
      const { data } = await axios.post(`/auth/${authType}`, { accessToken })
      return data
    } catch (error) {
      console.error('validateUser error', error)
      throw error
    }
  }

  async testRoute() {
    try {
      const { data } = await axios.get('/user/test')
      console.log(data)
    } catch (error) {
      console.error('testRoute error', error)
      throw error
    }
  }
}

export default new ApiService()
