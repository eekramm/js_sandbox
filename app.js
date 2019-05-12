// Log to console Notes

// String
// console.log("Hello World");
// Numbers
// console.log(123);
// Boolean
// console.log(true);
// Variable
// var greeting = "Hello World";
// console.log(greeting);
// Array
// console.log([1, 2, 3, 4]);
// Objects
// console.log({ a: 1, b: 2 });
// Tables
// console.table({ a: 1, b: 2 });
// Error
// console.error("This is some error");
// Warning
// console.warn("This is a warning");
// Time
// console.time("Hello");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.timeEnd("Hello");
// Clear the console
// console.clear();

// Log to console Notes End

////////////////////////////////////////////////////////

// Variables
// Three key words to define a variable (var, let, const)
// let & const are the ones to use (var will be used bellow as an example)

// VAR
// var name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// Initialize a variable (Init var) setting the veriable to undefined
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// Characters that can be inside of a variable
// letters, numbers, _, $
// Can not start with a number

// Multi word variables
// var firstName = "John"; // Camel case
// var first_name = "Sara"; // Underscore
// var FirstName = "Tom"; // Pascal case

// LET
// let name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// let name;
// name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);
// both example of let are the same the second on is just Initializing the variable

// CONST
// const name = "John";
// console.log(name);
// Can not reassign
// If we try to say (name = "Sara";) this will error if name is a const
// Have to assign a value
// If we try to say (const = greeting;) this will error

// When setting const to an object you can change the values with in the object
// You can not redefine the object

// ex. changing the values
// const person = {
//     name: "John",
//     age: "30"
// }

// person.name = "Sara"
// person.age = 32;

// console.log(person);

// const numbers = [1,2,3,4,5];
// numbers.push(6);

// ex. redefining the object (can not do this)
// const person = {
//     name: "John",
//     age: "30"
// }

// person = {
//     name: "Sara",
//     age: 32
// }

// const numbers = [1,2,3,4,5];

// numbers = [1,2,3,4,5,6];

// Variable End

////////////////////////////////////////////////////////

// Data Types

// PRIMITIVE

// Sting
// const name = "John Doe";
// console.log(typeof name); // ran "string" in the console

// Number
// const age = 45;
// console.log(typeof age); // ran "number" in the console

// Boolean
// const hasKids = true;
// console.log(typeof hasKids); // ran "boolean" in the console

// Null
// const car = null;
// console.log(typeof car); // ran "object" this is kind of a bug

// Undefined
// let test;
// console.log(typeof test); // ran "undefined" in the console

// Symbol
// const sym = Symbol();
// console.log(typeof sym); // ran "symbol" in the console

// REFERENCE TYPES - Objects

// Array
// const hobbies = ["movies", "music"];
// console.log(typeof hobbies); // ran "object" in the console

// Object Literals
// const address = {
//   city: "Boston",
//   state: "MA"
// };
// console.log(typeof address); // ran "object" in the console

// Dates
// const today = new Date();
// console.log(typeof today); // ran "object" in the console

// Data Type End

////////////////////////////////////////////////////////

// Type Conversion - taking a variable and changing the data type

// let val;

// Number to string
// val = 5; // to convert to a string you can wrap 5 in the String() function
// val = String(5);
// val = String(4 + 4);

// Output
// console.log(val); // ran "5" in the console
// console.log(typeof val); // ran "number" in the console
// console.log(val.length); // ran "undefined" .length only works on strings it gives the number of character in a string

// Boolean to a string
// val = String(true);

// Output
// console.log(val); // ran "" in the console
// console.log(typeof val); // ran "" in the console
// console.log(val.length); // ran "" in the console

// Date to a string
// val = String(new Date());

// Output
// console.log(val); // ran the date in the console
// console.log(typeof val); // ran "string" in the console
// console.log(val.length); // ran "57" in the console

// Array to string
// val = String([1, 2, 3, 4]);

// Output
// console.log(val); // ran "1, 2, 3, 4" in the console
// console.log(typeof val); // ran "string" in the console
// console.log(val.length); // ran "7" in the console

// toString()
// val = (5).toString();
// val = true.toString();

// Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// String to number
// val = Number("5");
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number([1, 2, 3]);
// val = Number("hello");

// val = parseInt("100");
// val = parseFloat("100.30");

// Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed());

// const val1 = String(5);
// const val2 = 6;
// const sum = Number(val1 + val2);

// console.log(sum);
// console.log(typeof sum);

// Type Conversion End

////////////////////////////////////////////////////////

// Numbers & The Math Object

// const num1 = 100;
// const num2 = 50;
// let val;

// Simple math with numbers
// val = num1 + num2; // 150
// val = num1 * num2; // 5000
// val = num1 - num2; // 50
// val = num1 / num2; // 2
// val = num1 % num2; // Modulus operator (it divides the left side by the right side, and then it returns the remainder) in this case 0

// Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4); // rounds number nearest whole number (2)
// val = Math.ceil(2.4); // rounds number up (3)
// val = Math.floor(2.8); // rounds number down (2)
// val = Math.sqrt(64); // gives the square root of the number (8)
// val = Math.abs(-3); // gives the absolute value of the number (3)
// val = Math.pow(8, 2); // gives the power of the number (8 to the 2nd power = 64)
// val = Math.min(2, 33, 3, 1, 55, 6, 3); // returns the smallest number
// val = Math.max(2, 33, 3, 1, 55, 6, 3); // returns the largest number
// val = Math.random(); // returns a random decimal

// how to return a random whole number
// Math.random() returns a random decimal
// multipling by max number you want this case 20
// the highest numbers it will give you is 19.XXX so we add 1 to get us to 20.XXX
// wrap it in Math.floor() and it will round it down to the nearest whole number
// val = Math.floor(Math.random() * 20 + 1);

// console.log(val);

// Numbers & The Math Object End

////////////////////////////////////////////////////////

// String Methods & Concatenation

// const firstName = "William";
// const lastName = "Johnson";
// const age = 36;
// const str = "Hello ther my name is Eythan";
// const tags = "web design, web development, developer";

// let val;

// val = firstName + lastName; // WilliamJohnson

// Concatenation
// val = firstName + "" + lastName; // William Johnson

// Append
// val = "Eythan";
// val = "Kramm"; // Kramm will over write Eythan and Kramm will be ran

// val = "Eythan ";
// val += "Kramm"; // Eythan Kramm

// val = "Hello, my name is " + firstName + " and I am " + age;

// Escaping
// val = "That's awesome, I can't wait";

// Length (property)
// val = firstName.length; // counts the number of characters in a string (7)

// concat (method)
// val = firstName.concat("", lastName); // used to concatenate (William Johnson)

// Change case
// .toUpperCase() (method)
// val = firstName.toUpperCase(); // WILLIAM
// .toLowerCase() (method)
// val = firstName.toLowerCase(); // william

// Get a spicific letter from a string
// val = firstName[0]; // W
// val = firstName[2]; // l

// indexOf() (method)
// val = firstName.indexOf("l"); // will give us the index of the first L in this case (2)
// val = firstName.lastIndexOf("l"); // counts backward from the end of the string this case (3)

// charAt() (method)
// val = firstName.charAt("2"); // this will give you the character at index 2 in this case (l)

// Get last character
// val = firstName.charAt(firstName.length - 1);

// substring() (method)
// val = firstName.substring(0, 4); // Will

// slice() (method)
// val = firstName.slice(0, 4); // Will
// val = firstName.slice(-3); // iam if you put a negative number it will start from the back

// split() (method) turns a string into an array
// val = str.split(""); // splits the string at the '' spaces so every word is an index in the array
// val = tags.split(","); // splits the string at the ','

// replace() (method) replace something insid a string
// val = str.replace("Eythan", "Brad");
// val = firstName.replace("William", "Eythan");
// val = firstName.replace("W", "X");

// includes() (method) gives you a true or false based on if something is in the string
// val = str.includes("Hello"); // true
// val = str.includes("foo"); // false

// console.log(val);

// String Methods & Concatenation End

////////////////////////////////////////////////////////

// Template Literals or Template Strings

// const name = "John";
// const age = "31";
// const job = "Web Developer";
// const city = "Miami";

// Without template strings (es5) old way of doing things
// html =
//   "<ul><li>Name: " +
//   name +
//   "</li><li>Age: " +
//   age +
//   " </li><li>Job: " +
//   job +
//   " </li><li>City: " +
//   city +
//   " </li></ul>";

// With template strings (es6)

// function hello() {
//   return "hello";
// }

// html = `
// <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>City: ${city}</li>
//     <li>${2 + 2}</li>
//     <li>${hello()}</li>
//     <li>${age > 30 ? "Over 30" : "Under 30"}</li>
// </ul>
// `;

// document.body.innerHTML = html;

// Template Literals or Template Strings End

////////////////////////////////////////////////////////

// Arrays and Array Methods

// Creat some arrays
// const numbers = [43, 56, 33, 23, 44, 36, 5];
// const numbers2 = new Array(22, 45, 33, 76, 54);
// const fruit = ["Apple", "Banana", "Orange", "Pear"];
// const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

// let val;

// Get array length
// val = numbers.length;
// Check if is array
// val = Array.isArray(numbers);
// Get single value -arrays are 0 based
// val = numbers[3]; // gives the number in the 3rd index (in this case 23)
// val = numbers[0]; // in this case 43
// Insert into array
// numbers[2] = 100; // inserts 100 into the 2nd index of the numbers array
// Find index of value
// val = numbers.indexOf(36);

// MUTATING ARRAYS
// // Add on to end of array
// numbers.push(250);
// // Add on to front of array
// numbers.unshift(120);
// // Take off from end of array
// numbers.pop();
// // Take off from front of array
// numbers.shift();
// // Splice values out of the array
// numbers.splice(1, 3);
// // Reverse the array
// numbers.reverse();

// Concatenate array
// val = numbers.concat(numbers2);

// Sorting arrays
// val = fruit.sort(); // sorted alphabetically
// val = numbers.sort(); // This will just sort from least to greatest just based of the first number

// Use the "compare function"
// x and y can be called anything a and b are also popular
// this will sort the numbers in order from least to greatest
// val = numbers.sort(function(x, y) {
//   return x - y;
// });
// greatest to least
// val = numbers.sort(function(x, y) {
//   return y - x;
// });

// Find
// function under50(num) {
//   return num < 50;
// }

// val = numbers.find(under50);

// function over50(num) {
//   return num > 50;
// }

// val = numbers.find(over50);

// console.log(numbers);
// console.log(val);

// Arrays and Array Methods End

////////////////////////////////////////////////////////

// Object Literals
