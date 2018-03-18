import { Age } from './../src/super-galactic-calculator.js';

describe('Age', function() {
  it('should convert years to days', function() {
    let years = new Age(10);
    expect(years.intoDays()).toEqual(3650);
  });
});
