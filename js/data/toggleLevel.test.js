import toggleLevel from './toggleLevel';
import {AnswerTypes, INITIAL_STATE} from '../constants';
import {expect} from 'chai';

describe(`toggleLevel`, () => {
  it(`increase level if lives > 0`, () => {
    expect(toggleLevel(AnswerTypes.NORMAL, INITIAL_STATE)).to.be.deep.equal({
      level: 2,
      lives: 3,
      timer: 30
    });
  });

  it(`return false if lives < 0`, () => {
    expect(
        toggleLevel(
            AnswerTypes.NORMAL,
            Object.assign({}, INITIAL_STATE, {lives: -1})
        )
    ).to.be.equal(false);
  });

  it(`return false if level more then  10`, () => {
    expect(
        toggleLevel(
            AnswerTypes.NORMAL,
            Object.assign({}, INITIAL_STATE, {level: 10})
        )
    ).to.be.equal(false);
  });

  it(`decrease lives if answer is wrong`, () => {
    expect(toggleLevel(AnswerTypes.WRONG, INITIAL_STATE)).to.be.deep.equal({
      level: 2,
      lives: 2,
      timer: 30
    });
  });
});
