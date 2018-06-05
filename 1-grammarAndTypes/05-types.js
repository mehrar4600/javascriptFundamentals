//types

//booleans--yes or no, true or false
var bool = true; //true aren't in quotes 
console.log(bool);

let noBool = false;
console.log( typeof noBool);

//null null is not zero but its a container but theres no value in it
var empty = null;
console.log(typeof empty);

//undefined - no container at all
let grass;
console.log(grass);

//numbers
var degrees = 90;
console.log(`it is currently ${degrees} degrees.`);

var precise = 999999999999999 // can write upto 15 times
console.log(precise);

var rounded = 9999999999999999; // cant take 16 numbers thats why its rounded
console.log(rounded);

var notQuite = 0.2 + 0.1;//js adds extra values at the end of it because js has no clues how many values can be after that point numbers
console.log(notQuite);

//strings - any values with quotes
let stringOne = "doublequotes";
let stringTwo = 'single quote';
console.log(stringOne, stringTwo);

//numbers vs strings
let first = 1050 + 100;
let second = '1050' + '100';
console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

let third = 1050 + '100';
console.log(typeof third);//concates 

var firstName = 'Rajni';
var lastName = 'Mehra';
var houseNumber = 10381;
var street = 'Morning Song Drive';
var aptNumber = null;
var city = 'Fishers';
var state = 'IN';
var zipCode = 46038;

console.log(firstName +" " + lastName + " "+ houseNumber + " "+ street + " " + city +" "+ state + " "+ zipCode);

//objects-its a container which can hold multiple datatypes. donated by curly braces
let burritoNow = {
    size: 'large',// left is key and values on the left side
    quantity: 4,
    now: true
};
console.log(burritoNow);

//Arrays-great for making lists
var burritos = ['large',4, true];
console.log(burritos);


















