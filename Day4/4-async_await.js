//sometimes promises syntax can be difficult 
// so we use async await

//async function always returns a promise
// async fucntion myfunc(){}
//await pauses the execution of its sourrounding async function 
//until the promises is settled

// await keyword can only be used in async function

function getData(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`data is ${id}`);
            resolve("success");
        }, 2000);
    });
}
// try it without await keyword and simulate
async function getAllData() {
    console.log("getting data 1........"); 
    await getData(1);
    console.log("getting data 2........");
    await getData(2);
    console.log("getting data 3........");
    await getData(3);
}

getAllData();
