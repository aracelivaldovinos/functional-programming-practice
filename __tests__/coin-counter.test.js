import {coinCounterRecursion, coinCounterClosure} from './../src/js/coin-counter.js';


describe('coinCounterRecursion', () => {
  test('should correctly return NaN when argument is NaN', () => {
    expect(coinCounterRecursion("number")).toEqual("Enter a number.");
  });
  test('should correctly return empty string when coins = 0', () => {
    expect(coinCounterRecursion(0)).toEqual("");
  });
  test('should correctly return number of coins in quarters, dimes, nickels, pennies', () => {
    expect(coinCounterRecursion(4.99)).toEqual('Quarters: 19 Dimes: 2 Pennies: 4');
  });
  test('should correctly return number of coins in quarters, dimes, nickels, pennies', () => {
    expect(coinCounterRecursion(0.30)).toEqual('Quarters: 1 Nickels: 1 ');
  });

});

describe('coinCounterClosure', () => {
  test('should correctly return number of coins in quarters, dimes, nickels, pennies', () => {
    const coins = coinCounterClosure(91);
    expect(coins()).toEqual("91, Quarters:3, Dimes:1, Nickels:1, Pennies:1");
  });
});
