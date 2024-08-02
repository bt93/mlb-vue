import type Game from './Game'

export default interface MLBDate {
  // date: String
  // totalItems: Number
  // totalEvents: Number
  // totalGames: Number
  // totalGamesInProgress: Number
  games?: Array<Game>
}
