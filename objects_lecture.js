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



///An object has properties (physical, color, size) and has behavior (actions). Object is the intersection of property and behavior. Encapsulate those properties and behaviors. Object has a collection of different values that can be passed. It is a way to organize data.Object has attributes that are key: value pairs.

//As a developer we communicate ideas. Uncle Bob: as a developer, it is more important to write code that communicates what we are trying to do than to write unreadable code that does something.

//Objects are a great way to do that. They are more descriptive of the intended outcome of our code.

//Problems in computer science: cashing and naming

var person = {
  name: "Alex Keaton",
  phone: 123456789,
  getData: function() { return this.name+"-"+this.phone }
}

//console.log(person.getData())

//this - a keyword in JS, the scope of the object, more important when we talk about classes, 'this' is the instance of the class
//classes are part of the es6 update, classes are like a recipe (you don't eat a recipe)
//a class is a container for data and properties

//capitalize the first letter of the class name
class Student{
  constructor(name, timeOfDay){
    this.name = name,
    this.timeOfDay = timeOfDay
  }

  description(){
    `${this.name} likes ${this.timeOfDay}.`
  }

  addStudent(student){
    this.student.push(student)
  }

  listStudent(){
    for(let i=0; i<this.students.length; i++){
      console.log(this.student[i].description())
    }
  }
}

const sarah = new Student('Sarah Proctor', 'bedtime')
const erik = new Student('Erik Engstrom', 'happy hour')



console.log(`${sarah.name} really likes ${sarah.timeOfDay}.`)

const fam = new Student()
fam.addStudent(sarah)
fam.addStudent(erik)
fam.listStudent()
