//Map for Roman Numerals value
const roman_numerals={
    "M":1000,
    "CM":900,
    "D":500,
    "CD":400,
    "C":100,
    "XC":90,
    "L":50,
    "XL":40,
    "X":10,
    "IX":9,
    "V":5,
    "IV":4,
    "I":1,
}
//Result, storing the converted Roman value
let result="";
function Roman_Numeral_Convertor(num){
    for(key in roman_numerals){
        const count=Math.floor(num/roman_numerals[key]);
        if(count!==0){
            result+=key.repeat(count);
        }
        num%=roman_numerals[key];
        if(num===0){
            return result;
        }
    }
    return result;
}
console.log(Roman_Numeral_Convertor(100))
