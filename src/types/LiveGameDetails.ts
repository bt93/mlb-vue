export default interface LiveGameDetails {
  gamePk: number
  gameData: {
    status: { abstractGameState: string }
  }
}
