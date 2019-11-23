import calculatePoints from './calculatePoints';
import {AnswerTypes} from '../constants';
import {should} from 'chai';

should();

describe(`count-score function`, () => {
  const wrongAnswer = {type: AnswerTypes.WRONG};
  const normalAnswer = {type: AnswerTypes.NORMAL};
  const fastAnswer = {type: AnswerTypes.FAST};
  const slowAnswer = {type: AnswerTypes.SLOW};
  const nullLives = 0;
  const oneLive = 1;
  const twoLives = 2;

  it(`return correct result for every correct answer`, () => {
    calculatePoints([normalAnswer], nullLives).should.equal(100);
    calculatePoints([fastAnswer], nullLives).should.equal(150);
    calculatePoints([slowAnswer], nullLives).should.equal(50);
    calculatePoints([wrongAnswer], nullLives).should.equal(0);
  });

  it(`return correct result for every live`, () => {
    calculatePoints([normalAnswer], nullLives).should.equal(100);
    calculatePoints([fastAnswer], oneLive).should.equal(200);
    calculatePoints([slowAnswer], twoLives).should.equal(150);
  });
});
