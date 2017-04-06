/**
 * Represents Monopoly Game.
 */

import * as R from 'ramda';
import {Board} from './Board';
import {Dice} from './Dice';
import {PieceName} from './enums';
import {IBoard, IDice, IMonopolyGame, IPiece, IPlayer} from './interfaces';
import {Piece} from './Piece';
import {Player} from './Player';

export class MonopolyGame implements IMonopolyGame {

  public board: IBoard;
  public dice: IDice[];
  public players: IPlayer[];
  private readonly roundsTotal: number = 1000;

  constructor() {

    console.log(`Starting Game of Monopoly for ${this.roundsTotal} rounds`);

    const dice1: IDice = new Dice();
    const dice2: IDice = new Dice();
    this.dice = [dice1, dice2];

    this.board = new Board();
    this.board.init();

    const carPiece: IPiece = new Piece(PieceName.Car, this.board.getStartSquare());
    const hatPiece: IPiece = new Piece(PieceName.Hat, this.board.getStartSquare());

    const player1: IPlayer = new Player('Player 1', carPiece, this.dice, this.board);
    const player2: IPlayer = new Player('Player 2', hatPiece, this.dice, this.board);

    this.players = [player1, player2];

  }

  public playGame(): void {
    R.times(() => this.playRound(), this.roundsTotal);
    const player1: IPlayer = this.players[0];
    console.log(`${player1.getName()} completed ${player1.getCircuitsCompleted()} circuits of the board`);
    const player2: IPlayer = this.players[1];
    console.log(`${player2.getName()} completed ${player2.getCircuitsCompleted()} circuits of the board`);

  };

  public getPlayers(): IPlayer[] {
    return this.players;
  };

  private playRound(): void {
    this.players.forEach((player: IPlayer) => {
      player.takeTurn();
    });
  }

}
