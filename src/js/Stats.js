class Stats {
  constructor() {
    this.gameResult = [];
  }

  addGameToStats(result) {
    this.gameResult.push(result);
  }

  showGameStats() {
    let games = this.gameResult.length;
    let wins = this.gameResult.filter((result) => result === true).length;
    let losses = this.gameResult.filter((result) => result === false).length;
    let draws = this.gameResult.filter((result) => result === 'remis').length;
    return [games, wins, losses, draws];
  }
}
export default Stats;
