//What is a ternary? A great way to write a single line for an if/ if else statement

let w = 6;

//Ternary:

(w > 0) ? console.log('yes') : console.log('no');

// Instead of:
if(w>0){
  console.log('Yes');
}else{
  console.log('No');
}

if(w == 0){
    console.log('hey hey hey');
} else if( w <0){
    console.log('nah nah nah, goodbye!');
} else {
    console.log('see ya later!');
}

(w ==0 ) ? console.log('hey hey hey') : ( w < 0) ? console.log('nah nah goodbye') : console.log('see ya later!');

/* Challenge:
Write a ternary that does the same thing as the age challenge

Age Challenge (if else):

var age = 30;

if (age >= 25) {
	console.log("Yay! You can rent a car!");
} else if (age >= 21) {
	console.log("Yay! You can drink!");
} else if (age >= 18) {
	console.log("Yay! You can vote!");
} else {
	console.log("Sorry, you're too young to do anything fun.");
}

*/

let myAge = 10;

(myAge >= 25) ? console.log('Yay! You can rent a car!') : (myAge >= 21) ? console.log('Yay, you can drink!') : (myAge >= 18) ? console.log('Yay, you can vote!') : console.log('Sorry, youre too you to do anything!')



//var myAge = 10;


(myAge >= 25) ? console.log('Yay! You can rent a car!') : (myAge >= 21) ? console.log('Yay! You can drink!') : (myAge >= 18 ) ? console.log('Yay! You can vote!') : console.log("Sorry, you're too young to do anything fun.");



var yes = -8;

switch (true) {
  case (yes < 0 && yes > -10): 
    console.log('worked');
    break;
  case (yes > 0): 
    console.log('worked!');
    break;
  default: 
    console.log('didnt work');
}



(yes < 0 && yes > -10) ? console.log('worked') : (yes > 0) ? console.log('worked!') : console.log('did\'t work');// escape character
