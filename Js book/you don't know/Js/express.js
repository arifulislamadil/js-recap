let a = 10;
let b = 20;

if(a < b && a != b){
    console.log("true");
}


let x = "20";
console.log(typeof Number(x));

const n = "99.99"
const m = 99.99

console.log(n === m )

let y = 20;
let z = "$"  + y;
console.log(z);


// Get the tax
const vat = 0.08;
let amount = 99.99;
amount = amount * 2
amount = amount + (amount * vat);
console.log(amount.toFixed(3));


// Get tax depend on condition

let am = 100;
if(am > 50){
    am = 50 * 4;
}
console.log(am);