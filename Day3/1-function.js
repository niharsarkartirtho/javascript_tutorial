// function
function hello(name){
    return "hello "  + name;
}
let msg = hello("tirtho"); //argument pass
console.log(msg);

//calling vs referencing a function
let fnc = hello;
console.log(fnc);
console.log(fnc("nihar"));

//create one function to sumall example

function sumall(){
    let sum = 0 ;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(sumall(1,2,3,4,5));

//Function Rest Parameter
//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
function summ(...num){ 
    let sum = 0;
    for(let arg of num){
        sum += arg;
    }
    return sum;
}
console.log(summ(1,2,3,4,5));

/*
Arguments are Passed by Value
The parameters, in a function call, are the function's arguments.
JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.
If a function changes an argument's value, it does not change the parameter's original value.
Changes to arguments are not visible (reflected) outside the function.

Objects are Passed by Reference
In JavaScript, object references are values.
Because of this, objects will behave like they are passed by reference:
If a function changes an object property, it changes the original value.
Changes to object properties are visible (reflected) outside the function.
*/


// fucntion expression
/*Function expressions are commonly used to create anonymous functions.
The function above is actually function without a name.
Functions stored in variables do not need names.
The variable name is used to call the function.
calling function before declaration is forbidden here
*/
const multiply = function (num1 , num2){
    return num1 * num2;
}; //usually ends with semicolon

console.log(multiply(5,5));