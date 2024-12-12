"use strict";

// console.log(this);

const calcAge = function (birthYear) {
    console.log(2044 - birthYear);
    // console.log(this);
}
calcAge(2000);

const calcAgeArrow = birthYear => {
    console.log(2044 - birthYear);
    // console.log(this);
}
calcAge(2006);

const gabriel = {
    year: 2006,
    calcAge: function() {
        console.log(this);
        console.log(2044 - this.year);
    },
};
gabriel.calcAge();

const matilda = {
    year: 2024,
};

matilda.calcAge = gabriel.calcAge;
matilda.calcAge();

const f = gabriel.calcAge;
f();


// JavaScript-ში this საკვანძო სიტყვის პრაქტიკული მაგალითი

// ამ კოდის მთავარი მიზანია this-ის განსხვავებული ქცევის ჩვენება სხვადასხვა კონტექსტში:

// 1. ჩვეულებრივი ფუნქცია (calcAge):
//    - მკაცრ რეჟიმში this იქნება undefined
//    - არა მკაცრ რეჟიმში this იქნა გლობალური ობიექტი (window)

// 2. ისრის ფუნქცია (calcAgeArrow):
//    - იღებს this-ს გარემოს მშობელი სფეროდან
//    - არ აქვს საკუთარი this კონტექსტი

// 3. ობიექტის მეთოდი (gabriel.calcAge):
//    - this მიუთითებს იმ ობიექტზე, რომლის მეთოდსაც იძახებთ
//    - ამ შემთხვევაში this არის gabriel ობიექტი

// 4. მეთოდის სხვა ობიექტზე გადაბმა (matilda.calcAge):
//    - this იცვლება და მიუთითებს matilda ობიექტზე
//    - ობიექტის შიგნით this არის მოცემული ობიექტი

// 5. მეთოდის დამოუკიდებელ ცვლადზე მინიჭება (f()):
//    - this ხდება undefined (მკაცრ რეჟიმში) ან გლობალური ობიექტი

// ძირითადი გაკვეთილი: 
// this-ის მნიშვნელობა დამოკიდებულია იმაზე, თუ როგორ არის გამოძახებული ფუნქცია