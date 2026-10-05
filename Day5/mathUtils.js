// ==========================================
// FILE: mathUtils.js (Exporter)
// ==========================================

// 1. Direct export when declaring variables or functions
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

// 2. Exporting existing variables together at the end
export { subtract, multiply };

// ==========================================
// FILE: User.js (Exporter)
// ==========================================



// for default export
// Each file can have only one default export.
export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printDetails() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}