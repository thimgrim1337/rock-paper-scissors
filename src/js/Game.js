import AI from './AI';
import Player from './Player';
import Result from './Result';
import Stats from './Stats';

class Game {
  constructor() {
    this.options = document.querySelectorAll('.choice img[data-option]');
    this.player = new Player();
    this.options.forEach((option) =>
      option.addEventListener('click', (e) => {
        this.player.setPlayerChoice(e.target.dataset.option);
        this.options.forEach(
          (option) => (option.style.boxShadow = '0 0 10px black')
        );
        e.target.style.boxShadow = '0 0 15px white';
      })
    );

    this.stats = new Stats();
    document
      .getElementById('start')
      .addEventListener('click', this.startGame.bind(this));
    this.spanResult = document.querySelector('span.result');
    this.spanTotal = document.querySelector('span.total');
    this.spanWins = document.querySelector('span.wins');
    this.spanDraws = document.querySelector('span.draws');
    this.spanLosses = document.querySelector('span.losses');
    this.render();
  }

  render(game = {}, stats = [0, 0, 0, 0]) {
    this.spanResult.textContent = game.msg;
    this.spanTotal.textContent = stats[0];
    this.spanWins.textContent = stats[1];
    this.spanLosses.textContent = stats[2];
    this.spanDraws.textContent = stats[3];
  }

  startGame() {
    const ai = new AI(this.options);
    if (this.player.getPlayerChoice() === '')
      return alert('Plese check an option');
    const game = Result.checkWinner(
      this.player.getPlayerChoice(),
      ai.getAIChoice()
    );
    this.stats.addGameToStats(game.result);

    this.render(game, this.stats.showGameStats());
  }
}
export default Game;
