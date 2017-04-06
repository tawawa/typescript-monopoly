/**
 * Represents Monopoly Piece.
 */

import {PieceName} from './enums';
import {IPiece, ISquare} from './interfaces';

export class Piece implements IPiece {

  constructor(public readonly name: PieceName, public location: ISquare) {
  }

  public getPieceName(): string {
    return PieceName[this.name];
  }

  public getLocation(): ISquare {
    return this.location;
  }

  public setLocation(location: ISquare): void {
    this.location = location;
  }

}
