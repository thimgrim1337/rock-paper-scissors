import AI from './AI';
import Player from './Player';
import Result from './Result';
import Stats from './Stats';

class Game {
  constructor() {
    this.options = document.querySelectorAll('[data-option]');
    this.player = new Player();
    this.options.forEach((option) =>
      option.addEventListener('click', (e) => {
        this.player.setPlayerChoice(e.target.dataset.option);
        this.options.forEach((option) => (option.style.border = ''));
        e.target.style.border = '1px solid black';
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
    this.spanDraws.textContent = stats[2];
    this.spanLosses.textContent = stats[3];
  }

  startGame() {
    const ai = new AI(this.options);
    if (this.player.getPlayerChoice() === '') return alert('Wybierz opcję');
    const win = Result.checkWinner(
      this.player.getPlayerChoice(),
      ai.getAIChoice()
    );
    this.stats.addGameToStats(win.result);

    this.render(win, this.stats.showGameStats());
  }
}
export default Game;
