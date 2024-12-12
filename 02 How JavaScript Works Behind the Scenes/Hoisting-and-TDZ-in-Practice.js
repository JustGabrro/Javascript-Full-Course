"use strict";

// Variables
console.log(me);
// console.log(job);
// console.log(year)

var me = "Gabriel";
let job = "Developer";
const year = 2006;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function(a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log("All products deleted");
}



var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// JavaScript-ის Hoisting (ამოტივტივება) და Temporal Dead Zone (TDZ) პრაქტიკული მაგალითი

// ამ კოდის მთავარი მიზანია დემონსტრირება იმისა, თუ როგორ მუშაობს ცვლადების და ფუნქციების გამოცხადება სხვადსხვა გზებით:
// 1. var: ამოტივტივება ხდება, მაგრამ მნიშვნელობა იყო undefined
// 2. let/const: გააჩნიათ Temporal Dead Zone, რაც ნიშნავს რომ მათ არ შეუძლიათ გამოძახება მანამ სანამ არ იქნებიან განსაზღვრული
// 3. სხვადასხვა სახის ფუნქციების (დეკლარაციის, გამოხატულების, ისრის) განსხვავებული ქცევა

// ძირითადი გაკვეთილები:
// - var ცვლადებს შეუძლიათ გამოძახება მანამ სანამ იქნებიან განსაზღვრული (თუმცა მათი მნიშვნელობა იქნება undefined)
// - let/const ცვლადებს არ შეუძლიათ გამოძახება მანამ სანამ არ იქნებიან განსაზღვრული (გამოიწვევს ReferenceError-ს)
// - function declaration ტიპის ფუნქციებს შეუძლიათ გამოძახება მანამ სანამ იქნებიან განსაზღვრული
// - function expression და arrow function-ებს ვერ გამოიძახებთ მანამ სანამ არ იქნებიან მინიჭებული