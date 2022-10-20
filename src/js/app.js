/* 

class Game - uruchamia grę buttonem
class Player - pobiera i zwraca wynik gracza
class AI - losuje i zwraca wynik cpu
class Result - zwraca wynik gry
class Statistics - przechowuje rozegrane gry i zwraca statystyki
*/

import AI from './AI.js';
import Game from './Game.js';
import Player from './Player.js';
import Result from './Result.js';
import Stats from './Stats.js';

const game = new Game();
