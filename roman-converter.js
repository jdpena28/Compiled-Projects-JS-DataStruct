const romanNumList = {M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XL: 40, X:10, IX:9, V:5, IV:4, I:1};
let roman = "";
function arabicToRoman(number){ 
    let a;
      for(let key in romanNumList){
           /* use division operator to get how many each char 
           in the object value will be store in a */
          a = Math.floor(number / romanNumList[key]); //3999/1000 = 3 
          if(a >= 0){
              for(let i = 0; i < a; i++) { // a = 3 
                roman += key; /* MMM we got 3 m here since in the
                                first loop since it is ture */
              }
            }
            // using modulo return the remaining number
          number = number % romanNumList[key];
      }
    return roman;
  }

console.log(arabicToRoman(44))