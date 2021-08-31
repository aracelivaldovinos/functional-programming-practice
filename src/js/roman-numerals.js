export const romanNumeralsRecursion = (nums) => {
  const englishToRoman = [
    {english: 1000, roman: 'M'},
    {english: 900, roman: 'CM'},
    {english: 500, roman: 'D'},
    {english: 400, roman: 'CD'},
    {english: 100, roman: 'C'},
    {english: 90, roman: 'XC'},
    {english: 50, roman: 'L'},
    {english: 40, roman: 'XL'},
    {english: 10, roman: 'X'},
    {english: 9, roman: 'IX'},
    {english: 5, roman: 'V'},
    {english: 4, roman: 'IV'},
    {english: 1, roman: 'I'}
  ];

  for (let i = 0; i < englishToRoman.length; i++) {
    if (nums < 1) {
      return "";
    } else if (nums >= englishToRoman[i].english) {
      return englishToRoman[i].roman + romanNumeralsRecursion(nums - englishToRoman[i].english);
    }
  }
};



export const romanNumeralsClosure = (nums) =>{
  const thousands = [
    {english: 3, roman: 'MMM'},
    {english: 2, roman: 'MM'},
    {english: 1, roman: 'M'}
  ];

  const hundreds = [
    {english: 9, roman: 'CM'},
    {english: 8, roman: 'DCCC'},
    {english: 7, roman: 'DCC'},
    {english: 6, roman: 'DC'},
    {english: 5, roman: 'D'},
    {english: 4, roman: 'CD'},
    {english: 3, roman: 'CCC'},
    {english: 2, roman: 'CC'},
    {english: 1, roman: 'C'}
  ];

  const tens = [
    {english: 9, roman: 'XC'},
    {english: 8, roman: 'LXXX'},
    {english: 7, roman: 'LXX'},
    {english: 6, roman: 'LX'},
    {english: 5, roman: 'L'},
    {english: 4, roman: 'XL'},
    {english: 3, roman: 'XXX'},
    {english: 2, roman: 'XX'},
    {english: 1, roman: 'X'}
  ];

  const ones = [
    {english: 9, roman: 'IX'},
    {english: 8, roman: 'VIII'},
    {english: 7, roman: 'VII'},
    {english: 6, roman: 'VI'},
    {english: 5, roman: 'V'},
    {english: 4, roman: 'IV'},
    {english: 3, roman: 'III'},
    {english: 2, roman: 'II'},
    {english: 1, roman: 'I'}
  ]; 

  const numArray = Array.from(String(nums), Number);
  const array = [];
  
  return () => {
    if (numArray.length === 4){
      for (let i=0; i < thousands.length; i++){
        if(numArray[0] === thousands[i].english){
          console.log(thousands[i.roman])
          array.push(thousands[i].roman);
        }
      }
    }
    if (numArray.length >= 3){
      for (let i=0; i < hundreds.length; i++){
        if(numArray[1] === hundreds[i].english){
          array.push(hundreds[i].roman);
        }
      }
    }
    if (numArray.length >= 2){
      for (let i=0; i < tens.length; i++){
        if(numArray[2] === tens[i].english){
          array.push(tens[i].roman);
        }
      }
    }
    if (numArray.length >= 1){
      for (let i=0; i < ones.length; i++){
        if(numArray[1] === ones[i].english){
          array.push(ones[i].roman);
        }
      }
    }
    return array;  
  };
};




