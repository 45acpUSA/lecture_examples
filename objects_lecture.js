//OBJECTS LECTURE 4/18/19

//---------Structure - storing information in a varibale with sets of key: value pairs
//Objects have two things: information and behavior
//Blueprint for another thing

var obj1 = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  key4: {
    subkey1: "value4",
    subkey2: "value5",
  }
}

console.log(obj1)
console.log(obj1.key4.subkey1)


var { key1, key2, key3, key4 } = obj1
var { subkey1, subkey2 } = obj1.key4
console.log(subkey1)
