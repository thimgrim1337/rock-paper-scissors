/* 

class Game - uruchamia grę buttonem
class Player - pobiera i zwraca wynik gracza
class AI - losuje i zwraca wynik cpu
class Result - zwraca wynik gry
class Statistics - przechowuje rozegrane gry i zwraca statystyki
*/

import AI from './AI.js';
import Player from './Player.js';

const ai = new AI(['rock', 'paper', 'scissors']);
console.log(ai.makeChoice());

const player = new Player('rock');
console.log(player.getPlayerChoice());
