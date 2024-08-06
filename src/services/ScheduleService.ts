import axios, { type AxiosResponse } from 'axios'

export default {
  async getTodaysSchedule(): Promise<AxiosResponse<any, any>> {
    return await axios.get('/v1/schedule/?sportId=1')
  }
}
