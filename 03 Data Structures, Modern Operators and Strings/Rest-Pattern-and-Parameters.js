"use strict";

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Ogranic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours: {
        thu: {
            open: 12,
            close: 12,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = "20:00",
        address,
    }) {
        console.log(
            `Order recieved. ${this.mainMenu
            [starterIndex]} and ${this.mainMenu[mainIndex]} 
            will be delivered to ${address} at ${time}`
        );
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, 
        ${ing2}, ${ing3}`
    );
    },

    orderPizza: function (mainIngredient, 
    ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , rosotto, ...otherFood] = [
    ...restaurant.mainMenu, 
    ...restaurant.starterMenu
];
console.log(pizza, rosotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");


/*
**კოდის თემა: Rest Pattern and Parameters**

ეს კოდი იყენებს **Rest Pattern**-ს და **Rest Parameters**-ს, რომლებიც `...` 
სიმბოლოს მეშვეობით განსხვავებულ სიტუაციებში გამოიყენება: ელემენტების განაწილება 
მასივში ან არგუმენტების მოქნილად მართვა ფუნქციებში.

**კოდის მიმოხილვა:**

1. **Rest Pattern მასივებში:**
   - **მარცხენა მხარეს (REST):** `const [a, b, ...others] = [1, 2, 3, 4, 5];` გაყოფს 
   მასივს ორ ცვლადად (`a` და `b`), ხოლო დანარჩენ ელემენტებს ინახავს `others` მასივში.
   - **მრავალ ელემენტიანი გაერთიანება:** `const [pizza, , rosotto, ...otherFood]` 
   მასივის რამდენიმე ელემენტს ანიჭებს ცვლადებს, დანარჩენს კი ინახავს `otherFood`-ში.

2. **Rest Pattern ობიექტებში:**
   - `const { sat, ...weekdays } = restaurant.openingHours;` ობიექტიდან `sat` თვისება 
   გამოიტანება, ხოლო სხვა თვისებები ინახება `weekdays` ობიექტში.

3. **Rest Parameters ფუნქციებში:**
   - `add` ფუნქცია იღებს არგუმენტების გაურკვეველ რაოდენობას (მაგ., `add(2, 3, 7, 4)`), 
   ითვლის მათ ჯამს და იყენებს `numbers` მასივში გადასაცემად.
   - `restaurant.orderPizza` იღებს ერთ მთავარ ინგრედიენტს და დანარჩენს ინახავს 
   `otherIngredients` მასივში, რაც მოქნილ ფუნქციას ქმნის სხვადასხვა რაოდენობის 
   არგუმენტების გადაცემისთვის.

4. **Rest vs Spread:**
   - **Spread (RIGHT side):** გამოიყენება არსებული ელემენტების დასაშლელად, მაგალითად, 
   `...x` ან `[...restaurant.mainMenu]`.
   - **Rest (LEFT side):** გამოიყენება დარჩენილი ელემენტების შესაგროვებლად, მაგალითად, 
   `[a, b, ...others]`.

**შედარება:**
Rest Pattern თემატიკურად უკავშირდება **Spread Operator**-ს, რადგან ორივე იყენებს 
`...` სიმბოლოს, თუმცა მათი დანიშნულება განსხვავებულია:
   - **Spread:** ელემენტების დაშლისთვის, მაგალითად, ფუნქციის არგუმენტებად.
   - **Rest:** ელემენტების შესაგროვებლად, მაგალითად, ფუნქციაში `...numbers`.

**პრაქტიკული მაგალითი:**
Rest Pattern ქმნის მოქნილ ფუნქციებს, რომლებიც სხვადასხვა რაოდენობის არგუმენტებს იღებენ. 
მაგალითად, `restaurant.orderPizza` ფუნქცია შეიძლება გამოყენებულ იქნას ერთი ან მრავალი 
ინგრედიენტისთვის.

**საგულისხმო დეტალი:**
Rest Pattern Rest Parameters-ის გამოყენებას ამარტივებს, რაც JavaScript-ში კოდის უფრო 
ორგანიზებულსა და გასაგებს ხდის.
*/
