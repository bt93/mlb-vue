export default interface GameTeams {
  away: {
    leagueRecord: {
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
    leagueRecord: {
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
