export default interface Game {
  gamePk: number
  link: string
  gameType: string
  gameDate: Date
  venue: {
    id: number
    name: string
    link: string
  }
  teams: {
    away: {
      leagueRecord: {
        wins: number
        losses: number
        pct: number
      }
      score: number
      team: {
        id: Number
        name: string
        link: string
      }
      isWinner: boolean
      splitSquad: boolean
      seriesNumber: number
    }
    home: {
      leagueRecord: {
        wins: number
        losses: number
        pct: number
      }
      score: number
      team: {
        id: number
        name: string
        link: string
      }
    }
  }
  status: {
    abstractGameCode: string
    abstractGameState: string
  }
}
