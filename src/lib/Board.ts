/**
 * Represents Monopoly Board.
 */

import {IBoard, ISquare} from './interfaces';
import {Square} from './Square';

export class Board implements IBoard {

  private squares: ISquare[];

  public init(): void {
    console.log('Setting up Monopoly Board');
    this.squares = [];
    this.buildSquares();
    this.linkSquares();
  }

  public getSquare(start: ISquare, distance: number): ISquare {
    const endIndex: number = (start.getIndex() + distance) % 40;
    return this.squares[endIndex];
  }

  public getStartSquare(): ISquare {
    return this.squares[0];
  }

  protected buildSquares(): void {
    for (let i: number = 0; i < 40; i++) {
      this.build(i);
    }
  }

  protected linkSquares(): void {
    for (let i: number = 0; i < this.squares.length - 1; i++) {
      this.link(i);
    }
    const first: ISquare = this.squares[0];
    const last: ISquare = this.squares[this.squares.length - 1];
    last.setNextSquare(first);
  }

  private build(i: number): void {
    const square: ISquare = new Square(`Square ${i + 1}`, i);
    this.squares[i] = square;
  }

  private link(i: number): void {
    const current: ISquare = this.squares[i];
    const next: ISquare = this.squares[i + 1];
    current.setNextSquare(next);
  }

}
