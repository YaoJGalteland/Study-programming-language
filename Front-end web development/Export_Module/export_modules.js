// Create three functions
const sayHello = name => `Hello, ${name}`;
const flatter = () => `Look how gorgeous you are today!`;
const sayGoodbye = name => `Goodbye, ${name}`;
// Export three functions
module.exports.sayHello = sayHello;
module.exports.flatter = flatter;
module.exports.sayGoodbye = sayGoodbye;


// Create an object 
const createCalc = () => {
  // The returned object has 4 methods
  return {
    add(x, y) {
      return x + y;
    },
    substract(x, y) {
      return x - y;
    },
    multiply(x, y) {
      return x * y;
    },
    divide(x, y) {
      return x / y;
    }
  };
};
// Export the object
module.exports.createCalc = createCalc;


// Create a class 
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // Create user login by combining first letter of first name + last name
    this.login = (firstName[0] + lastName).toLowerCase();
  }
  describe() {
    return `${this.firstName} ${this.lastName} (login: ${this.login})`;
  }
};
// Export a User class
module.exports.User = User;