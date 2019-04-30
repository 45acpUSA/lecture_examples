// A review of javascript classes

// Class is a blueprint for an object
class Person {
  constructor(name='Tony Stark'){
    this.name = name
  }
}

let person = new Person("Jean Grey")
let person2 = new Person("Xavier")
let person3 = new Person()
// console.log(person);
// console.log(person2);
// console.log(person3);


// Basic inheritance: Sharing the blueprint

class Dog {
  constructor(name, age){
    this.name = name,
    this.age = age,
    this.legs = 4,
    this.ears = 'pointed'
    this.bark = 'bark!'
  }

  makeNoise() {
    console.log(this.bark)
  }
}

class Doberman(){

}

let doggo = new Dog('Fido', 4)
let doberman = new Doberman('Rusco', 5)

console.log(doggo);
console.log(doberman);

// Building on top of inheritance: Extending the blueprint (expressing variation)

// Using super()

class Beagle extends Dog {
  // Setting up the Beagle class' constructor
  constructor(name, age){
    // Runs Dog class' constructor
    super(name, age) // running the super's constructor
    // Override super's ears attribute
    this.ears = "floppy",
    this.bark = 'Ruff!'
  }

}

let dog = new Dog('Ren', 50, 4)
let beagle = new Beagle('Snoopy', 60, 4)

console.log(dog);
dog.makeNoise()
console.log(beagle);
beagle.makeNoise()


// Adding custom methods

class Pomeranian extends Dog{
  constructor(name, age, legs){
    super(name, age, legs)
    this.bark = 'yip'
  }

  shiver(){
    console.log('shivering')
  }
}

let pom = new Pomeranian('Fluffy', 3, 4)
console.log(pom);
pom.makeNoise()
pom.shiver()
