import UnitObject from '../src/js/unitObject.js';


describe('UnitObject', () =>  {

  let player1;
  
  beforeEach(() => {
    player1 = new UnitObject(10, 5)
  });

  test('should correctly build a basic player object with given values',() => {
    expect(player1.health).toEqual(10);
    expect(player1.damage).toEqual(5);
  });
});