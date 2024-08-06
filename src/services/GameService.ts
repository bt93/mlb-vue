import axios, { type AxiosResponse } from 'axios'

export default {
  async getGameById(id: String): Promise<AxiosResponse<any, any>> {
    return await axios.get(`/v1.1/game/${id}/feed/live`)
  }
}
