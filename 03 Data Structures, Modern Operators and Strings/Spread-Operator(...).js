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
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    }
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = "Gabriel";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);


// Real-world example
const ingredients = [
    // prompt("Let's make pasta. Ingredient 1?"), 
    // prompt("Let's make pasta. Ingredient 2?"),
    // prompt("Let's make pasta. Ingredient 1?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: "Guiseppe"};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);


/*
**კოდის თემა: Spread Operator**

ეს კოდი იყენებს **Spread Operator**-ს (`...`) მასივებისა და ობიექტების 
მანიპულაციისთვის, რაც ამარტივებს მათ კოპირებას, გაერთიანებას და ინდივიდუალური 
ელემენტების ან თვისებების გამოყენებას.

**კოდის მიმოხილვა:**
1. **მასივების მანიპულაცია**:
   - **ახალი მასივის შექმნა:** `newArr` გაერთიანებულია `arr` მასივის ელემენტებთან.
   - **მასივების გაერთიანება:** `menu` აერთიანებს `starterMenu` და `mainMenu` მასივებს.
   - **მასივის კოპირება:** `mainMenuCopy` ქმნის `mainMenu`-ის ზუსტ ასლს.

2. **ბრუნვადი ობიექტები**:
   - `...str` შლის `"Gabriel"` სტრიქონს სიმბოლოებად და იყენებს მას ახალ მასივში 
   (`letters`).
   - Spread Operator ასევე მხარდაჭერილია მასივებში, სტრიქონებში, Maps და Sets 
   ობიექტებში.

3. **პარამეტრების გადაცემა ფუნქციაში**:
   - `restaurant.orderPasta` ფუნქციაში Spread Operator გამოიყენება `ingredients` 
   მასივიდან თითოეული ელემენტის ცალკეული არგუმენტად გადასაცემად.

4. **ობიექტების მანიპულაცია**:
   - **ობიექტების გაერთიანება:** `newRestaurant` აერთიანებს `restaurant` ობიექტს 
   ახალ თვისებებთან (`foundedIn` და `founder`).
   - **ობიექტის კოპირება:** `restaurantCopy` ქმნის `restaurant`-ის ასლს, 
   რომელსაც ცვლის მხოლოდ `name` თვისება, ისე, რომ ორიგინალი ობიექტი უცვლელი რჩება.

**მიზანი**:
Spread Operator-ის გამოყენების შესაძლებლობები 
მასივებისა და ობიექტების მარტივი და ეფექტური მანიპულაციისთვის.
ეს ხელს უწყობს კოდის გამარტივებას, მოქნილობასა და მარტივ წაკითხვას.
*/
