/* 
Booleans
******************
What is a boolean? Boolean can represent: true/false, yes/no, on/off
*/ 

let i = true;

let j = false;
/*        (1)
1-Keyword for boolean - no quotation marks
*/
let on = true;
console.log(on); // true

let off = false;
console.log(off); // false

/* 
Null
******************
Null = empty value (not 0; not undefined)
It is like an empty container; nothing is in it, but it still exists as a space to fill
*/

let empty = null;
console.log(empty); // null

 
/*
Undefined
******************
Undefined = no value assigned (not even an empty container)

UNDEFINED IS NOT AN ERROR
*/

let undef = undefined;// never do this
console.log(undef); // undefined

let grass;
console.log(grass); // undefined

/*
Null vs. Undefined 
******************
Null is like a container with nothing in it
Undefined is when a variable has never been set, or hasnt been created yet. 

*/

/* 
Numbers
**********
Numbers are exactly what they sounds like, numbers. In JS, you dont need anything special to write them. 
*/

let degrees = 90;
console.log(degrees);


let precise = 999999999999999; // 15 9's
console.log(precise); // 999999999999999

let rounded = 9999999999999999; // 16 9's
console.log(rounded); // 

let notQuite = 0.2 +0.1;
console.log(notQuite);

let a = '123';

let b = Number(a);
console.log(b);

/*
Strings
*********
Strings are Datatypes used to represent text and are wrapped in either a single or double quote
Strings are Primative Datatype. This also includes Numbers, Booleans, Null, Undefined and others 
*/

let stringOne = "double quotes";
let stringTwo = 'single quotes';

console.log(stringOne, stringTwo);

let first = 1050 +100;
let second = '1050' + '100'; 

console.log(first);
console.log(second);

let firstName = "Autumn";
let lastName = "Henderson"; 

console.log(firstName + lastName);
console.log(firstName +' '+ lastName);
console.log(firstName, lastName);

/*
Objects
*************

*/

let car1 = {
    color: 'red',
    tires: 4,
    extras: 'A/C and Radio',
    cool: true
  };

console.log(car1);
console.log(typeof car1);

/*
Arrays
************
Arrays are containers that hold lists of items
*/
let list =  [  'item1',   'item2',    'item3', true];
 /*   (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas
*/

let burritos = ['large',4,true];
console.log(burritos); 
console.log( typeof burritos);

// Addition Vs Concatenation
//************************** */

let x = 10; 
let y = 15;
console.log(x + y);

let third = 1050 +'100';
console.log(third);
console.log(typeof third);

/* 
Challenge: 
Set 7 (or 8) variables:
firstName
lastName
houseNumber
aptNumber (if applicable)
street
city
state
zipcode

Set each variable to its respective type.

console.log your whole address (with the space between variable).
*/

let fName = 'Autumn';
let lName = 'Henderson';
let houseNumber = 12175;
let street = 'Visionary Way';
let city = 'Fishers';
let state = 'IN';
let zipcode = 46038;

console.log(fName, lName + ',', houseNumber, street + ',', city + ',', state, zipcode);

/*
Strings - Properties
********************
Properties are qualities associated with a datatype. 
Strings have properties, or the qualities associated with that string.
The length of a string is a property.  
 */ 

 let myName = " Autumn"; 
 console.log(myName.length); 

 /*Methods
************
Methods are like tool that can help us manipulate our data. 
.Property and .Methods() *no parenthesis for properties*

*/

let myNameIs = "Autumn";
console.log(myNameIs.toUpperCase());

let home = "My home is in nashville"; 
console.log(home.includes('indianapolis')); 


// Challenge: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string

let sent = 'This sentence will be split into individual parts ';

let newStr = sent.split(' ');

console.log(newStr);