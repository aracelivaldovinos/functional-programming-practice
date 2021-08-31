import {romanNumeralsRecursion, romanNumeralsClosure} from './../src/js/roman-numerals';


describe('romanNumeralsRecursion', () => {
  // test('should correctly return NaN when argument is NaN', () => {
  //   expect(coinCounterRecursion("number")).toEqual("Enter a number.");
  // });
  test('should correctly return empty string when nums < 1', () => {
    expect(romanNumeralsRecursion(0)).toEqual("");
  });
  test('should correctly return roman numeral for one digit', () => {
    expect(romanNumeralsRecursion(4)).toEqual('IV');
  });
  test('should correctly return roman numeral for two digit', () => {
    expect(romanNumeralsRecursion(55)).toEqual('LV');
  });
  test('should correctly return roman numeral for three digit', () => {
    expect(romanNumeralsRecursion(616)).toEqual('DCXVI');
  });
  test('should correctly return roman numeral for three digit', () => {
    expect(romanNumeralsRecursion(3999)).toEqual('MMMCMXCIX');
  });
});

describe('romanNumeralsClosure', () => {
  test('should correctly return roman numeral for one digit', () => {
    const romanNum = romanNumeralsClosure(4);
    expect(romanNum()).toEqual('IV');
  });
});
