import "./styles.css";

/* Data Types :
undefined, null, boolean, string, symbol, number ,
and object
*/
//Symbol is a unique value
//Object stores key value pairs
//Variables allow computers to store and manipulate data

var myName = "Asher"
//Used throughout the whole program
let ourName = "AsherSandbox"
//Only used in the scope you declare it
const pi = 3.14
//Variable that can never change

var a; //Declaring a vairable
var b = 2 // Assigning a variable. 2 is being assigned to B
console.log(a);
a = 7; //7 being assigned to A

b = a;

console.log(a);

var a = 9; //var a = 9 is both declaration and assignment 
//Initialize these three variables 
var a = 5;
var b= 10;
var c = "I am a";
//

a = a + 1;
b = b + 5;
c = c + " string";
console.log(c);

//

var myVar = 87;
myVar++;
console.log(myVar);
//Incrementing Numbers

//Decrementing Numbers
var myVar = 11;
myVar--;
console.log(myVar);

//Remainder operator used to determine if a number is odd or even
var remainder;
remainder = 11 % 3;
console.log(remainder);

//Compound Assignment with Augmented Addition

var a = 3;
var b = 17;
var c= 12;

a +=  12;
b +=  b;
c +=  7;
console.log(b);
//Adding the value to the variable and assigning the asnswer to the variable



document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
