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

console.log("---- OR ----")
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || "Gabriel");
console.log("" || "Gabriel");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.
numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("---- AND ----")
console.log(0 && "Gabriel");
console.log(7 && "Gabriel");

console.log("Hello" && 23 && null && "Gabriel");

// Practical example
if (restaurant.orderPizza) {
    restaurant.orderPizza("mushrooms", "spinach");
};

restaurant.orderPizza && restaurant.orderPizza
("mushrooms", "spinach");


/*
**კოდის თემა: Short Circuiting (&& და || ოპერატორები)**

**მიმოხილვა:**

1. **OR (||) ოპერატორი:**
   - **მოკლე ჩართვა (Short Circuiting):** OR ოპერატორი ამოწმებს 
   მარცხნიდან მარჯვნივ თითოეულ მნიშვნელობას, სანამ "truthy" მნიშვნელობას 
   იპოვის და აბრუნებს მას. 
   - თუ არცერთი მნიშვნელობა არ არის "truthy", აბრუნებს ბოლო მნიშვნელობას.
   - მაგალითები:
     - `console.log(3 || "Gabriel");` -> 3 (პირველი "truthy").
     - `console.log("" || "Gabriel");` -> "Gabriel" ("" არის "falsy").
     - `console.log(undefined || 0 || "" || "Hello" || 23 || null);` -> "Hello".

   - **პრაქტიკული გამოყენება:** ვალების დაყენება, როცა ძირითადი მნიშვნელობა 
   "falsy" არის.
     ```javascript
     const guests2 = restaurant.numGuests || 10;
     console.log(guests2); // თუ numGuests არის 0 ან undefined, სტუმრების 
     // რაოდენობა 10 იქნება.
     ```

2. **AND (&&) ოპერატორი:**
   - **მოკლე ჩართვა (Short Circuiting):** AND ოპერატორი ამოწმებს მარცხნიდან 
   მარჯვნივ თითოეულ მნიშვნელობას, სანამ "falsy" მნიშვნელობას იპოვის და 
   აბრუნებს მას.
   - თუ ყველა მნიშვნელობა "truthy" არის, აბრუნებს ბოლო მნიშვნელობას.
   - მაგალითები:
     - `console.log(0 && "Gabriel");` -> 0 (პირველი "falsy").
     - `console.log(7 && "Gabriel");` -> "Gabriel" (ყველა "truthy").

   - **პრაქტიკული გამოყენება:** კოდის მუშაობის დამატებითი პირობების შემოწმება.
     ```javascript
     if (restaurant.orderPizza) {
         restaurant.orderPizza("mushrooms", "spinach");
     }

     // იგივე ეფექტი:
     restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
     ```

**მნიშვნელობა პრაქტიკულ მაგალითში:**
- OR ოპერატორს ვიყენებთ მნიშვნელობების გადაცემა-მომზადებისთვის, მაგალითად, 
სტუმრების რაოდენობის ავტომატური დაყენება.
- AND ოპერატორს ვიყენებთ ფუნქციების შემოწმებისთვის, რათა თავიდან ავიცილოთ 
შეცდომები, თუ ფუნქცია არ არსებობს.
*/
