import type GameTeams from './GameTeams'
import type Status from './Status'

export default interface Game {
  gamePk: Number
  gameGuid: String
  link: String
  gameType: String
  season: String
  gameDate: Date
  officialDate: String
  status: Status
  teams: GameTeams
  venue: {
    id: Number
    name: String
    link: String
  }
  content: {
    link: String
  }
  isTie: Boolean
  gameNumber: Number
  publicFacing: Boolean
  doubleHeader: String
  gamedayType: String
  tiebreaker: String
  calendarEventID: String
  seasonDisplay: String
  dayNight: String
  scheduledInnings: Number
  reverseHomeAwayStatus: Boolean
  inningBreakLength: Number
  gamesInSeries: Number
  seriesGameNumber: Number
  seriesDescription: String
  recordSource: String
  ifNecessary: String
  ifNecessaryDescription: Number
}
