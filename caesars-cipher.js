//Shift letters +13 by their position not including the original position of
// the character
let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let cipher = ''
function rot13(str) {
    // convert the word to array to get each piece of char
    let regexWords = Array.from(str.replace(/[^a-zA-Z0-9 ?!.,]/gi,'').toUpperCase())
    // for each char in the word contained in the 'element'
    regexWords.forEach((element,index) => {
     alphabet.find((value) => {
        if(element === value) {
          return cipher += alphabet[index+13]
        } 
      })
      return cipher;
    });
    
  }
  
  console.log(rot13("abc ABC abc"))
/*   console.log(rot13('hey!+-pasdIamjohn. Yes thats is my name>?.')) */