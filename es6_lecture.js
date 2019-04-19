//ES6 SYNTAX LECTURE 4/18/19

//----------------ES6 or ECMAScript 2015
//European Computer Manufacturers Association Script, the 6th version


//`const` is a variable that will not be reassigned
//`let` is a variable available to the block-scope, such as inside a loop

//------------------Spread Syntax

//copy array - we can use mutators without changing the original array
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
var arr2 = [...arr1, 7, 8, 9]
arr2.push(10, 11)

console.log("1", arr1, "2", arr2)


//passes a dynamic number of arguments

function getWord(...letters){
  return letters.join("")
}
console.log(getWord("H", "i", " ", "t", "h", "e", "r", "e", " ", "B", "r", "a", "v", "o", " ", "C", "l", "a", "s", "s", "!"))


//-------arrow functions (fat arrow functions)

 {
  return "Hello, " + name
}
console.log(greeter("Sarah"))


//curly braces can be omitted if there is no code block

greeter = (name) => "Hello, " + name


//String Interpolation, wrapped in backticks

greeter = (name) => `Hello, ${name}!`
