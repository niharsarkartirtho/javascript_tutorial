// Its an solution to callback hell
// it is used in api when fething data from another progrram

// simple promises

function asyncFunc1(){    //when in project this will be done by server not me (dont have to code we have code in then)
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("data1");
            //here api code ( its just an example)
            resolve("success1");
        },4000);
    }); 
}

function asyncFunc2(){    //when in project this will be done by server not me (dont have to code we have code in then)
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("data2");
            //here api code ( its just an example)
            resolve("success2");
        },4000);
    }); 
}

// this will work simultinously
console.log("fetching data1....");
let p1 = asyncFunc1();
p1.then((res) => {
    console.log(res);
    //the fucntion will return an promise and data we will work on that data
});

console.log("fetching data2....");
asyncFunc2().then((res) => {    //avabew lekaha jai
    console.log(res);
    //the fucntion will return an promise and data we will work on that data
});


//-------------------------------------------------------------------
