let marks = [1,2,3,4,5];
let letter = ["a","b","c"];

// push---add to end of an original array
marks.push(6);
console.log(marks);

// pop ---delete from end and returns value of an original array
marks.pop();
let poped = marks.pop();
console.log(poped);

//toString() --- converts array to string orginal is not changed
console.log(marks);
console.log(marks.toString());

//------------------------------------------------------------------------

// concat() --- joins arrays and return a new one orginal is not changed

let new_marks = marks.concat(letter);
console.log(new_marks);
console.log(marks,letter);

// unshift---- add to start 
marks.unshift(0);
console.log(marks);

// shift()----- delete from start and return a value
console.log(marks.shift());
console.log(marks);
//-----------------------------------------------------------------------------

// slice(startidx,endidx) return a piece of array
let value = [1,2,3,4,5];
console.log(value.slice(0,2)) // endidx is excluded

// splice(startidx, delt_count , new_element)----change original array
value.splice(3,2,6,7); //startidx is included
console.log(value); 

// delete an item
value.splice(3,1);
console.log(value); 