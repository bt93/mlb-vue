import axios from 'axios'

export default {
  async getTodaysSchedule() {
    return await axios.get('api/v1/schedule/?sportId=1')
  }
}
