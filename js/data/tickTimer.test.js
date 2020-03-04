import {should} from 'chai';
import tickTimer from './tickTimer';
import {INITIAL_STATE} from '../constants';

should();

describe(`tickTimer`, () => {
  it(`icrease timer if time more then null`, () => {
    tickTimer(initialState)
      .should.has.property(`timer`)
      .equal(29);
      .should.equal(29);
  });

  it(`return false if time less then null`, () => {
    tickTimer(Object.assign({}, INITIAL_STATE, {timer: 0})).should.equal(false);
  });
});
