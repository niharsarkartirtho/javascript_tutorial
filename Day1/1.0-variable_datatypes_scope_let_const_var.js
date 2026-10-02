// block scope , function scope and global scope

// block scope
{
  let x = 2;
}
// x can NOT be used here
//-------------------------------------------

//function scope
//Inside a function all variables declared with var, let or const have Function Scope:
//Example
function myfunction() {
  var x = 1;
  let y = 2;
  const z = 3;
}
//x can NOT be used here
//y can NOT be used here
//z can NOT be used here

//Global Scope
//Variables declared with the var always have Global Scope.
//Variables declared with the var keyword can NOT have block scope:
//Variables declared with varinside a { } block can be accessed from outside the block:
{
  var x = 2;
}
// x CAN be used here


//Variables defined with let can not be redeclared.
//Variables defined with var can b4e redeclared.
//--------------------------------------------------------------------------------------------------

//constant
//Variables defined with const cannot be Redeclared
//Variables defined with const cannot be Reassigned
//Variables defined with const have Block Scope

// when to use constant
//objects , arrays , a new function

/* 
The keyword const is a little misleading.
It does not define a constant value. It defines a constant reference to a value.
Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object

But you CAN:
Change the elements of constant array
Change the properties of constant object


But you can NOT reassign the array:
*/

//--------------------
// data types

/*
String------------- A text of characters enclosed in quotes
Number ------------	A number representing a mathematical value
Bigint -----------	A number representing a large integer
Boolean ----------	A data type representing true or false
Object -----------  A collection of key-value pairs of data
Undefined ---------	A primitive variable with no assigned value
Null --------------	A primitive value representing object absence
Symbol ------------	A unique and primitive identifier
*/