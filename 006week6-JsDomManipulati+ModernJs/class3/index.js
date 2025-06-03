/*
Performance
measure speed of code
how to write efficient and performance code
Event loop


//adding 100para
const t1 = performance.now();
for(let i=1; i<=100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is Para ' + i;

    document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log("this took " + (t2-t1) + " ms");
100Reflow 100repaint

//optimising a bit
const t3 = performance.now();
let myDiv = document.createElement('div');

for(let i=1; i<=100; i++) {
    let element = document.createElement('p');
    element.textContent = 'This is Para ' + i;

    myDiv.appendChild(element);
}

document.body.appendChild(myDiv);
const t4 = performance.now();
console.log("this took " + (t4-t3) + " ms");
// 1 Reflow, 1 Repaint
DocumentFragment:- A DocumentFragment is a minimal, lightweight document object that isn't part of the main DOM tree. It’s used as a container to hold and build DOM nodes in memory before inserting them into the actual document.

Think of it as a temporary DOM — very handy when you're adding multiple elements efficiently.
Why use DocumentFragment?
Performance boost: It avoids multiple reflows/repaints since updates are made off-DOM.

Batch operations: You can append many nodes to the fragment, then insert the fragment into the DOM once.

let fragment = document.createDocumentFragment();
for(let i=1; i<=100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is Para ' + i;

    fragment.appendChild(newElement);
}
document.body.appendChild(fragment); // 1 Reflow, 1 Repaint

callStack
single thread js is a single thread language
processing one command at a time


function addPara() {
    let para = document.createElement('p');
    para.textContent = 'Js is Single';
    document.body.appendChild(para);
}

function appendNewMessage() {
    let para = document.createElement('p');
    para.textContent = 'Kya haal Chaal';
    document.body.appendChild(para);
}
addPara();
appendNewMessage();

observation
1.run to completion
2.js does not execute multiple tasks at the same time

Synchronous: occuring at the same time
Asynchronous: occuring at different times
js is a Asynchronous language/async

event loop
call stack
web api(browser)
callback queue

document.addEventListener('click', function() {
    console.log('hello DiDi');
});
Async code Js Event Loop
Handling async code in js by browser
setTimeout
setTimeout(() => {
    console.log('hello Everyone');
}, 5000);

setTimeout(() => {
    console.log('hello');
}, 0);
*/

// function appendNewMessage() {
//     let para = document.createElement('p');
//     para.textContent = 'Kya haal Chaal';
//     document.body.appendChild(para);
// }
