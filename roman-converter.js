let roman = ''
function convertToRoman(num) {
    while(num !== 0) {
        if (num >= 1000) {
            roman += 'M'
            num -= 1000
        } else if (num >= 999) {
            roman += 'C'
            num -= 900
        } else if (num >= 500) {
            roman += 'D'
            num -= 500
        } else if (num >= 499) {
            roman += 'C'
            num -= 400
        } else if (num >= 100) {
            roman += 'C'
            num -= 100
        } else if (num >= 99) {
            roman += 'X'
            num -= 90
        } else if (num >= 50) {
            roman += 'L'
            num -= 50
        } else if (num >= 49) {
            roman += 'X'
            num -= 40
        } else if (num >= 10) {
            roman += 'X'
            num -= 10
        } else if (num >= 9) {
            roman += 'I'
            num -= 1
        } else if (num >= 5) {
            roman += 'V'
            num -= 5
        } else if (num >= 4) {
            roman += 'I'
            num -= 1
        } else {
            roman += 'I'
            num -= 1
        }
    }
    return roman
}
   
console.log(convertToRoman(1200)) //DCCCXCI
console.log(convertToRoman(3999)) //MMMCMXCIX
