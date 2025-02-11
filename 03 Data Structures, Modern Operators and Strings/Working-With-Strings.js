"use strict";

// PART 1.
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
    // B and E are middle seats
    const s = seat.slice(-1);
    if (s === "B" || s === "E")
    console.log("You got the middle seat");
    else console.log("You got lucky");
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log( new String("Gabriel"));
console.log(typeof new String("Gabriel"));

console.log(typeof new String("Gabriel").slice(1));


// PART 2.
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fox capitalization in name
const passenger = "GaBRIel";
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing email
const email = "hello@gabriel.io";
const loginEmail = "  Hello@Gabriel.Io \n";

// Worst case
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// Best case
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = "288,97F";
const priceUS = priceGB.replace("F", "$").replace(",", ".");
console.log(priceUS);

const announcement = "All passengers come to boarding door 23. Boarding door 23.";

console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

// Booleans
const planeNew = "Airbus A320neo";
console.log(planeNew.includes("A320"));
console.log(planeNew.includes("Boeing"));
console.log(planeNew.includes("Airb"));

if (planeNew.startsWith("Airbus") && planeNew.endsWith("neo")) {
    console.log("Part of the NEW ARibus family");
};

// Practice exercise
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if (baggage.includes("knife") || baggage.includes("gun")) {
        console.log("You are NOT allowed on board");
    } else {
        console.log("Welcome aboard.");
    }
};
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");


// PART 3.
// Split and Join
console.log("a+very+nice+string".split("+"));
console.log("Gabriel Jakhveladze".split(" "));

const [firstName, lastName] = "Gabriel Jakhveladze".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ")
console.log(newName);

const capitalizeName = function (name) {
    const names = name.split(" ");
    const namesUpper = [];

    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("gabriel jakhveladze");

// Padding
const message = "Go to gate 23.";
console.log(message.padStart(25, "+").padEnd(35, "+"));
console.log("Gabriel".padStart(20, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
    const str = number + "";
    const last = str.slice(-4);
    return last.padStart(str.length, "*");
}

console.log(maskCreditCard(652190))
console.log(maskCreditCard(434875323));
console.log(maskCreditCard("3234231452251"));

// Repeat
const message2 = "Bad weather... All Departues Delayed...";
console.log(message2.repeat(5));

const planesInLine = function(n) {
    console.log(`There are ${n} planes in line ${"Alert".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
