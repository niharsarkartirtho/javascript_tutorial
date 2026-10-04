// ============================================================================
// OBJECT-ORIENTED PROGRAMMING (OOP) IN JAVASCRIPT
// ============================================================================

// ----------------------------------------------------------------------------
// 1. OBJECT LITERALS & BASIC PROPERTIES
// ----------------------------------------------------------------------------
// An object is a collection of key-value pairs representing state and behavior.

const person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 28,

  // Method (behavior)
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Method with parameter
  greet(targetName) {
    return `Hello ${targetName}, my name is ${this.getFullName()}.`;
  }
};

console.log(person.getFullName()); // "Jane Doe"
console.log(person.greet("Alice")); // "Hello Alice, my name is Jane Doe."


// ----------------------------------------------------------------------------
// 2. CLASSES & CONSTRUCTOR FUNCTIONS (ES6+)
// ----------------------------------------------------------------------------
// Classes are blueprints for creating objects with shared properties and methods.

class Character {
  // Public field declaration
  type = "Generic Character";

  // Constructor runs automatically when `new Character(...)` is called
  constructor(name, healthPoints) {
    this.name = name;
    this.healthPoints = healthPoints;
  }

  // Instance method
  takeDamage(amount) {
    this.healthPoints = Math.max(0, this.healthPoints - amount);
    return `${this.name} took ${amount} damage. Remaining HP: ${this.healthPoints}`;
  }

  // Static method (belongs to the class itself, not instances)
  static compareHealth(charA, charB) {
    if (charA.healthPoints > charB.healthPoints) {
      return `${charA.name} has more health than ${charB.name}.`;
    }
    return `${charB.name} has more health than ${charA.name}.`;
  }
}

const hero = new Character("Arthur", 100);
console.log(hero.takeDamage(20)); // "Arthur took 20 damage. Remaining HP: 80"


// ============================================================================
// THE 4 MAIN OOP PRINCIPLES
// ============================================================================

// ----------------------------------------------------------------------------
// PRINCIPLE 1: ENCAPSULATION
// ----------------------------------------------------------------------------
// Bundling data and methods into a single unit and restricting direct access
// to internal state using private fields (# prefix in modern JS).

class BankAccount {
  // Private fields (accessible ONLY inside this class body)
  #balance;
  #accountHolder;

  constructor(accountHolder, initialBalance) {
    this.#accountHolder = accountHolder;
    this.#balance = initialBalance;
  }

  // Getter (read-only access to specific internal data)
  get balance() {
    return this.#balance;
  }

  // Method to safely mutate private state with validation
  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive.");
    }
    this.#balance += amount;
    return `Deposited $${amount}. New balance: $${this.#balance}`;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      return "Insufficient funds.";
    }
    this.#balance -= amount;
    return `Withdrew $${amount}. Remaining balance: $${this.#balance}`;
  }
}

const myAccount = new BankAccount("Alex", 500);
console.log(myAccount.balance); // 500 (accessed via getter)
console.log(myAccount.deposit(150)); // "Deposited $150. New balance: $650"
// console.log(myAccount.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class


// ----------------------------------------------------------------------------
// PRINCIPLE 2: INHERITANCE
// ----------------------------------------------------------------------------
// Allows a class (child) to inherit properties and methods from another class (parent)
// using the `extends` keyword and `super()` call.

class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  accelerate(increment) {
    this.speed += increment;
    return `${this.brand} is now traveling at ${this.speed} km/h.`;
  }
}

// Child class inheriting from Vehicle
class ElectricCar extends Vehicle {
  constructor(brand, speed, batteryCapacity) {
    // `super` calls the parent class constructor
    super(brand, speed);
    this.batteryCapacity = batteryCapacity; // kWh
  }

  charge() {
    return `${this.brand} is charging its ${this.batteryCapacity} kWh battery.`;
  }
}

const myTesla = new ElectricCar("Tesla", 60, 75);
console.log(myTesla.accelerate(20)); // "Tesla is now traveling at 80 km/h." (inherited)
console.log(myTesla.charge());     // "Tesla is charging its 75 kWh battery." (own method)


// ----------------------------------------------------------------------------
// PRINCIPLE 3: POLYMORPHISM
// ----------------------------------------------------------------------------
// The ability for different classes to implement the same method interface
// with unique behaviors (method overriding).

class Animal {
  constructor(name) {
    this.name = name;
  }

  // Generic method meant to be overridden
  makeSound() {
    return `${this.name} makes a generic animal sound.`;
  }
}

class Dog extends Animal {
  makeSound() {
    return `${this.name} barks: Woof woof!`;
  }
}

class Cat extends Animal {
  makeSound() {
    return `${this.name} meows: Meow meow!`;
  }
}

// Polymorphic behavior: processing distinct object types via a uniform interface
const zoo = [new Dog("Rex"), new Cat("Whiskers"), new Animal("Unknown")];

zoo.forEach((animal) => {
  console.log(animal.makeSound());
});
// "Rex barks: Woof woof!"
// "Whiskers meows: Meow meow!"
// "Unknown makes a generic animal sound."


// ----------------------------------------------------------------------------
// PRINCIPLE 4: ABSTRACTION
// ----------------------------------------------------------------------------
// Hiding complex execution logic and showing only the essential features to the user.

class SmartCoffeeMachine {
  #waterAmount = 0;

  fillWaterTank(amount) {
    this.#waterAmount += amount;
  }

  // Low-level internal methods (hidden implementation details)
  #boilWater() {
    return "Boiling water...";
  }

  #grindBeans() {
    return "Grinding coffee beans...";
  }

  #brew() {
    return "Extracting espresso shot...";
  }

  // Public Interface: Simple, single method that encapsulates complex steps
  makeCoffee() {
    if (this.#waterAmount < 100) {
      return "Error: Not enough water. Please refill.";
    }

    const steps = [
      this.#boilWater(),
      this.#grindBeans(),
      this.#brew()
    ];

    this.#waterAmount -= 100;
    return `Coffee Ready! Steps completed:\n - ${steps.join("\n - ")}`;
  }
}

const machine = new SmartCoffeeMachine();
machine.fillWaterTank(200);
console.log(machine.makeCoffee()); 
// Hides all boiling/grinding/brewing internals behind one `.makeCoffee()` call 