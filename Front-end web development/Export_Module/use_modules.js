// Load the module "export_modules.js"
const greetings = require("./export_modules.js");

// Use exported functions
console.log(greetings.sayHello("Baptiste")); // "Hello, Baptiste"
console.log(greetings.flatter()); // "Look how gorgeous you are today!"
console.log(greetings.sayGoodbye("Baptiste")); // Error: sayGoodbye doesn't exist

// Create an object from the User class
const johnDoe = new greetings.User("John", "Doe");
// Use the created object
console.log(johnDoe.describe());

// Create an object from the createCalc object
const calc = greetings.createCalc();
// Use the object's methods
console.log(`2 + 3 = ${calc.add(2, 3)}`); // "2 + 3 = 5"
