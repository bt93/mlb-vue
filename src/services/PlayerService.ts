import axios, { type AxiosResponse } from 'axios'

export default {
  async getPlayerStats(id: number): Promise<AxiosResponse<any, any>> {
    return axios.get(`v1/people/${id}`)
  }
}
