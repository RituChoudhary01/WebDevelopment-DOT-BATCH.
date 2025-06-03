// Object in jS
const rectangle = {
    length:10,
    breadth:5,
    draw: function(){
        console.log("Draw");
    },
};
console.log(rectangle);
console.log(rectangle.draw());
// Object Creation
//1.factory function
function createRectangle(){
    return rectangle = {
        length:10,
        breadth:5,
        draw: function(){
            console.log("Draw");
        },
    } 
}

function createRectangle(len, bre){
    const rectangle = {
        length: len,
        breadth: bre,
        draw() {
            console.log('drawing rectangle');
        }
    };
    return rectangle; // return the object
}

let rectangleObj1 = createRectangle(5, 4);
let rectangleObj2 = createRectangle(3, 5);
let rectangleObj3 = createRectangle(78, 56);

// Example usage:
rectangleObj1.draw(); // Output: drawing rectangle

// Constructor Function -> Pascal Notation -> first letter of every word is Capital  NumberOfStudents
function Rectangle(){
    this.lenght = 1;
    this.breath = 2;
    this.draw = function(){
        console.log('drawing');
    }
}

function Rectangle1(len, bre){
        this.length = len;
        this.breadth = bre;
        this.draw= function(){
            console.log('drawing');
        }
    }
// object creation using constructor function
let rectangleObject = new Rectangle(4,6);
rectangleObject.color = 'yellow';
console.log(rectangleObject);
delete rectangleObject.color;
console.log(rectangleObject);

let Rectangle11 = new Function(
        'length', 'breadth',
    `this.length = length;
    this.breadth = breadth;
    this.draw= function() {
        console.log('drawing');
    }`);
    // object creation using Rectangle1
   let rect = new Rectangle11(2,3);
   rect.length;
   console.log(rect);
   rectangle.length;
   rectangle.breadth;
   rectangle.draw();

// Functions are Objects
// Types in JS
// Primitive or value Types
// Reference types or Objects
let a = 10;
let b = a;
a++;
console.log(a);
console.log(b);
let A = {value :10};
let B = A;
A.value++;
console.log(A.value);
console.log(B.value);
// primitive are copied by value
// reference types copied by their address/reference
let x = 10;
function inc(a){
    a++;
}
inc(x);
console.log(x);
// for in loop
let human = {
    name:'John',
    age:'30',
    city:'New York',
};
for(let key in human){
    console.log(key,human[key]);
}
// for-of loop apply only on  iterable object
// give error
// for(let key of human){
//     console.log(key);
// }

for(let key of Object.entries(human)){
    console.log(key);
}
for(let key of Object.keys(human)){
    console.log(key);
}
if('color' in human){
    console.log('Present');
}
else{
    console.log('Not Present');
}
// object Cloning
// Garbage Collection: we have no control over it always run in background

// object clone #1
let src = {
    a:10,
    b:20,
    c:30
};
let dest = {};
for(let key in src){
    dest[key] = src[key];
}
console.log(dest);
src.a++;
console.log(dest);
// object cloning #2
let src1 = {
    a:13,
    b:23,
    c:33
};
let src2 = {value :25};
let dest1 = Object.assign({},src1,src2);
console.log(dest1);
src1.a++;
console.log(dest1);
// object cloning #3
let src3 = {
  a :10,
  b :20,
  c :30
};
let dest3 = {...src3};
console.log(dest3);
src3.a++;
console.log(dest3);



