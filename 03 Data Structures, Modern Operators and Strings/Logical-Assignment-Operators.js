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

const rest1 = {
    name: "Capri",
    // numGuests: 20,
    numGuests: 0,
};

const rest2 = {
    name: "La Piazza",
    owner: "Giovanni Rossi",
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);


/*
**კოდის თემა: Logical Assignment Operators (||=, &&=, ??=)**

**მიმოხილვა:**

1. **Logical Assignment Operators (ლოგიკური მინიჭების ოპერატორები):**
   - ეს ოპერატორები გამოიყენება მნიშვნელობის მინიჭებისთვის ლოგიკური 
   ოპერატორების (`||`, `&&`, `??`) საფუძველზე.
   - მათი დახმარებით კოდი ხდება უფრო მოკლე და მარტივად წასაკითხი.

2. **OR Assignment Operator (`||=`):**
   - მინიჭებას ახდენს მხოლოდ მაშინ, როცა მარცხენა მხარე "falsy" 
   მნიშვნელობაა (მაგალითად: 0, "", null, undefined).
   - **მაგალითი კოდში:**

     rest1.numGuests ||= 10; // თუ `numGuests` არის "falsy" 
     // (მაგ., 0 ან undefined), მაშინ 10 მიენიჭება.
     rest2.numGuests ||= 10;

   - ამ ოპერატორის გამოყენებით თავიდან გვაცილებს ცალკე `if` პირობის დაწერას.

3. **Nullish Assignment Operator (`??=`):**
   - მინიჭებას ახდენს მხოლოდ მაშინ, როცა მარცხენა მხარე არის `null` ან 
   `undefined`. 
   - სხვაობა `||=`-თან: `??=` არ მიიჩნევს 0-ს ან ცარიელ სტრინგს "falsy" 
   მნიშვნელობად.
   - **მაგალითი კოდში:**

     rest1.numGuests ??= 10; // აქ 0 დარჩება, რადგან 0 არ არის null ან 
     // undefined.
     rest2.numGuests ??= 10; // თუ `numGuests` არის undefined, მაშინ 
     // მიენიჭება 10.


4. **AND Assignment Operator (`&&=`):**
   - მინიჭებას ახდენს მხოლოდ მაშინ, როცა მარცხენა მხარე "truthy" 
   მნიშვნელობაა.
   - **მაგალითი კოდში:**

     rest1.owner &&= "<ANONYMOUS>"; // რადგან rest1.owner არ არსებობს 
     // (undefined), არ მიენიჭება "<ANONYMOUS>".
     rest2.owner &&= "<ANONYMOUS>"; // აქ მნიშვნელობა შეიცვლება 
     // "<ANONYMOUS>"-ით, რადგან owner არის "truthy".

**პრაქტიკული გამოყენება:**
- `||=`: გამოყენებულია მნიშვნელობის დასაყენებლად, როცა საჭიროა 
"falsy" მნიშვნელობების ჩანაცვლება.
- `??=`: საჭიროა უფრო ზუსტი ჩანაცვლებისთვის მხოლოდ მაშინ, თუ 
მნიშვნელობა ნამდვილად არ არსებობს (`null` ან `undefined`).
- `&&=`: გამოიყენება, როცა მნიშვნელობის მინიჭება დამოკიდებულია 
"truthy" პირობაზე.

**შეჯამება:**
- კოდში:
  - `rest1.numGuests ??= 10;` უზრუნველყოფს, რომ `numGuests` მხოლოდ 
  `null` ან `undefined` შემთხვევაში იქნება 10.
  - `rest2.owner &&= "<ANONYMOUS>";` იცვლის `owner`-ს მხოლოდ მაშინ, 
  როცა ის უკვე არსებობს.
- Logical Assignment Operators ამარტივებენ მნიშვნელობების მინიჭებას 
ლოგიკური ოპერატორების პირობებზე დაყრდნობით.
*/
