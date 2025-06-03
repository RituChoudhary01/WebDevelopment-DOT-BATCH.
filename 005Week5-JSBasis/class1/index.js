console.log("I am write in external js file");
/*
varname is a stroge 
*/ 
let num = 10;
console.log(num);
num = 'Ritu';
console.log(num);
num = false;
console.log(num);
num = 23.456;
console.log(num);
// let is a block scope variable
// var is a function and global scope variable.
var num2 = 20;
console.log(num2);
const number = 12;
// donot change the value of const variable
//  varible naming rule
// 1.cannot use reserved keywords
// 2.meaningful name 
// 3.canot start with number
// 4.use camelcase
// 5.cannot contains space and hypen.

// Primitive Types
// 1.string 2.Number 3.boolean 4.undefined 5.null 6.symbol 7.bigInt
// Reference Types 1.Object 2.Arrays 3.Functions
// Object
let Person = {
    firstName : "Ritu",
    age:24,
};
console.log(Person);
//acces properties of object by dot operator and breacket operator
console.log(Person.firstName);
console.log(Person[firstName]);
// operators
// Arithmetic 
// Assigment
// Comparson
// Bitwise
// Logical
console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2/3);
console.log(2%3);
console.log(2**3);
// pre/post increment and decrement
let a = 5;
let b = 10;
console.log((++a)*(b--));
console.log(a,b);
console.log((a++)*(b--));
console.log(a,b);
console.log((++a)*(--b));
console.log(a,b);
console.log((a++)*(--b));
console.log(a,b);
x+=5;//x = x+5
x-=5;//x = x-5
x*=5;//x = x*5
x/=5;//x = x/5
console.log(a>b);
console.log(a<=b);
console.log(a<b);
console.log(a==b);
console.log(a!=b);
console.log(a===b);
console.log(a!==b);
// Loose equality == check only  value
// Strict equality ===  check value and type
// Ternary Operator
// cond ? value1 : value2
let age = 34;
let status1 = age>=18 ?'I can vote':'I cannot vote';
console.log(status1);
// AND OR NOT
// concept of False and Truthy
// Short Circuiting
console.log(false||5);
console.log(false&&5);
console.log(true||5);
console.log(false&&5&&ritu);
console.log(false&&5||ritu);
console.log(true||ritu||5);
// Bitwise AND and OR Operator
// control Statements
// if-else
// Switch
let marks  = 98;
if(marks >= 90){
 console.log('A');
}
else if(marks >= 80){
    console.log('B');
   }
else if(marks >= 70){
    console.log('C');
   }
else if(marks >= 60){
    console.log('D');
   }
else console.log('E');

   let numb = 2;
    switch(num){
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    default: console.log('D');
   }
// Loops
// for loop
// while loop
// do-while loop
// what is an infinite loop
// for-in loop
// for-of loop
for(let i=1;i<=5;i++){
    console.log(i);
}
let i = 1;
while(i<=5){
    console.log(i);
    i++;
}
let y = 1;
do{
    console.log(y);
    y++;
}while(y<6);



