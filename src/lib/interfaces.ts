/**
 * Represents Monopoly Interfaces.
 */

import {PieceName} from './enums';

interface IMonopolyGame {
  playGame: () => void;
  getPlayers: () => IPlayer[];
}

interface IDice {
  roll(): void;
  getFaceValue(): number;
}

interface IBoard {
  init(): void;
  getSquare(start: ISquare, distance: number): ISquare;
  getStartSquare(): ISquare;
}

interface ISquare {
  name: string;
  index: number;
  getName: () => string;
  getIndex: () => number;
  getNextSquare: () => ISquare;
  setNextSquare: (nextSquare: ISquare) => void;
}

interface IPiece {
  name: PieceName;
  location: ISquare;
  getPieceName: () => string;
  getLocation: () => ISquare;
  setLocation: (location: ISquare) => void;
}

interface IPlayer {
  name: string;
  piece: IPiece;
  board: IBoard;
  die: IDice[];
  takeTurn: () => void;
  getName: () => string;
  getLocation: () => ISquare;
  getCircuitsCompleted: () => number;
}

export {IMonopolyGame, IDice, IBoard, ISquare, IPiece, IPlayer};
