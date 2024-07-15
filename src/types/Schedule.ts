import type Date from './Date'

export default interface Schedule {
  totalItems: String
  totalEvents: Number
  totalGames: Number
  totalGamesInProgress: Number
  dates: Date[]
}
