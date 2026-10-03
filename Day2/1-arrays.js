let marks = [10, 50, 60, 95, 100];
console.log(marks);

let value= ["tirtho", 10 , "nihar", 10.5];

console.log(marks.length);
console.log(typeof(value));

//0 based index

//looping over an array
for(let i = 0; i < value.length; i++){
    console.log(value[i]);
}

for(let val of marks){
    console.log(val);
}

for(let val in marks) console.log(val);

// a given array called price you have to give 10% offer then the total price
// will be stored in that array using for of loop
let price = [300, 400, 200, 500];

let idx = 0;
for(let p of price){
    let dis = p * (10 / 100);
    let total = p - dis;
    console.log(`price of the product ${idx + 1} is : ${p}`);
    price[idx] = total;
    console.log(`price of the product  ${idx + 1} after discount : ${price[idx]}`)
    idx++;
}
console.log(price);