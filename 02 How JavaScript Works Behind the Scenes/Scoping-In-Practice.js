"use strict";

function calcAge(birthYear) {
    const age = 2044 - birthYear;
    
    function printAge() {
        let output = `${firstName}, You are ${age} years old, born in ${birthYear}`
        console.log(output);

        if (birthYear >= 1997 && birthYear <= 2012) {
            var genZ = true;
            // Creating NEW variable with same name as outer scope's variable
            const firstName = "Alex";

            // Reasssigning outer scope's variable
            output = "NEW OUTPUT";
            const str = `Oh, and you're a Gen Z, ${firstName}`;
            console.log(str)

            function add(a, b) {
                return a + b;
            }
        }
        // console.log(str);
        console.log(genZ)
        // console.log(add(2, 3));
        console.log(output) 
    }
    printAge();
    return age;
}

const firstName = "Gabriel";
calcAge(2006);



// JavaScript-ში სფეროს (Scope) პრაქტიკული მაგალითი

// ამ კოდის მთავარი მიზანია სფეროების (Scope) დემონსტრაცია:
// 1. გლობალური სფერო: firstName ცვლადი გლობალურ დონეზეა გამოცხადებული
// 2. ფუნქციის სფერო: calcAge ფუნქციის შიგნით იქმნება ახალი სფერო
// 3. ბლოკის სფერო: if ბლოკის შიგნით მოქმედებს განსხვავებული სფერო

// ძირითადი გაკვეთილები:
// - let/const იქმნება ბლოკის სფეროში (if, for ბლოკებში)
// - var იქმნება ფუნქციის სფეროში (მოქმედებს მთელ ფუნქციაში)
// - შიდა სფეროებს შეუძლიათ წვდომა გარე სფეროს ცვლადებზე
// - შიდა სფეროში შესაძლებელია ახალი ცვლადის შექმნა იგივე სახელით
// - მკაცრ რეჟიმში ფუნქციის გამოცხადებები ბლოკის სფეროში სხვაგვარად მოქმედებენ

// სპეციფიური მაგალითები კოდში:
// - firstName-ის გადაფარვა Alex-ით შიდა ბლოკში
// - output ცვლადის გადაწერა
// - genZ var ცვლადის ხილვადობა მთელ ფუნქციაში
// - ბლოკში შექმნილი add ფუნქციის მოქცევა