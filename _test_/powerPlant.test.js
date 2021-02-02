import { hydrate } from './../src/js/powerPlant.js';

describe('hydrate', () => {

  test('test empty function', () => {
    expect(hydrate()).toEqual({ soil: 0, light: 0, water: 1});
  });
});