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
    status: { abstractGameState: string }
    teams: {
      away: {
        id: number
        name: string
      }
      home: {
        id: number
        name: string
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
  }

  //game.liveData.linescore.teams.away.runs
}
