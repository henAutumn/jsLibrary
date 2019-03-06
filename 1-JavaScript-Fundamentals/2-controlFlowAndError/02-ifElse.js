let weather = 75;

if(weather < 70){
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary!');
}

/*
Challenge: 
Bronze: 
Write an if else statement that checks your name; 
If it is your name, console log '<name>'
If the name does not match, console.log 'Hello, what is your name?'

Silver:
If It is your name, console log 'Hello, my name is <name>'

Gold:
If it is not your name, console log 'Hello, is your name <name> ?'
*/

let name = 'autumn'; 

if('Autumn' === name){
    console.log('Hello, my name is', name);
} else {
    console.log('Hello, is your name', name+'?');
}

/*
Challenge: 
**********
Use this string - 


let name = 'aUTuMN';

Bronze: 
Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string; 
If it is not console.log 'hey its not written correctly' 

Silver:
If the first letter of a string is uppercase, only console.log that letter
if it is not, console.log the rest of the string Without the first letter, and change them to lowercase 

Gold: 
If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase

*/

let myName = 'aUTuMn';

if(myName[0] == myName[0].toUpperCase()){
    console.log(myName[0] + myName.substr(1).toLowerCase());
} else {
    console.log(myName[0].toUpperCase() +myName.substr(1).toLowerCase());
}

/**************************
ELSE IF
**************************/
/* 
Challenge:
Look up the format for an Else If statement

Set a variable age and give it an age of your choice
Set an else if statement that convey the following:
If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
If the age is at least 18, console.log 'Yay! You can vote!'
If the age is at least 21, console.log 'Yay! You can drink!'
If the age is at least 25, console.log 'Yay! You can rent a car!'
*/

let age = 30; 

if(age >= 25){
    console.log('Yay! You can rent a car!');
} else if(age >= 21){
    console.log('Yay! You can drink!');
} else if(age >= 18){
    console.log('Yay! You can vote!');
} else {
    console.log("Sorry, you're too young to do anything");
}

/**************************
SWITCH
Switch statements helps us choose between several options for a variable and a default
Four main parts to a switch statement
switch, the argument being evaluated 
case, one of the options for the variable to be
break, this breaks us out of the switch statement once we hit our case
default, the default if we dont hit one of our cases, not neccesary 

**************************/
let friend="Bob";

switch (friend) {
  case "Autumn":
    console.log("Hey Autumn, when are you going rock climbing?");
    break;
  case "Dave":
    console.log("Hey Dave, how is Cooper?");
    break;
  case "Alecx":
    console.log("Hey Alecx, when are we playing DnD?");
    break;
  default:
    console.log(`I'm sorry, ${friend}, but do I know you?`);//string interpolation, backticks, under the escape key
}

/*
Challenge:
Using a switch case
Write a dessert menu;
If the dessert is pie, console.log 'Pie, pie, me oh my!'
If the dessert if cake, console.log 'Cake is great!'
If the dessert is ice cream, console.log 'I scream for ice cream!'
Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let dessert = 'carrots';

switch (dessert) {
  case 'pie':
    console.log('Pie, pie, me oh my!');
    break;
  case 'cake':
    console.log('Cake is great!');
    break;
  case 'ice cream':
    console.log('I scream for ice cream!');
    break;
  default: 
    console.log(`Sorry ${dessert} is not on the menu.`);
}

let yep = -8;

switch (true) {
  case (yep < 0 && yep > -10): 
    console.log('worked');
    break;
  case (yep > 0): 
    console.log('worked!');
    break;
  default: 
    console.log('didnt work');
}
