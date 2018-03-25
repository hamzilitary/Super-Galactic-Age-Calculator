import { Age } from './../src/super-galactic-calculator.js';
// import { Birthdate } from './../src/super-galactic-calculator.js';

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
  it('should return surpassed years on each planet for Smoker', function() {
    let earthYears = new Age(84);
    expect(earthYears.yearsLeftNonSmoker()).toEqual([12.5, 4.838709677419355, 1.595744680851064, 0.25295109612141653]);
  });
  it('should return surpassed years on each planet for NonSmoker', function() {
    let earthYears = new Age(84);
    expect(earthYears.yearsLeftSmoker()).toEqual([33.333333333333336, 12.903225806451614, 4.25531914893617, 0.6745362563237775]);
  });
  
    it('should compare two different dates and determine the difference, in seconds', function() {
      let birthDate = new Age("03/16/2017");
      expect(birthDate.dateDifference()).toEqual(31536000);
    });


});
