export default interface GameTeams {
  away: {
    leageRecord: {
      wins: Number
      losses: Number
      pct: Number
    }
    score: Number
    team: {
      id: Number
      name: String
      link: String
    }
    isWinner: Boolean
    splitSquad: Boolean
    seriesNumber: Number
  }
  home: {
    leageRecord: {
      wins: Number
      losses: Number
      pct: Number
    }
    score: Number
    team: {
      id: Number
      name: String
      link: String
    }
    isWinner: Boolean
    splitSquad: Boolean
    seriesNumber: Number
  }
}
