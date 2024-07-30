import type Status from './Status'
import type Team from './Team'

export default interface LiveGameDetails {
  gamePk: Number
  metaData: {
    wait: Number
    timeStamp: String
    gameEvents: String[]
    logicalEvents: String[]
  }
  gameData: {
    game: {
      pk: Number
      type: String
      doubleHeader: String
      id: String
      gamedayType: String
      tiebreaker: String
      gameNumber: Number
      calendarEventID: Number
      season: String
      seasonDisplay: String
    }
    datetime: {
      dateTime: String
      originalDate: String
      officialDate: String
      dayNight: String
      time: String
      ampm: String
    }
    status: Status
    teams: {
      away: Team
      home: Team
    }
  }
}
