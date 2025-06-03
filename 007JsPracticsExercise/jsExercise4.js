// Q1.Write a function that returns a promise which resolves after a specified number of milliseconds.

function delay(milliseconds){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve();
        },milliseconds);
    });
}
console.log("start");
delay(2000).then(()=>{
    console.log("2 second elapsed");
})
console.log("end");

// Q2.Write a function that returns a promise which rejects with a specified error message after a specified number of milliseconds.

function rejectWithDelay(errorMessage,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error(errorMessage));
        },delay);
    });
}
rejectWithDelay("Oops! Something went wrong.",2000).catch((error)=>{
    console.error(error.message);
});

// Q3.Write a function that returns a promise which resolves with an array of random numbers after a specified number of milliseconds.
function getRandomNumbersArray(length,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const numbersArray = Array.from({length},()=> Math.floor(Math.random()*100));
            resolve(numbersArray);
        },delay);
    });
}
getRandomNumbersArray(5,2000).then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.error(error);
});
// Testing the function with delay of 3 seconds and array length of 10
getRandomNumbersArray(10, 3000)
  .then((result) => {
    console.log(result); // Output: [79, 5, 64, 46, 2, 55, 33, 71, 28, 38]
  })
  .catch((error) => {
    console.error(error);
  });

//Q4.Write a function that uses async/await to make an API call to fetch data and returns a promise with the response.
async function fetchData(url){
    try{
        const response = await fetch(url);
       const data = await response.json();
        return data;
    }
    catch(error){
        return Promise.reject(error);
    }
}
// Example usage of the function
fetchData('https://jsonplaceholder.typicode.com/posts/1')
  .then((data)=>{
    console.log(data); // Log the fetched data
  })
  .catch((error)=>{
    console.error(error); // Log any errors
  });
//   Q5.Write a function that uses async/await to make multiple API calls in parallel and returns a promise with an array of responses.
async function fetchMultipleData(urls){
    try{
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(responses.map(response => response.json()));
        return data;
    }
    catch(error){
        return error.message;
    }
}
const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/comments/1",
    "https://jsonplaceholder.typicode.com/albums/1"
  ];
fetchMultipleData(urls)
.then(responses => console.log(responses))
.catch(error=> console.log(error));

// Q6.Write a function that throws an error if the parameter is not a number, and handles the error with a custom error message.
function validateNumber(num){
    return new Promise((resolve,reject)=>{
        if(typeof num !== "number"){
            reject(new Error("Invalid input. Expected a number."));
        }
        else{
            resolve(num);
        }
    });
}
validateNumber(5).then(num => console.log(num))
.catch(err => console.error(err.message));
validateNumber("not a number")
.then(num => console.log(num))
.catch(err => console.error(err.message));

// Q7.Write a try-catch block that catches any errors a function throws and logs them to the console with a custom error message.
function myFunction(num) {
    if (typeof num !== "number") {
      throw new Error("Parameter must be a number");
    }
  
    return num * 2;
  }
  
  try {
    const result = myFunction("hello");
    console.log(result);
  } catch (error) {
    console.log("Error caught:", error.message);
  }

//Q8.Write a function that uses console.assert to check whether a variable is equal to a certain value, and throws an error if the assertion fails.
function assertEqual(actual, expected, message) {
    console.assert(actual === expected, message || `Expected ${expected}, but got ${actual}`);
  }
//  Q9. Write a function that logs an error message to the console if a certain condition is not met.
function logErrorIf(condition, message) {
    if (!condition) {
      console.error(message);
    }
  }
//  Q10. Write a function that catches and handles any errors thrown by a Promise, and logs a custom error message to the console.
function handlePromiseError(promise, errorMessage) {
    promise.catch(error => {
      console.error(errorMessage, error);
    });
  }


