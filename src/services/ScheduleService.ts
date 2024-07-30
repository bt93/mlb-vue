import axios from 'axios'

export default {
  async getTodaysSchedule() {
    return await axios.get('/v1/schedule/?sportId=1')
  }
}
