
// we change the name to _name inorder to avoid collision problem 

// instanceof -> allows to check whether an object belongs to a certain class
// returns true if object belongs to the class or any class inherting from it 

class Animal {
    constructor(name) {
      this._name = name
    }
    fly() {
      console.log("Mai ud rha hu")
    }
    get name() {
      return this._name
    }
  
    set name(newName) {
      this._name = newName
    }
  
  }
  
  class Rabbit extends Animal {
    eatCarrot() {
      console.log("Eating carrot")
    }
  }
  
  let a = new Rabbit("Bruno")
  a.fly()
  console.log(a.name)
  a.name = "Jack"
  console.log(a.name)
  let c = 56
  
  console.log(a instanceof Animal) // true
  console.log(a instanceof Rabbit) // true
  console.log(c instanceof Animal) // false
