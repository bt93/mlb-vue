export default interface Player {
  id: number
  boxscoreName: string
  primaryPosition: string
  stats?: {
    homeRuns: number
    avg: string
    atBats: number
    ops: string
    rbi: number
  }
}

export default interface Matchup {
  probables: {
    gameType: string
    season: string
    homeSport: number
    homeLeague: number
    awayLeague: number
    gameDate: string
    homeId: number
    awayId: number
    homeAbbreviation: string
    awayAbbreviation: string
    homeProbable: number
    awayProbable: number
    homeProbableLastName: string
    awayProbableLastName: string
  }
  home: Player[]
  away: Player[]
}
