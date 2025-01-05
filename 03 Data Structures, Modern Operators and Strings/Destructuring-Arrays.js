"use strict";

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Ogranic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr)

//change 'const' to // 
let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

/* 
JavaScript-ის მასივების დესტრუქტურიზაცია - დეტალური მიმოხილვა

1. მარტივი დესტრუქტურიზაცია:
  - ჩვეულებრივი მასივიდან ელემენტების ამოღება პირდაპირ ცვლადებში
  - მაგ.: const [x, y, z] = arr; - ნაცვლად იმისა, რომ ინდივიდუალურად 
  მივწვდეთ arr[0], arr[1], arr[2]-ს
  - უფრო მოკლე და მოსახერხებელი გზა ელემენტების ამოსაღებად

2. ობიექტიდან მასივის დესტრუქტურიზაცია:
  - restaurant ობიექტიდან კატეგორიების ამოღება
  - let [main, secondary] = restaurant.categories;
  - საშუალებას იძლევა სწრაფად ამოვიღოთ სასურველი მნიშვნელობები

3. ცვლადების გადანაცვლება:
  - მარტივი გზა ორი ცვლადის მნიშვნელობების გაცვლისათვის
  - [main, secondary] = [secondary, main];
  - ძველი მეთოდის (temp ცვლადის გამოყენების) ჩანაცვლება

4. ფუნქციიდან მრავლობითი მნიშვნელობების დაბრუნება:
  - const [starter, mainCourse] = restaurant.order(2, 0);
  - საშუალებას იძლევა ერთდროულად ამოვიღოთ რამდენიმე მნიშვნელობა

5. ჩაბუდებული მასივების დესტრუქტურიზაცია:
  - const [i, , [j, k]] = nested;
  - საშუალებას იძლევა ჩაბუდებული მასივებიდანაც ამოვიღოთ ელემენტები
  - შესაძლებელია გამოვტოვოთ გარკვეული ელემენტები (მაგ., მეორე ელემენტი)

6. ნაგულისხმევი მნიშვნელობები:
  - const [p = 1, q = 1, r = 1] = [8, 9];
  - თუ მასივში არ არის საკმარისი რაოდენობის ელემენტი, გამოიყენება ნაგულისხმევი 
  მნიშვნელობები
  - აქ p = 8, q = 9, r = 1

მთავარი უპირატესობა: კოდი ხდება უფრო წაკითხვადი, კომპაქტური და ლაკონური
*/