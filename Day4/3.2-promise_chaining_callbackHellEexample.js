//alternative to callback hell
// this technique called chaining
function getData(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        console.log("data is ", id);
        resolve(`success ${id}`);
    },2000);
    });
}

getData(1).then((res)=>{
    console.log(res);
    console.log("fetching data 2");
    getData(2).then((res)=>{
        console.log(res);
        console.log("fetching data 3");
        getData(3).then((res)=>{
            console.log(res);
        });
    });
});


//