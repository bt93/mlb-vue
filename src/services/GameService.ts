import axios from 'axios'

export default {
  async getTodaysGames() {
    return await axios.get('api/schedule/?sportId=1')
  }
}
