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
        console.log(`Order recieved. ${starterIndex, mainIndex, time, address} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    }
};

restaurant.orderDelivery ({
    time: "22:30",
    address: "Via del Sole, 21",
    mainIndex: 2,
    starterIndex: 2,
});

restaurant.orderDelivery ({
    address: "Via del Sole, 21",
    starterIndex: 1,
});

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {
    name: restaurantName, 
    openingHours: hours, 
    categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14};
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
    fri: {open: o , close: c} 
} = openingHours;
console.log(o, c);


/*
**კოდის მთავარი თემა: Object Destructuring**

ეს JavaScript კოდი განმარტავს, როგორ გამოიყენება **Object Destructuring** თანამედროვე JavaScript-ში, რათა მარტივად და მოხერხებულად მივწვდეთ ობიექტის თვისებებს.

**კოდის მიმოხილვა:**
1. **Object Destructuring-ის ძირითადი გამოყენება**:
   - მარტივად გამოვიტანოთ `restaurant` ობიექტის თვისებები (`name`, `openingHours`, `categories`) ცვლადებში.
   - სახელების გადარქმევით (`name: restaurantName`) და ნაგულისხმევი მნიშვნელობებით (`menu = []`) ვაძლიერებთ კოდის ფუნქციურობას.

2. **ჩაშენებული დესტრუქტურიზაცია**:
   - `openingHours` ობიექტიდან კონკრეტული თვისებების (`open`, `close`) მიღება ხდება ჩაშენებული დესტრუქტურიზაციის გამოყენებით.

3. **მეთოდები და პარამეტრების დესტრუქტურიზაცია**:
   - `orderDelivery` მეთოდში ვიყენებთ პარამეტრების დესტრუქტურიზაციას, რათა მომხმარებელმა პირდაპირ შეიყვანოს საჭირო ინფორმაცია, მაგალითად, `starterIndex`, `mainIndex`, `time`, `address`.
   - პარამეტრებისთვის ნაგულისხმევი მნიშვნელობები ამარტივებს ფუნქციის გამოყენებას.

4. **დესტრუქტურიზაციის უპირატესობები**:
   - კოდი ხდება უფრო მოკლე და გასაგები, რადგან არ არის საჭირო თვისებებზე ხელით წვდომა (მაგ., `restaurant.name` → პირდაპირ `name`).
   - გამარტივებული ცვლადების სახელები და ნაგულისხმევი მნიშვნელობები ხდის კოდს მოქნილს და გამოსაყენებლად ადვილს.

5. **გამოყენების მაგალითები**:
   - `restaurant` ობიექტის თვისებების დესტრუქტურიზაცია (`name`, `openingHours`, `categories`).
   - ნაგულისხმევი მნიშვნელობების გამოყენება (`menu = []`).
   - ცვლადების მოდიფიკაცია ობიექტის თვისებებით (`{a, b} = obj`).
   - ჩაშენებული ობიექტების მონაცემების მიღება (`fri: { open, close }`).

   **Object Destructuring** ტექნიკის მნიშვნელობა და პრაქტიკული გამოყენება. ეს მიდგომა საშუალებას გვაძლევს კოდი დავწეროთ უფრო ორგანიზებულად, მარტივად და ეფექტურად, რაც მნიშვნელოვან როლს ასრულებს თანამედროვე JavaScript პროგრამირებაში.
*/
