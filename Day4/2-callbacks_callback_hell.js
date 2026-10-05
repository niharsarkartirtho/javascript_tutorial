// callback function
function sum(a,b){
    return a+b;
}

let calculate = function (a,b,callback){
    return callback(a,b);
};

console.log(calculate(1,3,sum));

// more shorter syntax using arrow

const sum1 = (a,b) => a+b;
const calculate2 = (a,b,callback) => callback(a,b);
console.log(calculate2(1,5,sum1));

// callback hell
/* 
Callback Hell (also known as the Pyramid of Doom) occurs 
when multiple asynchronous operations are dependent on each other,
causing callback functions to be nested deeply within other callback functions.
*/
function getData(id,getNextData){
    setTimeout(() => {
        console.log("data is ", id);
        if(getNextData){
            getNextData();
        }
    },2000);
}

getData(1,() =>{
    console.log("getting data 2...");
    getData(2,() =>{
        console.log("getting data 3...");
        getData(3, () => {
            console.log("getting data 4...");
            getData(4);
        });
    });
});

// to takle this like senarion we use promises