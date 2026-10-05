//synchornus programming
//JavaScript is fundamentally a single-threaded,
// synchronous language, meaning it executes code line-by-line in a sequential order. 
// However, to prevent time-consuming tasks (like fetching data or waiting for a timer) from freezing the entire program,
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

/*
Asynchronous programming allows JavaScript to
 hand off a long-running task to the runtime environment 
 (like the browser or Node.js) 
 and continue executing the rest of the script immediately. When the background task finishes, its result is processed.
 */
console.log("start");
setTimeout(() => {
    console.log("middle");
},2000); // executes after 2 second
console.log("finish");