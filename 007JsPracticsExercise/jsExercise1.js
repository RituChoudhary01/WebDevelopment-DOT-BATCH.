/*
Q1.Write a function that takes two numbers as arguments and returns their sum.
function addNumbers(num1,num2){
return num1+num2;
}
console.log(sumNumbers(5, 10));

Q2.Write a function that takes a string as an argument and returns its length.
function getStringLength(str){
return str.length;
}
console.log(getStringLength("Hello, World!"));

Q3.Write a program that takes two numbers and displays their sum, difference, product, and quotient.
function calculate(num1, num2) {
const sum = num1+num2;
const diff = num1-num2;
const product = num1*num2;
const quotient = num1/num2;
console.log("Sum: " + sum);
console.log("Difference: " + diff);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
}
calculate(10, 5);

Q4.Write a function that takes two numbers as arguments and returns the larger number.
function getLargerNumber(num1, num2) {
if (num1 > num2) {
return num1;
}
else {
return num2;
}
}
console.log(getLargerNumber(10, 20));

Q5.Write a program that displays a string in reverse order.
const originalString = "codeHelp";
function reverseString(str){
const reversedString = str.split("").reverse().join("");
return reversedString;
}
console.log(reverseString(originalString));

Q6.Write a program that takes a number and checks whether it is positive, negative, or zero.
function checkNumber(num) {
if (num > 0) {
console.log("Positive");
}
else if (num < 0) {
console.log("Negative");
}
else {
console.log("Zero");
}
}
checkNumber(10); 
checkNumber(-5); 
checkNumber(0); 
checkNumber(1); 
checkNumber(-1);

Q7.Write a program that takes a number and prints the multiplication table for that number.
function printMultiplicationTable(num) {
for (let i = 1; i <= 10; i++) {
console.log(num + " x " + i + " = " + (num * i));
}
}   
printMultiplicationTable(5);
Q8.Write a program that takes a number and calculates the sum of all numbers from 1 to that number.
function calculateSum(num) {
let sum = 0;
for (let i = 1; i <= num; i++) {
sum += i;
}
console.log("Sum of numbers from 1 to " + num + " is: " + sum);
}
calculateSum(10);
calculateSum(5);
calculateSum(-5);

Q9.Write a program that takes a string and prints out the number of vowels in the string.
function countVowels(str){
  // define an array of vowels
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  // loop through each character in the string
  for (let i = 0; i < str.length; i++){
    // check if the character is a vowel
    if(vowels.includes(str[i].toLowerCase())){
      count++;
    }
  }
  return count;
}
console.log(countVowels("CodeHelp")); 
console.log(countVowels("hello")); 
console.log(countVowels("world")); 
console.log(countVowels("aeiou")); 
console.log(countVowels("JavaScript")); 
console.log(countVowels("Pranay")); 

Q10.Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.
For example, given the arrays [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the function should return [3, 4, 5].

function findCommonElements(arr1, arr2){
  // Create an empty array to hold the common elements
  let commonElements = [];
 // Loop through each element in arr1
  for (let i = 0; i < arr1.length; i++) {
 // Check if the current element is in arr2
    if (arr2.includes(arr1[i])) {
      // If the element is in arr2 and not already in commonElements array, add it
      if (!commonElements.includes(arr1[i])) {
        commonElements.push(arr1[i]);
      }
    }
  }
 // Sort the commonElements array in ascending order
  commonElements.sort((a, b) => a - b);
 // Return the commonElements array
  return commonElements;
}

// Example usage
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const commonElements = findCommonElements(arr1, arr2);
console.log(commonElements); // Outputs: [3, 4, 5]

*/