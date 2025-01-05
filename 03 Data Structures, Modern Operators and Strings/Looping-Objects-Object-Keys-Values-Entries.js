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
    },
};

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
    openStr += `${day}, `;
};
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
    console.log(`On ${day} we open at ${open} and close at ${close}`);
}


/*
**კოდის თემა: ობიექტების ციკლური დამუშავება (Object.keys, Object.values, 
Object.entries)**

**მიმოხილვა:**

1. **Property Names (ობიექტის გასაღებები):**
   - `Object.keys(obj)` აბრუნებს ობიექტის ყველა გასაღების (key) მასივს.
   - **მაგალითი კოდში:**
     
     const properties = Object.keys(openingHours);
     console.log(properties);
     
     - შედეგად მივიღებთ: `["thu", "fri", "sat"]`.

   - **დამუშავება ციკლში:**
     
     let openStr = `We are open on ${properties.length} days: `;
     for (const day of properties) {
         openStr += `${day}, `;
     }
     console.log(openStr);
     
     - შედეგი: `We are open on 3 days: thu, fri, sat,`.

---

2. **Property Values (ობიექტის მნიშვნელობები):**
   - `Object.values(obj)` აბრუნებს ობიექტის ყველა მნიშვნელობას (value) მასივში.
   - **მაგალითი კოდში:**
     
     const values = Object.values(openingHours);
     console.log(values);
     
     - შედეგი: თითოეული დღის `open` და `close` მონაცემების ობიექტები.

---

3. **Entire Object (გასაღებები და მნიშვნელობები ერთად):**
   - `Object.entries(obj)` აბრუნებს ობიექტის გასაღებებსა და მნიშვნელობებს 
   წყვილების (array) სახით.
   - **მაგალითი კოდში:**
     
     const entries = Object.entries(openingHours);
     console.log(entries);
     
     - შედეგი: მასივი, რომელიც შეიცავს ობიექტის თითოეულ `key-value` წყვილს.

   - **დამუშავება ციკლში (დესტრუქტურიზაცია):**
     
     for (const [day, { open, close }] of entries) {
         console.log(`On ${day} we open at ${open} and close at ${close}`);
     }
     
     - შედეგი:
       
       On thu we open at 12 and close at 12
       On fri we open at 11 and close at 23
       On sat we open at 0 and close at 24
       

---

**პრაქტიკული გამოყენება:**
- `Object.keys`, `Object.values`, და `Object.entries` გამოიყენება ობიექტების 
სტრუქტურის გასაანალიზებლად ან მონაცემების დინამიური დამუშავებისთვის.
- განსაკუთრებით გამოსადეგია მონაცემთა ბაზების, API პასუხების, ან ნესტირებული 
ობიექტების დამუშავებისას.

**შეჯამება:**
- ეს მეთოდები ზრდის კოდის მოქნილობას და გვეხმარება ობიექტებთან ეფექტურ 
მუშაობაში.
*/
