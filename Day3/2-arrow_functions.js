//Arrow Functions allow a shorter syntax for function expressions.
/*

(par1,par2) => {
    //work
};

*/
//You can skip the function keyword, the return keyword, and the curly brackets
// in this you will not declare anything
const mul  = x => x*x;   // arrow functions returns value by default
const multiply = (a , b) => console.log(a * b);

multiply(3,4);
//without parameter
const hello = () => "hello world";

/*
When to Use Arrow Functions:
For short functions
For callbacks and array methods
When you do not need your own this keyword

When Not to Use Arrow Functions:
As object methods
When you need your own this.name like that
When using function declarations
*/