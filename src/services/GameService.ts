import axios from 'axios'

export default {
  async getGameById(id: String) {
    return await axios.get(`/v1.1/game/${id}/feed/live`)
  }
}
