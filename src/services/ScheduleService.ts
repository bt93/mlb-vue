import axios from 'axios'

export default {
  async getTodaysSchedule() {
    return await axios.get('api/schedule/?sportId=1')
  }
}
