// Math operations
console.log(Math.round(1.8)); // 2
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.6)); // 2
console.log(Math.max(2, 45, 6, 34)); // 45
console.log(Math.min(2, 45, 6, 34)); // 2
console.log(Math.abs(1.6)); // 1.6
console.log(Math.abs(-45)); // 45

// String objects
let lastName = 'Babber';
let lastName1 = new String('Love');
console.log(typeof lastName);  // string
console.log(typeof lastName1); // object

// String methods
console.log(lastName.length); // 6
console.log(lastName.includes('Bab')); // true
console.log(lastName.startsWith('Babb')); // true
console.log(lastName.trim()); // trim removes whitespace, not substrings

let message = 'This is my first Message';
let words = message.split(' ');
console.log(words); // ['This', 'is', 'my', 'first', 'Message']

// Template literal (multi-line)
let msg = `This 
is 
my thanks 
you 
message`;

// Date operations
let date = new Date();
console.log(date);

let date2 = new Date('June 20 1998 07:15');
console.log(date2);

let date3 = new Date('1998-11-02'); // Better format (YYYY-MM-DD)
console.log(date3);

let date4 = new Date(1998, 11, 20, 7); // Month is 0-based, so 11 = December
date4.setFullYear(1947);
console.log(date4);

// Arrays: Adding, Finding, Removing, Combining
let number = [2, 3, 4, 5, 6];
console.log(number);

console.log(number.indexOf(9)); // -1
if (number.indexOf(4) !== -1)
    console.log("present");

console.log(number.includes(7)); // false
console.log(number.indexOf(4, 2)); // index from position 2

// Searching in object arrays
let courses = [
    { no: 1, naam: 'Love' },
    { no: 2, naam: 'Rahul' },
];
console.log(courses);

// These won't work because the object references are different
console.log(courses.indexOf({ no: 1, naam: 'Love' })); // -1
console.log(courses.includes({ no: 1, naam: 'Love' })); // false

// Correct way: use find()
let course = courses.find(function(course){
    return course.naam === 'Love';
});
console.log(course);

let course1 = courses.find(course => course.naam === 'Love');
console.log(course1);

// Removing elements from array
let numb = [1, 2, 3, 4];
let numbers1 = numb;
numb = []; // This reassigns the reference
console.log(numb);      // []
console.log(numbers1);  // [1,2,3,4]

numb = [1, 2, 3, 4];
numb.length = 0; // Clears the array
console.log(numb);     // []
console.log(numbers1); // Still [1,2,3,4]

let numbers = [2, 3, 4, 5, 6, 7];
numbers.splice(0, numbers.length); // removes all elements
console.log(numbers);     // []
console.log(numbers1);    // [1,2,3,4]

// Combining and Slicing Arrays
let first = [1, 2, 3];
let second = [4, 5, 6];
let combined = first.concat(second);
console.log(combined); // [1,2,3,4,5,6]

let slice = combined.slice(2, 4);
console.log(slice); // [3, 4]

let marks = [10, 20, 30, 40, 50];
let marks1 = marks.slice(2, 5);
console.log(marks1); // [30,40,50]

// Spread operator
first = [1, 2, 3];
second = [4, 5, 6];
combined = [...first, ...second, 'b', true];
console.log(combined);

// Copy using spread
let copy = [...combined];
console.log(copy);

// Iterating array
let arr = [10, 20, 30, 40, 50];
for (let value of arr) {
    console.log(value);
}

arr.forEach(number => console.log(number));

// Join method
numbers = [10, 20, 30, 40];
const joined = numbers.join(',');
console.log(joined); // "10,20,30,40"

let Message = 'This is my first message';
let parts = Message.split(' ');
console.log(parts); // ['This', 'is', 'my', 'first', 'message']

// Sorting arrays
numbers = [40, 30, 10, 20, 50];
numbers.sort(); // [10, 20, 30, 40, 50]
console.log(numbers);
numbers.reverse(); // [50, 40, 30, 20, 10]
console.log(numbers);

// Filtering arrays
number = [1, 2, -1, -1, 0];
let filtered = number.filter(value => value > 0);
console.log(filtered); // [1,2]

// Mapping arrays
number = [1, 2, -1, -1, 0];
let mapped = number.map(value => 'student_no' + value);
console.log(mapped); // ["student_no1", "student_no2", "student_no-1", ...]

numbers = [1, 2, -6, -9];
let items = numbers
    .filter(value => value >= 0)
    .map(num => ({ value: num }));
console.log(items); // [ { value: 1 }, { value: 2 } ]









