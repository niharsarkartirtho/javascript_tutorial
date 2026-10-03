// forEach
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => {
  console.log(fruit);
});

//upper code work like this
const numbers = [10, 20, 30];
//Syntax & Parameters
//The forEach() method can accept up to three arguments inside its callback function
numbers.forEach((element, index, arr) => {
  console.log(`Index ${index}: ${element} (from total array of ${arr.length} items)`);
});

// array map
/*
map() method cretes a new array by performing a function on each element
method does not execute the function for array elements without values.
method does not change the original array.
*/
let num1 = [1,2,3,4,5];

let num2 = num1.map(multiply_by_2);

function multiply_by_2(value,index,array){  // theese are by default
    return value * 2;
}
console.log(num2);

//The filter() method creates a new array with array elements that pass a test.
let over4 = num1.filter(over_four);
console.log(over4);

function over_four(value,index,array){
    return value > 4;
}
// shortcut using array function
console.log(num1.filter(value => value > 4));


/*
JavaScript Array reduce()
The reduce() method runs a function on each array element to produce a single value.
The reduce() method works from left-to-right in the array. See also reduceRight().
The reduce() method does not reduce the original array.
*/
let num = [45, 4, 9, 16, 25];
let sum = num.reduce(myFunction);

function myFunction(total, value, index, array) { // here total is called accumulator bby default its first value
  return total + value;
}

//The reduce() method can accept an initial value:
let sum2 = num.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}

//JavaScript Array every()
//The every() method checks if all array values pass a test.
//The some() method checks if some array values pass a test.
//const numbers = [10, 20, 30];

let allOver18 = numbers.every(myFunction);
let someOver18 = numbers.some(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
console.log(allOver18,someOver18);

//the Array with() method as a safe way to 
//update elements in an array without altering the original array.
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");

// spread ...
//The ... operator expands an array into individual elements.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

//Array Rest (...)
//The rest operator (...) allows us
// to destruct an array and collect the leftovers:
let a, b, rest;
const arr4 = [1,2,3,4,5,6,7,8];

[a, ...rest] = arr4;
[a, b, ...rest] = arr4; //rest here is just an variable mean bakigula