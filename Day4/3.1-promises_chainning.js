// if we want to deal with fetching data1 and then fetch data2
// we can avoid nested then callbacks
// this is a better syntax than callbacks
// this technique is called chaining

//scenario simulation : in asyncf1 we have to validate username where it takes 4s with server/api
// if username is valid(resolve) then we validate password(asyncf2) which takes same 4s

function asyncFunc1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("data1");
            // here API code (it's just an example)
            resolve("success1");
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("data2");
            // here API code (it's just an example)
            resolve("success2");
        }, 4000);
    });
}

asyncFunc1().then((res) => {
        console.log("fetching data1.....");
        console.log(res);
        asyncFunc2().then((res) => {
        console.log("fetching data2.....");
        console.log(res);
    });
});
    
