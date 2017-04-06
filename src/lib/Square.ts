/**
 * Represents Monopoly Square.
 */

import {ISquare} from './interfaces';

export class Square implements ISquare {

  protected nextSquare: ISquare;

  constructor(public readonly name: string, public index: number) {
  }

  public getName(): string {
    return this.name;
  }

  public getIndex(): number {
    return this.index;
  }

  public getNextSquare(): ISquare {
    return this.nextSquare;
  }

  public setNextSquare(nextSquare: ISquare): void {
    this.nextSquare = nextSquare;
  }

}
