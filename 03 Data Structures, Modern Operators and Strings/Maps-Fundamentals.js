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

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"))

rest.set(
    "categories", ["Italian", "Pizzeria", "Vegetarian", "Ogranic"])
    .set("open", 11)
    .set("close", 23)
    .set(true, "We are open :D")
    .set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest)
console.log(rest.size);

console.log(rest.get(arr));


/*
**კოდის თემა: Maps (რუკები) JavaScript-ში**

**მიმოხილვა:**

1. **Map-ის შექმნა და მნიშვნელობების დამატება:**
   - `Map` არის მონაცემთა სტრუქტურა, რომელიც ინახავს გასაღებებისა და 
   მნიშვნელობების წყვილებს.
   - **მაგალითი კოდში:**
     
     const rest = new Map();
     rest.set("name", "Classico Italiano");
     rest.set(1, "Firenze, Italy");
     console.log(rest.set(2, "Lisbon, Portugal"));
     
     - `set()` ამატებს გასაღებებს და მნიშვნელობებს.
     - შედეგი: `Map { 'name' => 'Classico Italiano', 
     1 => 'Firenze, Italy', 2 => 'Lisbon, Portugal' }`.

---

2. **მრავალი მნიშვნელობის დამატება ჩაინინგით:**
   - **მაგალითი კოდში:**
     
     rest
         .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Ogranic"])
         .set("open", 11)
         .set("close", 23)
         .set(true, "We are open :D")
         .set(false, "We are closed :(");
     
     - ჩაინინგის გამოყენებით მარტივად ვამატებთ მრავალ გასაღებ-მნიშვნელობის 
     წყვილს.

---

3. **მნიშვნელობის წვდომა `get()` მეთოდით:**
   - `get(key)` აბრუნებს შესაბამის მნიშვნელობას.
     
     console.log(rest.get("name")); // "Classico Italiano"
     console.log(rest.get(true)); // "We are open :D"
     console.log(rest.get(1)); // "Firenze, Italy"
     

   - დინამიური გასაღებების გამოყენება:
     
     const time = 8;
     console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
     
     - შედეგი: `undefined` 
     (რადგან `time = 8` არ არის "open"-სა და "close"-ს შორის).

---

4. **მეთოდები Map-თან სამუშაოდ:**
   - **`has(key)`**: ამოწმებს, არსებობს თუ არა გასაღები.
     
     console.log(rest.has("categories")); // true
     
   - **`delete(key)`**: შლის გასაღებ-მნიშვნელობის წყვილს.
     
     rest.delete(2);
     console.log(rest);
     
   - **`size`**: აბრუნებს ელემენტების რაოდენობას.
     
     console.log(rest.size); // 6
     

---

5. **Arrays და Objects როგორც გასაღებები:**
   - `Map`-ში შესაძლებელია არა მხოლოდ სტრინგების, არამედ მასივებისა და 
   ობიექტების გამოყენება გასაღებად.
     
     const arr = [1, 2];
     rest.set(arr, "Test");
     console.log(rest.get(arr)); // "Test"
     
     - ეს ფუნქციონალი საშუალებას გვაძლევს, უფრო მოქნილად ვიმუშაოთ.

---

6. **Map-ის გასუფთავება:**
   - **`clear()`**: შლის ყველა ელემენტს.
     
     // rest.clear();
     

---

**პრაქტიკული გამოყენება:**
- `Map` ხშირად გამოიყენება მონაცემთა დინამიური სტრუქტურების, 
კონფიგურაციის პარამეტრების ან სიტუაციების განსახორციელებლად, 
სადაც გასაღებებსა და მნიშვნელობებს შორის ზუსტი შესაბამისობა გვჭირდება.

**შეჯამება:**
- `Map` არის მოქნილი სტრუქტურა, რომელიც გაძლევთ შესაძლებლობას, 
გამოიყენოთ ნებისმიერი ტიპის გასაღებები.
- მისი მეთოდები და თვისებები უფრო მოწესრიგებულ და ეფექტურ კოდს 
უზრუნველყოფს.
*/
