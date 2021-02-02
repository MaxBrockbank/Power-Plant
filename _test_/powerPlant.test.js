import { changeState } from './../src/js/powerPlant.js';
import { stateControl } from './../src/js/powerPlant.js';
import { blueFood } from './../src/js/powerPlant.js';

describe('changeState', () => {
  let plant;

  beforeEach(() => {
    plant = {};
  });

  test('test empty function', () => {
    expect(changeState("water")(1)(plant)).toEqual({ water: 1});
  });
});

describe('stateControl', () => {
  let plant;

  test('test for current state', () => {
    expect(stateControl()).toEqual({"soil":5, "water":1, "light":0});
  });

  test('test for changed state', () => {
    expect(stateControl(blueFood)).toEqual({"soil":10, "water":1, "light":0});
  });
});
