// ==========================================
// FILE: main.js (Importer)
// ==========================================

// Import specific items by their exact names inside { }
import { PI, add, subtract } from "./mathUtils.js";

console.log(add(5, 3)); // Output: 8
console.log(PI);       // Output: 3.14159

// --- Advanced Import Variations ---

// 1. Renaming imports with 'as' (prevents name collisions)
import { multiply as mult } from "./mathUtils.js";
console.log(mult(4, 2)); // Output: 8

// 2. Importing everything as a single namespace object
import * as MathOps from "./mathUtils.js";
console.log(MathOps.subtract(10, 4)); // Output: 6


// Import default exports WITHOUT curly braces { }.
// You can name the imported value anything you like.
import Person from "./User.js"; 

const user1 = new Person("Alice", 25);
user1.printDetails(); // Output: Alice is 25 years old.