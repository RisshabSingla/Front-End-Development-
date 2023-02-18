


// Static methods are used to implement the functions that belong to the class as a whole and not to any particular object


class Animal {
    constructor(name) {
      this.name = Animal.capitalize(name)
    }
    walk() {
      alert("Animal " + this.name + " is walking")
    }
    static capitalize(name) {
      return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
  }
  
  j = new Animal("jack")
  j.walk()
  // console.log(j.capitalize("thisa")) // --- > this doesnt work