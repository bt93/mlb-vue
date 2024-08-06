export default interface Inning {
  away: {
    runs: number
  }
  home: {
    runs: number
  }
  num: number
}

export default interface LiveGameDetails {
  gamePk: number
  gameData: {
    players: any
    venue: {
      name: string
      location: {
        city: string
        state: string
        country: string
      }
    }
    status: {
      abstractGameState: string
      abstractGameCode: string
    }
    probablePitchers: {
      away: {
        fullName: string
        id: number
      }
      home: {
        fullName: string
        id: number
      }
    }
    teams: {
      away: {
        id: number
        name: string
        record: {
          leagueRecord: {
            losses: number
            wins: number
          }
        }
      }
      home: {
        id: number
        name: string
        record: {
          leagueRecord: {
            losses: number
            wins: number
          }
        }
      }
    }
  }
  liveData: {
    linescore: {
      innings: Array<Inning>
      teams: {
        away: {
          runs: number
          hits: number
          errors: number
        }
        home: {
          runs: number
          hits: number
          errors: number
        }
      }
    }
    boxscore: {
      teams: {
        away: {
          players: any
        }
        home: {
          players: any
        }
      }
    }
  }
}
