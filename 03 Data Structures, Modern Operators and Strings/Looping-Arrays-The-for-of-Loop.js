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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);


/*
**კოდის თემა: Looping Arrays - The for-of Loop**

**მიმოხილვა:**

1. **for-of Loop:**
   - `for-of` ციკლი არის განკუთვნილი მასივების ან iterable ობიექტების 
   ელემენტებზე გადახვევისთვის.
   - ეს ციკლი პირდაპირ ატვირთავს ელემენტებს, ისე რომ არ გვჭირდება 
   ინდექსი (ამ შემთხვევაში).
   - **მაგალითი კოდში:**
     
     for (const item of menu) console.log(item); 
     // ამ ციკლში, თითოეული ელემენტი "menu" მასივიდან იწერება 
     // console.log-ში.
     
   - `for-of` ციკლი გამოსადეგია მასივებში, როცა მხოლოდ ელემენტები 
   გვაინტერესებს და არა მათი ინდექსები.

---

2. **entries() მეთოდი:**
   - `entries()` ქმნის მასივის ელემენტებისა და მათი ინდექსების წყვილებს.
   - ეს მეთოდი აბრუნებს "array-like" ობიექტებს, რომლის ყველა ელემენტში 
   არის ინდექსი და შესაბამისი მნიშვნელობა.
   - **მაგალითი კოდში:**
     
     for (const [i, el] of menu.entries()) {
         console.log(`${i + 1}: ${el}`);
     }
     
   - ეს ციკლი გამოიყენება, როცა ორივე (ინდექსი და მნიშვნელობა) გვინდა 
   დავბეჭდოთ.

---

3. **პრაქტიკული გამოყენება:**
   - `for-of`-ის გამოყენება შესანიშნავია, როცა არ გვჭირდება ინდექსები ან 
   სხვა პარამეტრები.
   - `entries()`-ის გამოყენებით, შეიძლება ორივე ინდექსი და მნიშვნელობა 
   გამოვიტანოთ, რაც ხელს უწყობს უფრო სანდო და გამართული კოდის დაწერას.

---

**შეჯამება:**
- `for-of` ციკლი მარტივად სარგებლობს მასივების ელემენტებთან, ხოლო 
`entries()` მეთოდი არის გამოსადეგი, როცა ორივე ინდექსი და მნიშვნელობა 
გვჭირდება.
- კოდში, ორივე მეთოდი ერთად უზრუნველყოფს ელემენტების მარტივ 
გადახვევას და მათი ინდექსების გამოშვებას.
*/
