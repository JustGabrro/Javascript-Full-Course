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
    [weekdays[4]]: {
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



/*
**კოდის თემა: Enhanced Object Literals**

**მიმოხილვა:**

1. **Enhanced Object Literals (ES6):**
   - JavaScript-ში ES6 განახლებამ შეიტანა რამდენიმე ახალი ფუნქციონალი, 
   რომელიც აჩქარებს და ამარტივებს ობიექტების შექმნას.

---

2. **Properties (თანხვედრის საშუალება):**
   - როცა ობიექტის თვისება უკვე ცალკე ცვლადშია, მისი პირდაპირ დაწერა შეიძლება 
   ობიექტში (გასაღები: მნიშვნელობა ავტომატურად ხდება).
   - **მაგალითი კოდში:**
     
     openingHours
     
     აქ, `openingHours` ობიექტი პირდაპირ ემატება `restaurant` ობიექტს, ისე 
     რომ გასაღები და მნიშვნელობა არ გვიწევს ცალ-ცალკე აღვნიშნოთ.

---

3. **გამოთვლადი თვისებები (Computed Property Names):**
   - თვისებების გასაღები შეიძლება იყოს დინამიურად გამოთვლილი.
   - **მაგალითი კოდში:**
     
     const openingHours = {
         [weekdays[3]]: { open: 12, close: 12 },
         [weekdays[4]]: { open: 0, close: 24 }
     };
     
     აქ თვისებების სახელები (`thu`, `fri`) დინამიურად იქმნება მასივის 
     `weekdays` ელემენტებიდან.

---

4. **მეთოდების წერის სიმარტივე:**
   - მეთოდების დასაწერად აღარ არის საჭირო ფუნქციის დასახელება `function` 
   საკვანძო სიტყვით.
   - **მაგალითი კოდში:**
     
     order(starterIndex, mainIndex) {
         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
     }
     
     ეს არის მარტივი და მკაფიო გზა ობიექტის მეთოდის განსაზღვრისთვის.

---

**პრაქტიკული გამოყენება:**
- ES6 Object Literals-ის საშუალებით, კოდის წერა უფრო სწრაფი და ორგანიზებულია.
- დინამიური თვისებები და მარტივი მეთოდები ხელს უწყობენ კოდის სისუფთავესა 
და გამოყენებადობას.

*/
