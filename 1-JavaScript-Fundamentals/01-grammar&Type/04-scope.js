var x = 0;

function scope() {
    var x = 33;
    console.log(x);
}
scope();
console.log(x);

let y = 12;

function scoper() {
    y = 3;
    console.log(y);
}
scoper();
console.log(y);


var x = 12;

function varTest() {
    var x = 3;
    if (1 == 1) {
        var x = 45;
        console.log(x);
    }
    console.log(x);
}

varTest();
console.log(x);



var x = 12;

function letTest() {
    var x = 33;
    if (true) {
        let x = 45;
        console.log(x);
    }
    console.log(x)
}
letTest();
console.log(x);



function constTest() {
    const scope = 1;
    if (true) {
        const scope = 2;
        console.log(scope); // 2
    }
    console.log(scope); // 1
}

constTest();

/*****     Hoisting */

console.log(scissors); 

scissors = 'blue';

console.log(scissors);
var scissors; 

var a = 'This is not hoisted';
b(); 
console.log(a);

function b() {
     const a = 'Hey!';
}