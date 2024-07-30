export default interface Team {
  springLeague: {
    id: Number
    name: String
    link: String
    abbreviation: String
  }
  allStarStatus: String
  id: Number
  name: String
  link: String
  season: Number
  venue: {
    id: Number
    name: String
    link: String
  }
  springVenue: {
    id: Number
    link: String
  }
  teamCode: String
  fileCode: String
  abbreviation: String
  teamName: String
  locationName: String
  firstYearOfPlay: String
  league: {
    id: Number
    name: String
    link: String
  }
  division: {
    id: Number
    name: String
    link: String
  }
  sport: {
    id: Number
    link: String
    name: String
  }
  shortName: String
  record: {
    gamesPlayed: Number
    wildCardGamesBack: String
    leagueGamesBack: String
    springLeagueGamesBack: String
    sportGamesBack: String
    divisionGamesBack: String
    conferenceGamesBack: String
    leagueRecord: {
      wins: Number
      losses: Number
      ties: Number
      pct: String
    }
    records: {}
    divisionLeader: Boolean
    wins: Number
    losses: Number
    winningPercentage: String
  }
  franchiseName: String
  clubName: String
  active: Boolean
}
