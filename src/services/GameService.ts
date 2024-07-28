import axios from 'axios'

export default {
  async getGameById(id: Number) {
    return await axios.get(`api/v1.1/game/${id}/feed/live`)
  }
}
