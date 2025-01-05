"use strict";

/*
Write a program that gets a list of variable 
names in underscore_case and converts them 
to camelCase.

Input comes from a textarea in the DOM, and 
conversion happens when a button is pressed.

TEST DATA (paste to textarea):
underscore_case
 first_name
Some_Variable
 calculate_AGE
delayed_departure

OUTPUT (5 console.logs):
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines 
a new line in the textarea 😉
HINT 2: The solution only needs to work for 
a variable made out of 2 words, like a_b
HINT 3: Start without worring about the ✅. Tackle
that only after you have the variable name conversion working😉
HINT 4: This challange is difficult on purpose, so start 
watching the solution in case you're stuck. 
Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 🙂
*/

// Define the test data as a multiline string
const testData = `
underscore_case
 first_name
Some_Variable
 calculate_AGE
delayed_departure
`;

// Split the data into lines
const variableNames = testData.trim().split("\n");

// Function to convert underscore_case to camelCase
const toCamelCase = (str) => {
    const [first, ...rest] = str.toLowerCase().split("_");
    return first + rest.map(word => word[0].toUpperCase() + word.slice(1)).join("");
};

// Iterate over variable names and log results
variableNames.forEach(name => {
    const camelCaseName = toCamelCase(name.trim());
    console.log(camelCaseName);
});

