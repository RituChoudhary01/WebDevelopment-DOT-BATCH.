/*
Browser Event: 
This is a simple browser event handler that listens for a specific event and executes a callback function when the event occurs.
It is designed to be used in a web application to handle events such as clicks,key presses, or other user interactions.
It is a lightweight and efficient way to manage events in a web application.
1.events
2.respond to events
3.data stored in events
4.stop an event
5.lifecycle of an event

function eventFunction() {
    console.log('I have clicked on the document');
}
monitorEvent(): to see terger an event
eventListener(): to listen for an event
eventTarget(): to get the target of an event

 EventTarget: interface implement by object that can reveive events and may have listeners for them.
 addEventListener()
 removeEventListener()
 dispatchEvent()
 eventTarget <---> Node <---> Element

<eventTarget>.addEventListener(<event-to-listen-to>, <function-to-run-when-event-happens>);

eventTarget.addEventListener(eventType, callbackFunction);
1.event-target-->component
2.event-type-->click
function --> define what to do when event happen.
document.addEventListener('click', function(){
    console.log('I have clicked on the document');
});
Remove EventListener
document.addEventListener('click', function(){
    console.log('I have clicked on the document');
});
document.removeEventListener('click', function(){
    console.log('I have clicked on the document');
});
function print(){
    console.log('Hi');
}
document.addEventListener('click',print);
document.removeEventListener('click',print);
Phases of an event
1. capture phase
2. target phase
3. bubbling phase

by default,addEventListener() uses bubbling phase.

addEvent('click', print, true);

<eventTarget>.addEventListener(eventType,listener, useCapture);

event Object: when an event occurs, the browser creates an event object and passes it to the event handler function.

The Default Action:when an event occurs, the browser performs a default action. For example, when a user clicks on a link, the browser navigates to the URL specified in the link.

.preventDefault(): this method prevents the default action of the event from occurring. For example, if a user clicks on a link, the browser will not navigate to the URL specified in the link.
Avoid too many Event. 
<article id="wrapper">
<p> <span>Span</span> </p>
<p> <span>Span</span> </p>
<p> <span>Span</span> </p>
</article>

document.querySelector('#wrapper').addEventListener('click', function(event) {
    if(event.target.nodeName === 'SPAN') {
        console.log('Span clicked: ' + event.target.textContent);
    }
});

document.addEventListener('click', eventFunction);

document.removeEventListener('click', eventFunction);

const content = document.querySelector('#wrapper');

content.addEventListener('click', function(babbar) {
    console.log(babbar);
})
let links = document.querySelectorAll('a');
let thirdLink = links[2];

thirdLink.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('maza aaya, accha laga');
});
let myDiv = document.createElement('div');
function paraStatus(event) {
    console.log('Para ' + event.target.textContent);
}
myDiv.addEventListener('click', paraStatus);

for(let i=1; i<=100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;
    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);
let element = document.querySelector('#wrapper');

element.addEventListener('click', function(event) {
    if(event.target.nodeName === 'SPAN') {
        console.log('span pr click kia hai' + event.target.textContent);
    }
});
*/