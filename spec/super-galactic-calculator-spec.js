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
  it('should convert earth to mars', function(){
    let earthYears = new Age(10);
    expect(earthYears.intoMars()).toEqual(5.319148936170213);
  });
  it('should convert earth to jupiter', function(){
    let earthYears = new Age(20);
    expect(earthYears.intoJupiter()).toEqual(1.6863406408094437);
  });
  it('should return the life expectancy on each planet for Smoker', function(){
    let earthYears = new Age(45);
    expect(earthYears.yearsLeftSmoker()).toEqual([129.16666666666669, 50, 16.48936170212766, 2.6138279932546378]);

  });
  it('should return the life expectancy on each planet for NonSmoker', function(){
    let earthYears = new Age(45);
    expect(earthYears.yearsLeftNonSmoker()).toEqual([150, 58.064516129032256, 19.148936170212767, 3.0354131534569984]);
  });
});
