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

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or "")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


/*
**კოდის თემა: Nullish Coalescing Operator (??)**

**მიმოხილვა:**

1. **Nullish Coalescing (??) ოპერატორის დანიშნულება:**
   - ?? ოპერატორი გამოიყენება ალტერნატიული მნიშვნელობების 
   დასაყენებლად, მხოლოდ მაშინ როდესაც მარცხენა მხარეს მოცემული 
   მნიშვნელობა არის `null` ან `undefined`.

3. **Nullish Coalescing (??) ოპერატორის უპირატესობა:**
   - ?? ოპერატორი მხოლოდ მაშინ ამოწმებს მარცხენა მხარეს მოცემულ 
   მნიშვნელობას, თუ ის `null` ან `undefined` არის. სხვა "falsy" 
   მნიშვნელობები, მაგალითად 0 ან "", არ შეცვლიან მარცხენა მნიშვნელობას.
   - **მაგალითი:**
     ```javascript
     const guestCorrect = restaurant.numGuests ?? 10; // აქ, 0 დარჩება.
     ```
   - **შედეგი:** თუ `numGuests` არის 0, `guestCorrect` დარჩება 0-სთან, 
   რადგან `??` არ შეცვლის 0-ს.

4. **პრაქტიკული გამოყენება Nullish Coalescing-ისთვის:**
   - `??` ოპერატორს ხშირად ვხმარობთ მაშინ, როცა გვინდა ზუსტი შემოწმება 
   მხოლოდ `null` ან `undefined`-ზე, ხოლო სხვა "falsy" მნიშვნელობები, 
   როგორიცაა 0 ან ცარიელი სტრინგი, უნდა დარჩეს გამოხატული.
   - **მაგალითი:**
     ```javascript
     const numGuests = restaurant.numGuests ?? 10; // თუ `numGuests` 
     // არის null ან undefined, მაშინ დაბრუნდება 10.
     ```

**შეჯამება:**
- `||` ოპერატორი შეიცვლის ყველა "falsy" მნიშვნელობას, მათ შორის 0-ს 
და ცარიელ სტრინგს.
- `??` ოპერატორი მხოლოდ `null` და `undefined`-ის შემთხვევაში შეცვლის 
მნიშვნელობას.
- `??` არის სასარგებლო, როდესაც გვინდა, რომ მხოლოდ `null` ან 
`undefined`-მა გამოიწვიოს ალტერნატიული მნიშვნელობის დაბრუნება.
*/
