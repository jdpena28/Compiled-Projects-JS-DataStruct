/* Return true if the given string is palindrome otherwise return false
Palindrome - is a word/sentence that's spelled the same way even it is backward.
Test Case: 
    - Remove all non-alpha numeric characters
    - Remove spaces
    - For better result apply toUpperCase or toLowerCase in Comparing
Pass Strings 'racecar','raceCar','race CAR','2A3*3a2','2_A3*3#A2' */
const palindromeChecker = (words) => {
    let booleans = []
    let regexWords = words.toLowerCase().replace(/[^a-z0-9]/gi,'')
    for(let i = 0; i < words.length;i++) {
        if (regexWords[i]===regexWords[regexWords.length-(i+1)]) {
            booleans[i] = true
        }
        else {
            booleans[i] = false
        }
    }
    return booleans.every(booleans=>booleans===true)
}
console.log(palindromeChecker('2A3*3a2'))
console.log(palindromeChecker('raceCar'))
console.log(palindromeChecker('2_A3*3#A2'))
console.log(palindromeChecker('false'))


