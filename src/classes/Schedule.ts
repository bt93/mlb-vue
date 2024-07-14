import type Date from "./Date"

export default class Schedule {
    public totalItems: String = ''
    public totalEvents: Number = 0
    public totalGames: Number = 0
    public totalGamesInProgress: Number = 0
    public dates: Date[] = new Array<Date>
}