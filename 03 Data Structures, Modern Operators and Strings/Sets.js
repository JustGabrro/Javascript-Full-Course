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

const ordersSet = new Set([
    "Pasta", 
    "Pizza", 
    "Pizza", 
    "Risotto", 
    "Pasta", 
    "Pizza"
]);
console.log(ordersSet);

console.log(new Set("Gabriel"));

console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size);

console.log(new Set("JustGabrro").size);


/*
**კოდის თემა: Set (უნიკალური ელემენტების კოლექცია)**

**მიმოხილვა:**

1. **Set-ის შექმნა და დუბლიკატების ამოღება:**
   - `Set` არის მონაცემთა სტრუქტურა, რომელიც ინახავს მხოლოდ 
   უნიკალურ ელემენტებს.
   - **მაგალითი კოდში:**
     
     const ordersSet = new Set([
         "Pasta", 
         "Pizza", 
         "Pizza", 
         "Risotto", 
         "Pasta", 
         "Pizza"
     ]);
     console.log(ordersSet);
     
     - შედეგი: `Set { 'Pasta', 'Pizza', 'Risotto' }` (დუბლიკატები 
     ავტომატურად იშლება).

---

2. **Set-ის თვისებები და მეთოდები:**
   - **`size`**: აბრუნებს ელემენტების რაოდენობას.
     
     console.log(ordersSet.size); // 3
     
   - **`has(value)`**: ამოწმებს, არის თუ არა ელემენტი `Set`-ში.
     
     console.log(ordersSet.has("Pizza")); // true
     console.log(ordersSet.has("Bread")); // false
     
   - **`add(value)`**: ამატებს ახალ ელემენტს `Set`-ში.
     
     ordersSet.add("Garlic Bread");
     console.log(ordersSet);
     
     - შედეგი: `Set { 'Pasta', 'Pizza', 'Risotto', 'Garlic Bread' }`.
   - **`delete(value)`**: შლის ელემენტს.
     
     ordersSet.delete("Risotto");
     console.log(ordersSet);
     
     - შედეგი: `Set { 'Pasta', 'Pizza', 'Garlic Bread' }`.
   - **`clear()`**: შლის ყველა ელემენტს (დაკომენტირებულია კოდში).

---

3. **Set-ის დალუპვა:**
   - `Set` მხარს უჭერს `for...of` ციკლს.
     
     for (const order of ordersSet) console.log(order);
     
     - შედეგი:
       
       Pasta
       Pizza
       Garlic Bread
       

---

4. **Set-თან დაკავშირებული პრაქტიკული მაგალითი:**
   - **დუბლიკატების ამოღება მასივიდან:**
     
     const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
     const staffUnique = [...new Set(staff)];
     console.log(staffUnique);
     
     - შედეგი: `[ 'Waiter', 'Chef', 'Manager' ]`.

   - **ელემენტების რაოდენობის დათვლა (დუბლიკატების გარეშე):**
     
     console.log(new Set(staff).size); // 3
     

---

5. **Set-ის გამოყენება სტრინგებზე:**
   - სტრინგი გადაიქცევა უნიკალური სიმბოლოების `Set`-ად.
     
     console.log(new Set("Gabriel")); // Set { 'G', 'a', 'b', 'r', 'i', 'e', 'l' }
     console.log(new Set("JustGabrro").size); // 8
     

---

**პრაქტიკული გამოყენება:**
- `Set`-ები გამოდგება დუბლიკატების ამოსაღებად ან ელემენტების უნიკალური 
კოლექციების შესაქმნელად.
- ხშირად გამოიყენება მონაცემთა გაწმენდის, ფილტრაციის ან სტატისტიკური 
დათვლებისთვის.

**შეჯამება:**
- `Set` არის მარტივი და ეფექტური გზა, რომ მოიცილოთ დუბლიკატები ან 
იმუშაოთ უნიკალურ ელემენტებთან.
- მისი მახასიათებლები კოდის სისუფთავესა და ეფექტურობას ზრდის.
*/
