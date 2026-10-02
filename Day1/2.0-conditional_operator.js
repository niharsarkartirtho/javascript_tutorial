// if else if else and switch case are just like basic cpp
// Nullish coalescing (??) uses the fallback only for null or undefined.
const userName = null;
const displayName = userName ?? "Guest";
console.log("Display name:", displayName);

// Unlike ||, ?? keeps other falsy values such as 0 and an empty string.
const itemCount = 0;
console.log("Item count:", itemCount ?? 10); // 0
console.log("With || instead:", itemCount || 10); // 10

// The conditional (ternary) operator chooses a value based on a condition.
const age = 20;
const accessMessage = age >= 18 ? "Access granted" : "Access denied";
console.log(accessMessage);

// Ternary form: condition ? valueWhenTrue : valueWhenFalse
