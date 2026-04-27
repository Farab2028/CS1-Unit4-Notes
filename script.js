// SINGLE LINE COMMENT
/* MULTI-LINE COMMENT */

/* The JS code below is an example STATEMENT (instruction/command)
every statement ends in a SEMICOLON */
console.log("hello world");

// VARIABLES are named storage containers for data


// DECLARE a new variable (make space)
let username;

// ASSIGN a value to a variable
username = "farab27";

// see the value stored in a variable
console.log(username);

// DECLARE + ASSIGN in one line
let pokemon = "pikachu";
let luckyNum = 27; // no quotes around numbers!

// look at our new variables
console.log(pokemon);
console.log(luckyNum);

// Change the value stored in a var
luckyNum = 15;
console.log(luckyNum);

// MATH OPERATORS (+, -, *, /)
let age = 15;
console.log(age);
let ageInTen = age + 10;
console.log(ageInTen);
let ageDogYears = age / 7;
console.log(ageDogYears);

// PEMDAS applies when you have multiple operators
let score = 0;
score = score + 100 - 50 / 2 * (5 + 20);
console.log(score);

// Combine 2 "literal" Strings (CONCATENATION)
console.log("My age is " + "age");
// OR concatenate a literal string with a variable
console.log("My age is " + age);

let user = "Fara";
let message = "Welcome " + user + "!";
console.log(message);

/* FUNCTIONS:
Reusable sets of code statements that perform a specific task/process/routine
*/

// console.log is a built-in function we use
console.log("I just used a function!");

// DEFINE (create) your own function
function prepareForSleep() {
    // STATEMENTS (actions) to execute for this routine
    console.log("1. Put on PJs");
    console.log("2. Brush teeth");
    console.log("3. Turn the lights off");
}

// CALL (use) our function
prepareForSleep(); // can call it again!

/* Selection (CONDITIONS)
a BOOLEAN EXPRESSION is like a question that has a boolean (true/false) answer
*/

console.log( 30 > 10 ); // true
console.log("Q: Is 10 less that 2?");
console.log( 10 < 2 );

// Check for EQUALITY, use == (or ===)
console.log(10 == 10);
console.log(5 == 7);
console.log(5 != 7); // NOT equal

// Can use these operators to compare Strings
console.log("Parrot" > "Dog"); // true, the letter P comes after D in the dictionary order
console.log("A" < "a"); // true
console.log("fara" = "Fara");

// Can use comparison operators btwn VARIABLES & VALUES
let password = "abc123!";
console.log("abc123!" == password);

// Make decisions using IF STATEMENTS
let myAge = 16;

if ( myAge >= 17 ) {
    // statements here only run if expression is TRUE
    console.log("You are old enough to get your NY license");

}

// ELSE IF blocks test other options
else if ( myAge == 16 ) {
console.log("You can get your learners permit");
}

// ELSE blocks handle the "otherwise..." case
else {
    console.log("Not eligable for a license");
}













