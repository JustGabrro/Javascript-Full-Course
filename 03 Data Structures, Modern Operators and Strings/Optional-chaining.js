"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 12,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Ogranic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    // ES6 enhanced objects literals
    openingHours,

    order (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery ({ starterIndex = 1, mainIndex = 0,
        time = "20:00", address }) {
        console.log(
            `Order recieved. ${this.mainMenu
            [starterIndex]} and ${this.mainMenu[mainIndex]} 
            will be delivered to ${address} at ${time}`
        );
    },

    orderPasta (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, 
        ${ing2}, ${ing3}`
    );
    },

    orderPizza (mainIngredient, 
    ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

if (restaurant.openingHours && restaurant.openingHours.mon) 
    console.log(restaurant.openingHours.mon.open)

// console.log(restaurant.openingHours.mon?.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
    console.log(day);
    const open = restaurant.openingHours[day]?.open ?? "closed";
    console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [
    {
        name: "Gabriel",
        email: "hello@gabriel.com"
    }
];
// const users = [];

console.log(users[0]?.name ?? "User array empty");

if (users.length > 0) console.log(users[0].name);
else console.log("user array empty");


/*
**კოდის თემა: Optional Chaining (?.)**

**მიმოხილვა:**

1. **Optional Chaining (?.):**
   - ეს ფუნქცია საშუალებას გვაძლევს შევამოწმოთ ობიექტის ან მასივის ელემენტები 
   ისე, რომ თავიდან ავიცილოთ შეცდომები, როცა თვისებები ან მნიშვნელობები 
   არ არსებობს.
   - თუ შემოწმებული თვისება არ არსებობს, ოპერაცია შეწყდება და დაბრუნდება 
   `undefined`.

---

2. **გამოყენება ობიექტებში:**
   - **მაგალითი კოდში:**
     
     console.log(restaurant.openingHours.mon?.open);
     
     - `restaurant.openingHours.mon` თუ არ არსებობს, კოდი არ "გატყდება", 
     არამედ დაბრუნდება `undefined`.

---

3. **Optional Chaining ციკლებში:**
   - საშუალებას გვაძლევს განვსაზღვროთ ღირებულებები დინამიურად, მაგალითად, 
   კვირის დღეების მიხედვით:
     
     for (const day of days) {
         const open = restaurant.openingHours[day]?.open ?? "closed";
         console.log(`On ${day}, we open at ${open}`);
     }
     
     - თუ `openingHours[day]?.open` არ არსებობს, დაბრუნდება "closed".

---

4. **Optional Chaining მეთოდებში:**
   - **მაგალითი კოდში:**
     
     console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
     console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");
     
     - აქ `order` მეთოდი გამოიძახება, თუ ის არსებობს, ხოლო `orderRisotto` 
     არ არსებობს და ბრუნდება "Method does not exist".

---

5. **Optional Chaining მასივებში:**
   - მარტივად შეგვიძლია შემოვამოწმოთ, არსებობს თუ არა ელემენტი მასივში:
     
     console.log(users[0]?.name ?? "User array empty");
     
     - თუ `users[0]` არ არსებობს, დაბრუნდება "User array empty".

---

**პრაქტიკული გამოყენება:**
- Optional chaining ამცირებს შეცდომების ალბათობას, როცა ვმუშაობთ ნესტირებულ 
ობიექტებთან ან არასტაბილურ მონაცემებთან.
- ის განსაკუთრებით გამოსადეგია API პასუხების ან მასივების გადამოწმების დროს.

**შეჯამება:**
- Optional chaining (?.) არის ძლიერი ES6 ფუნქცია, რომელიც ზრდის კოდის 
სტაბილურობას და კითხვის გამარტივებას.
*/
