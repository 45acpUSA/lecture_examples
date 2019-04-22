//use map or filter to return a new array with values multiplied by 3.
// var arr = [5, 3, 2, 9, 8]
//
// for(let i=0; i < arr.length; i++){
//     console.log(arr[i] * 3);
// }


// var arr1 = [5, 3, 2, 9, 8]
// let newArr = arr1.map(value => value * 3)


// var arr1 = [5, 3, 2, 9, 8]
// var arr2 = [15, 3, 10, 17, 5]
//
// mult3 = (arr) => {
//     return arr.map(value => value * 3)
// }
//
// console.log("original", arr1);
// console.log("new", mult3(arr1));
// console.log("new", mult3(arr2))
//
//
// OLD WAY
// function mult3(array){
//     let newArr = []
//     for(let i = 0; i < array.length; i++){
//         newArr.push(array[i] * 3)
//     }
//     return newArr
// }





//write an arrow function that takes in any array and returns a new array that identifies whether the numbers are even or odd.
// var testArr = [3, 7, 2, 5, 10, 13, 15]

//expected output [ 'odd', 'odd', 'even', 'odd', 'even', 'odd', 'odd' ]

// const oddEven = (array) => {
//     let newArr = array.map(value => {
//         if(value % 2 === 0){
//             return "even"
//         } else {
//             return "odd"
//         }
//     })
//     return newArr
// }

// console.log(oddEven(testArr));


// var testArr = [3, 7, 2, 5, 10, 13, 15]
//
// oddEven = (array) => {
//     return newArr = array.map(value => value % 2 === 0 ? "even" : "odd")
// }
//
// // console.log(oddEven(testArr));
// // declare a variable to hold the return from a function
// const oddEvenArr = oddEven(testArr)
//
// console.log(oddEvenArr);






// const oddEven = (array) => {
//     let newArr = array.map(value => {
//         if(value % 2 === 0){
//             return "even"
//         } else {
//             return "odd"
//         }
//     })
//     return newArr
// }
//
// console.log(oddEven(testArr));



//write an arrow function that takes in an array and returns only the odd numbers (do we use map or filter?  why?

// var testArr = [3, 7, 2, 5, 10, 13, 15]
// //
// const oddNum = (array) => {
//     return newArr = array.filter(v => v % 2 != 0)
// }
// //
// console.log(oddNum(testArr));






//write an arrow function that takes in any array and returns a new array with only the numbers at the even indexes. (do we use map or filter? why?)

var testArr = [3, 7, 2, 5, 10, 13, 15]
// expected output = [3, 2, 10, 15]

const evenIndex = (array) => {
    let newArr = array.filter((value, index) => {
        return index % 2 === 0
    })
    return newArr
}
//
console.log(evenIndex(testArr));






// const oddEven = (array) => {
//     let newArr = array.map(function(value) {
//         if(value % 2 === 0){
//          return "even"
//         } else {
//          return "odd"
//         }
//     })
//     return newArr
// }
//
// console.log(oddEven(testArr));

// const evenIndex = (array) => {
//     let newArr = array.filter((value, index) => {
//         if (index % 2 !== 0){
//             return value
//         }
//     })
//     return newArr
// }
//
// console.log(evenIndex(testArr));
