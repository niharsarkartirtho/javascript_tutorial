//call back functions

//foreach with call backs
let arr = [1,2,4,5];
arr.forEach(function print_val(val){
    console.log(val);
});

//-------------------------------------------------------------------

// 1.callbacks--- This is the task we want done LATER.
// a fucntion can be a parameter in other function
// It is our "Callback Function".
function sayHello(name) {
    console.log("Hello, " + name + "!");
}

// 2. This is the master function. It accepts another function as a tool.
// 'task' is just a placeholder name for whatever function we pass in.
function robot(userName, task) {
    console.log("Robot is waking up...");
    
    // The robot now executes the task we gave it
    task(userName); 
}

// 3. We run the robot. 
// We pass the 'sayHello' function into it as a piece of data.
robot("Alice", sayHello);


// foreach callbacks arrow function
arr.forEach((val) => {
    console.log(val);
});

arr.forEach((val,idx,arr) => {
    console.log(val , idx , arr.length);
});

// time and callbacks
// Call a Timeout
function myDisplayer(value) {
    console.log(value);
}
function myFunction() {
    myDisplayer("Hello!");
}
setTimeout(myFunction, 3000);

// shortcut
setTimeout(() => {
    console.log("hello");
}, 3000);

//The callback function is called repeatedly with (at least) the specified delay in between.
let count = 0;
const newinterval = setInterval(() => {
    console.log("interval");
    count++;
    if(count == 5){
        clearInterval(newinterval);
    }
},1000);