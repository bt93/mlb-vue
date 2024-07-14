import type Game from "./Game"

export default class MLBDate {
    public date: String = ''
    public totalItems: Number = 0
    public totalEvents: Number = 0
    public totalGames: Number = 0
    public totalGamesInProgress: Number = 0
    static games: Game[]
}