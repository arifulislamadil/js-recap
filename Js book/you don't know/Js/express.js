const { type } = require("os");

let a = 10;
let b = 20;

if (a < b && a != b) {
  console.log("true");
}

let x = "20";
console.log(typeof Number(x));

const n = "99.99";
const m = 99.99;

console.log(n === m);

let y = 20;
let z = "$" + y;
console.log(z);

// Get the tax
const vat = 0.08;
let amount = 99.99;
amount = amount * 2;
amount = amount + amount * vat;
console.log(amount.toFixed(3));

// Get tax depend on condition

let am = 100;
if (am > 50) {
  am = 50 * 4;
}
console.log(am);

let h = ["arif", "sharif", "alamin", "nooralam"];

let randomIndex = Math.ceil(Math.random() * h.length);

let randomName = h[randomIndex];

console.log(randomIndex);

var i = 0;
while (true) {
  if (i <= 9) {
    console.log(i);
    i = i + 1;
  } else {
    break;
  }
}

let k = 10;
if (k > 0) {
  console.log("Thank you for buy");
} else {
  console.log("stock finish");
}

function printAmount(amt) {
  console.log("$" + amt.toFixed(2));
}

var amount1 = 99.99;
printAmount(amount1 * 2);

const tax = 0.08;
function cal(amt) {
  amt = amt + amt * tax; // amt = 99.99 + (99.99 * 0.08)
  console.log(Math.ceil(amt));
}
let amount2 = 100;
amount2 = cal(amount2);

function outer() {
  var a = 1;
  function inner() {
    var b = 2;
    console.log(a + b);
  }
  inner();
  console.log(a);
}

outer();

function calculate(t, a, b, p, q) {
  a = a + p + a * t;
  a = a * q;
  if (b > a) {
    return "You can buy this accessories " + a.toFixed(2);
  } else {
    return "you can't buy this accessories " + a.toFixed(2);
  }
  return a.toFixed(2);
}

const tax_rate = 0.08;
const accessory_price = 9.9;
const phone_price = 200;
const quantity = 2;
const bank_account_balance = 300;

console.log(
  calculate(
    tax_rate,
    accessory_price,
    bank_account_balance,
    phone_price,
    quantity
  )
);

const kk = null;
console.log(typeof kk);

const pro = ["arif", "sharif"];

console.log(typeof pro[0]);

const kjkj = 20;
const res = kjkj.toString();
console.log(typeof res);

var am_dl = "10";
var am_kl = Number(am_dl) + 39;
console.log(typeof am_kl);

// Truthy and falsy values
const h1 = "";
const h2 = 0;
const h3 = -0;
const h4 = NaN;
const h5 = false;
console.log(Boolean(h1));
console.log(Boolean(h2));
console.log(Boolean(h3));
console.log(Boolean(h4));
console.log(Boolean(h5));

const l1 = "hello";
const l2 = 20;
const l3 = true;
const l4 = ["a", "b", "c", "d", "e"];
const l5 = { name: "arif" };
const l6 = function add() {
  console.log("helllllo");
};
console.log(Boolean(l1));
console.log(Boolean(l2));
console.log(Boolean(l3));
console.log(Boolean(l4));
console.log(Boolean(l5));
console.log(Boolean(l6));

const num3 = "11";
const result3 = num3 === 11;
console.log(result3);

const num4 = [1, 2, 3];
const num5 = [1, 2, 3];
const num6 = "1,2,3";

console.log(num4 == num6);

const zan = 11;

{
  console.log(zan);
}

function addNum (){
    console.log("from function " + zan);
}
addNum()




function foo(){
    a = 3;
    b = 5;
    console.log(a);
}
foo();
console.log(a);
console.log(b);


