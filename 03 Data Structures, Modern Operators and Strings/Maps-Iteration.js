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

const question = new Map ([
    ["question", "What is the best programming language in the world?"],
    [1, "C"],
    [2, "Java"],
    [3, "JavaScript"],
    ["correct", 3],
    [true, "Correct"],
    [false, "Try again."],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
    if (typeof key === "Number") console.log(`Answer ${key}: ${value}`);
}
// const answer = //Example - Number(prompt("Your answer"));
// console.log(answer);

// console.log(question.get(question.get("correct") === answer)); // Example

// Convert map to array
console.log([...question]);
// console.log(question.entries());;
console.log(...question.keys());
console.log(...question.values());




/*
**კოდის თემა: Maps-ის გამოყენება Quiz აპლიკაციაში და ობიექტების 
კონვერტაცია Map-ში**

**მიმოხილვა:**

1. **Map-ის შექმნა და მონაცემების დამატება:**
   - `Map` არის მონაცემთა სტრუქტურა, რომელიც ინახავს გასაღებების და 
   მნიშვნელობების წყვილებს.

2. **`Object.entries()` და `Map`:**
   - `Object.entries()` აბრუნებს ობიექტის გასაღებებსა და მნიშვნელობებს
   წყვილებად.
     
     console.log(Object.entries(openingHours));
     const hoursMap = new Map(Object.entries(openingHours));
     console.log(hoursMap);
     
     - ამ მეთოდით ობიექტის კონვერტირება `Map`-ად ხდება.

---

3. **Quiz აპლიკაცია `Map`-ის გამოყენებით:**
   - კითხვაზე პასუხის მოთხოვნა:
     
     console.log(question.get("question"));
     
   - `for...of` ციკლში `Map`-ის წყვილების გადამუშავება:
     
     for (const [key, value] of question) {
         if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
     }
     
   - ამით იძლევა კითხვაზე პასუხების "ამოღებას".

4. **Map-ის კონვერტაცია მასივში:**
   - `Map`-ის გადაყვანა მასივში:
     
     console.log([...question]);
     console.log(...question.keys());
     console.log(...question.values());
     
     - `keys()` აბრუნებს მხოლოდ გასაღებებს, ხოლო `values()` 
     - მხოლოდ მნიშვნელობებს.

---

**პრაქტიკული გამოყენება:**
- `Map` განსაკუთრებით გამოსადეგია, როდესაც გვჭირდება იმის გაგება, 
რომ გასაღებები შეიძლება იყოს ნებისმიერი ტიპის მონაცემი (მაგალითად, 
ნომერი, სტრინგი, ობიექტი).
- ეს მეთოდები იდეალურია ამოცანებისთვის, სადაც საჭიროებთ ობიექტის 
სტრუქტურების უკეთ წარმოჩენას, მათ შორის `Quiz`-ის სისტემების შექმნაში.

**შეჯამება:**
- `Map` უფრო მოქნილია, ვიდრე ობიექტები, რადგან ნებისმიერ ტიპს შეუძლია 
იყოს გასაღები. მისი გამოყენებით ძალიან მარტივად შეიძლება მონაცემების 
ორგანიზება და სწრაფი წვდომა.
- `Map`-ის ციკლური დამუშავება შესაძლებელია მარტივად. ასევე გამოიყენება 
ობიექტების ან კონფიგურაციების გადასამუშავებლად.

*/
