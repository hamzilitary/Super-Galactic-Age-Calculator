import { Age } from './../src/super-galactic-calculator.js';

describe('Age', function() {
  it('should convert years to days', function() {
    let years = new Age(10);
    expect(years.intoDays()).toEqual(3650);
  });

  it('should convert earth to mercury', function() {
    let earthYears = new Age(10);
    expect(earthYears.intoMercury()).toEqual(41.66666666666667);
  });
  it('should convert earth to venus', function (){
    let earthYears = new Age(10);
    expect(earthYears.intoVenus()).toEqual(16.129032258064516);
  });
});
