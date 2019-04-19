//FUNCTIONS, LOOPS, AND ARRAYS 4/18/19

//-----Putting it all together:

//Create a function that takes in an array and returns a NEW array with all numbers multiplied by 2.

var testArr = [5, 6, 3, 4, 15]

function timesTwo(arr){
  var newArr = []
  for(let i=0; i<arr.length; i++){
    newArr.push(arr[i]*2)
  }
  return newArr
}
console.log(timesTwo(testArr))


//Create a function that takes in a word (string) and returns the word with the first letter capitalized.
var cohort = "bravo"
function capLetter(word){
  var newWord = word.charAt(2).toUpperCase() + word.substring(3)
  return newWord
}
console.log(capLetter(cohort))
