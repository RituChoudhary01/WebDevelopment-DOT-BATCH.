/*
Write a function called 'greet' that takes a name parameter and logs a greeting message to the console.
function greet(name){
console.log(`Hello ${name}! How are you doing today?`);
}
greet("RituChoudhary");
Q2.Write a function called 'getSquare' that takes a number parameter and returns its square.
function getSquare(number){
const square = number**2;
return square;
}
const result = getSquare(5);
console.log(result);

Q3.Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string.

function countLetters(str){
const counts = {};
for(let i=0;i<str.length;i++){
const char = str[i];
if(counts[char]){
counts[char]++;
}
else{
counts[char] = 1;
}
}
return counts;
}
const letterCounts = countLetters("WebDevelopment");
console.log(letterCounts);

Q4.Write a function called 'createCounter' that returns a function. The returned function should increment a counter variable each time it is called and return the current count.
function createCounter(){
let count = 0;
return function(){
count++;
return count;
};
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

Q5.Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all even numbers in the array.
function sumEvenNumbers(numbers){
let sum = 0;
for(let i=0;i<number.length();i++){
if(numbers[i]%2===0){
sum+=numbers[i];
}
}
return sum;
}
const numbers = [1,2,3,4,5,45,43,2];
console.log(sumEvenNumbers(numbers));

Q6.Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.
function sumArrayNumbers(arr){
let sum = 0;
for(let i=0;i<arr.length;i++){
sum+=arr[i];
}
return sum;
}
const numbers1 = [1,2,3,4,5];
console.log(sumArrayNumbers(numbers1));

const numbers2 = [-1, 2, -3, 4, -5];
console.log(sumArrayNumbers(numbers2));

Q7.Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 5.
function filterLongString(arr){
let filteredArr = [];
for(let i=0;i<arr.length;i++){
if(arr[i].length>5){
filteredArr.push(arr[i]);
}
}
return filteredArr;
}
console.log(filterLongStrings(["apple", "banana", "kiwi", "watermelon", "orange"])); // ['watermelon', 'orange']
console.log(filterLongStrings(["cat", "dog", "elephant", "giraffe"])); // ['elephant', 'giraffe']
console.log(filterLongStrings(["car", "bike", "bus", "train"])); // []
console.log(filterLongStrings(["123456", "123", "123456789"])); // ["123456", "123456789"]
console.log(filterLongStrings([])); // []

Q8.Write a function that takes an object and returns an array of all the keys in the object.
function getKeys(obj){
const keys = object.keys(obj);
return keys;
}
const person = {
name:"John",
age:30,
gender:"male",
city:"New York",
};
console.log(getKeys(person));
console.log(getKeys({}));

9.Write a function that takes an array of objects and returns an array of all the values of a specified property name.
function getPropertyValues(arr,propName){
const values = arr.map((obj)=> obj[propName]);
return values;
}
const people = [
{name:"Pranay",age:20,gender:"male"},
{name:"Nidhi",age:21,gender:"female"},
];
console.log(getPropertyValues(people, "name")); // ["Pranay", "Nidhi"]
console.log(getPropertyValues(people, "age")); //  [20, 21]
console.log(getPropertyValues(people, "gender")); // ["male", "female"]
console.log(getPropertyValues(people, "address"))//[undefined,undefined]

Q10.Write a function that takes an array of objects and returns the object with the highest value for a specified property name.

function findMaxByProperty(arr, prop) {
  // Check if the array is empty
  if (arr.length === 0) {
    return null;
  }

  // Initialize maxObj to first object in the array
  let maxObj = arr[0];

  // Loop through the array starting at second object
  for (let i = 1; i < arr.length; i++) {
    // Check if the current object's property value is greater than maxObj's property value
    if (arr[i][prop] > maxObj[prop]) {
      // If yes, update maxObj to current object
      maxObj = arr[i];
    }
  }

  // Return the object with highest value for the specified property
  return maxObj;
}

// Test case 1
const arr1 = [
  { name: "apple", price: 1 },
  { name: "banana", price: 2 },
  { name: "orange", price: 3 },
];
const maxObj1 = findMaxByProperty(arr1, "price");
console.log(maxObj1); // { name: 'orange', price: 3 }

// Test case 2
const arr2 = [
  { name: "Pranay", age: 20 },
  { name: "Nidhi", age: 21 },
  { name: "Soumya", age: 21 },
];
const maxObj2 = findMaxByProperty(arr2, "age");
console.log(maxObj2); // { name: 'Nidhi', age: 21 }

// Test case 3
const arr3 = [];
const maxObj3 = findMaxByProperty(arr3, "price");
console.log(maxObj3); // null
*/