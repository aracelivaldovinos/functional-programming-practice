export const coinCounterRecursion = (coins) => {
  if (isNaN(coins)) {
    return "Enter a number."; 
  }
  if (coins === 0) {
    return "";
  }
  else if ((coins)/(1/4) >= 1) {
    const quarters = Math.floor(coins/(1/4)); 
    return `Quarters: ${quarters} ` + coinCounterRecursion(Math.round(((coins - (quarters*(1/4)))*100))/100);
  }
  else if (coins/(1/10) >= 1){
    const dimes = Math.floor(coins/(1/10));
    return `Dimes: ${dimes} ` + coinCounterRecursion(Math.round(((coins - (dimes*(1/10)))*100))/100);
  }
  else if (coins/(5/100) >= 1){
    const nickels = Math.floor(coins/(5/100));
    return `Nickels: ${nickels} ` + coinCounterRecursion(Math.round(((coins - (nickels*(5/100)))*100))/100);
  }
  else if (coins/(1/100) >= 1){
    const pennies = Math.floor(coins/(1/100));
    return `Pennies: ${pennies}` + coinCounterRecursion(0);
  }
};

export const coinCounterClosure = (coins) => {
  const quarters = Math.floor((coins/(25))); 
  const dimes = Math.floor((coins-(quarters*25))/10);
  const nickels = Math.floor((coins-(quarters*25+dimes*10))/5);
  const pennies = Math.floor((coins-(quarters*25+dimes*10+nickels*5))/1);
  return () =>{
    return `${coins}, Quarters:${quarters}, Dimes:${dimes}, Nickels:${nickels}, Pennies:${pennies}`;
  };
};