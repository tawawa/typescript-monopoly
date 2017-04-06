/**
 * Represents Monopoly Player.
 */

import {IBoard, IDice, IPiece, IPlayer, ISquare} from './interfaces';

export class Player implements IPlayer {

  private circuitsCompleted: number = 0;

  constructor(public readonly name: string, public piece: IPiece, public die: IDice[], public board: IBoard) {
  }

  public takeTurn(): void {
    console.log(`${this.name} is currently on ${this.piece.getLocation().getName()}`);
    console.log(`${this.name} is taking their turn...`);
    let rollTotal: number = 0;
    this.die.forEach((dice: IDice) => {
      dice.roll();
      rollTotal += dice.getFaceValue();
    });

    const newLoc: ISquare = this.board.getSquare(this.piece.getLocation(), rollTotal);
    const oldLocationIndex: number = this.piece.getLocation().getIndex();
    const newLocationIndex: number = newLoc.getIndex();
    this.piece.setLocation(newLoc);
    if (newLocationIndex < oldLocationIndex) {
      console.log(`${this.name} completed a circuit of the board`);
      this.circuitsCompleted += 1;
    }
    console.log(`${this.name} is moving piece ${this.piece.getPieceName()} to ${this.piece.getLocation().getName()}`);
  }

  public getLocation(): ISquare {
    return this.piece.getLocation();
  };

  public getName(): string {
    return this.name;
  }

  public getCircuitsCompleted(): number {
    return this.circuitsCompleted;
  }

}
