"use strict";

const gabriel = {
    firstName: "Gabriel",
    year: 2006,
    calcAge: function () {
        // console.log(this);
        console.log(2044 - this.year);

        // Solution I
        // const self = this; // self or that
        // const isGenZ = function () {
        //     console.log(self);
        //     console.log(self.year >= 1997 && self.year <= 2012);
        // };

        // Solution II
        const isGenZ = () => {
            console.log(this);
            console.log(this.year >= 1997 && this.year <= 2012);
        };
        isGenZ();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};
gabriel.greet();
gabriel.calcAge();

// arguments keyword
const addExpr = function (a, b) {
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    console.log(arguments);
    a + b;
};
addArrow(2, 5, 8);


// ჩვეულებრივი და ისრის ფუნქციების შედარება JavaScript-ში

// ძირითადი განსხვავებები ჩვეულებრივ (function) და ისრის (arrow) ფუნქციებს შორის:
// 1. this კონტექსტი
//    - ჩვეულებრივ ფუნქციებს აქვთ საკუთარი this კონტექსტი
//    - ისრის ფუნქციები იღებენ this-ს გარემოდან (ლექსიკური this)

// 2. arguments ობიექტი
//    - ჩვეულებრივ ფუნქციებს აქვთ arguments მასივი
//    - ისრის ფუნქციებს არ აქვთ arguments მასივი

// მაგალითში ნაჩვენებია:
// - calcAge მეთოდში ორი გზა this კონტექსტთან გასამკლავებლად:
//   1. self ცვლადის გამოყენება
//   2. ისრის ფუნქციის გამოყენება, რომელიც იღებს this-ს გარემოდან

// greet მეთოდი ილუსტრაციას უწევს ისრის ფუნქციის სპეციფიკას:
// - ვერ მოიპოვებს this-ს ობიექტიდან, რადგან this არის გლობალური კონტექსტი

// arguments საკვანძო სიტყვის მაგალითი:
// - ჩვეულებრივ ფუნქციებს აქვთ arguments მასივი
// - ისრის ფუნქციებს არ აქვთ arguments მასივი