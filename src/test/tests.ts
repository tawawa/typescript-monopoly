/**
 * Tests for Monopoly Game
 */

import {expect} from 'chai';
import * as R from 'ramda';
import {Dice} from '../lib/Dice';
import {IDice} from '../lib/interfaces';

describe('Dice', () => {

  let dice: IDice;
  let allRollsBetween1and6: (iteration: number) => boolean;
  // const rollWithinRange = () => boolean;

  function rollWithinRange(): boolean {
    dice.roll();
    const value: number = dice.getFaceValue();
    return R.and(R.gte(value, 1), R.lte(value, 6));
  }

  beforeEach(() => {
    dice = new Dice();
  });

  it('should complete dice roles with values always between 1-6', () => {
    allRollsBetween1and6 = R.compose(R.all(R.equals(true)), R.times(rollWithinRange));
    expect(allRollsBetween1and6(10000)).to.be.true;
  });

});
