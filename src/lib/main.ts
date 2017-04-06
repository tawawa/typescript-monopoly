/**
 * Boostrap 'Main' for Monopoly Game.
 */

import {IMonopolyGame} from './interfaces';
import {MonopolyGame} from './MonopolyGame';

const game: IMonopolyGame = new MonopolyGame();
game.playGame();
