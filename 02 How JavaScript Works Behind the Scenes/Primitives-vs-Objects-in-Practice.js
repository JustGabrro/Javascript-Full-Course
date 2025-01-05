 "use strict";

// Primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

// Reference types
const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
console.log("After marriage:", marriedJessica);

// Copying objects
const jessica2 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);

// JavaScript-ში პრიმიტიული და მისამართული ტიპების შედარება

// 1. პრიმიტიული ტიპები (Primitive Types):
//    - სიმრავლის (მნიშვნელობის) კოპირება ხდება მნიშვნელობის გადაცემით
//    - თითოეული ცვლადი ინახავს დამოუკიდებელ მნიშვნელობას
//    - ერთ ცვლადში ცვლილება არ მოქმედებს სხვა ცვლადებზე

// 2. მისამართული ტიპები (Reference Types):
//    - ობიექტები გადაეცემა მისამართით (რეფერენსით)
//    - ორი ცვლადი მიუთითებს ერთსა და იმავე ობიექტზე
//    - ერთ ცვლადში ცვლილება იმოქმედებს სხვა ცვლადზეც

// 3. ობიექტების კოპირება:
//    - Object.assign() ქმნის ზედაპირულ (Shallow) კოპირებას
//    - გარე სტრუქტურები (მასივები, ჩაშენებული ობიექტები) კვლავ საერთო რჩება
//    - სრული კოპირებისთვის საჭიროა სხვა მიდგომები (Deep Clone)

// ძირითადი გაკვეთილი: 
// JavaScript-ში მონაცემთა ტიპების კოპირება განსხვავებულად მუშაობს
// პრიმიტიული და მისამართული ტიპებისთვის


window.location.href = 'primitives-vs-objects.png';
// ეს კოდი ილუსტრირებს ჯავასკრიპტის პრიმიტიული ტიპების კონცეფციას
// 1. `let age = 30;` და `let oldAge = age;` - ეს ხაზები იყენებენ პრიმიტიულ მინიჭებას, 
// სადაც `age` ცვლადს მიენიჭა მნიშვნელობა 30, და `oldAge` ცვლადს მიენიჭა იგივე მნიშვნელობა, 
// რაც `age`-ს.

// 2. `age = 31;` - ეს ხაზი ცვლის `age` ცვლადის მნიშვნელობას 31-ით.

// 3. `console.log(age);` და `console.log(oldAge);` - ეს ხაზები გამოაჩენენ 
// `age` და `oldAge` ცვლადების მიმდინარე მნიშვნელობებს.

// 4. `const me = {...}` და `const friend = {...}` - ეს ხაზები წარმოადგენენ 
// მითითებული მნიშვნელობებით დაკავშირებულ რეფერენსებს (მეხსიერების მისამართებს). 
// აქ მნიშვნელობები არ იცვლება მისამართების შეცვლისას.

// 5. `console.log('Friend:', friend);` და `console.log('Me:', me);` - ეს ხაზები გამოაჩენენ 
// `friend` და `me` ობიექტების მიმდინარე მნიშვნელობებს.
// ზოგადად, ეს კოდი ნათლად აჩვენებს პრიმიტიული ტიპებისა და რეფერენსული ტიპების 
// განსხვავებას ჯავასკრიპტში.