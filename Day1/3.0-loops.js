// 1. for: use when you know how many times to repeat.
for (let count = 1; count <= 3; count++) {
	console.log("for:", count);
}

// 2. while: checks the condition before each repetition.
let whileCount = 1;
while (whileCount <= 3) {
	console.log("while:", whileCount);
	whileCount++;
}

// 3. do...while: always runs at least once, then checks the condition.
let doCount = 1;
do {
	console.log("do...while:", doCount);
	doCount++;
} while (doCount <= 3);

// 4. for...of: visits values in an iterable, such as an array or string.
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
	console.log("for...of:", fruit);
}

// 5. for...in: visits enumerable property names on an object.
const person = { name: "Ada", age: 36 };
for (const key in person) {
	console.log("for...in:", key, person[key]);
}

// Use for...of rather than for...in when you want array values.

// break exits a loop; continue skips to its next repetition.
for (let number = 1; number <= 5; number++) {
	if (number === 2) continue;
	if (number === 5) break;
	console.log("break/continue:", number);
}

// A label lets break exit an outer loop from inside a nested loop.
outerLoop: for (let row = 1; row <= 3; row++) {
	for (let column = 1; column <= 3; column++) {
		if (row === 2 && column === 2) break outerLoop;
		console.log("nested:", row, column);
	}
}

// for await...of reads values from an async iterable.
async function* getAsyncNumbers() {
	yield 1;
	await Promise.resolve();
	yield 2;
}

async function showAsyncLoop() {
	for await (const number of getAsyncNumbers()) {
		console.log("for await...of:", number);
	}
}

showAsyncLoop();

// Common array methods also iterate, but they are methods, not loop statements.
fruits.forEach((fruit) => console.log("forEach:", fruit));
const upperCaseFruits = fruits.map((fruit) => fruit.toUpperCase());
const longFruits = fruits.filter((fruit) => fruit.length > 5);
const fruitList = fruits.reduce((list, fruit) => `${list}, ${fruit}`);
console.log("map:", upperCaseFruits);
console.log("filter:", longFruits);
console.log("reduce:", fruitList);
