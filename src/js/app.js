/* 

class Game - uruchamia grę buttonem
class Player - pobiera i zwraca wynik gracza
class AI - losuje i zwraca wynik cpu
class Result - zwraca wynik gry
class Statistics - przechowuje rozegrane gry i zwraca statystyki
*/

import AI from './AI.js';
import Player from './Player.js';
import Result from './Result.js';
import Stats from './Stats.js';

const ai = new AI();
console.log(ai.getAIChoice());

const player = new Player('rock');
console.log(player.getPlayerChoice());

const game = Result.checkWinner(player.getPlayerChoice(), ai.getAIChoice());
const stats = new Stats();
stats.addGameToStats(game);
stats.showGameStats();
