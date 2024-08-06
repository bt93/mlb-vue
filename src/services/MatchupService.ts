import axios, { type AxiosResponse } from 'axios'

export default {
  async getGameMatchup(id: string): Promise<AxiosResponse<any, any>> {
    return await axios.get(
      `matchup/${id}?statList=avg&statList=atBats&statList=homeRuns&statList=rbi&statList=ops`,
      { baseURL: 'https://bdfed.stitch.mlbinfra.com/bdfed/' }
    )
  }
}
