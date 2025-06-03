/*
window is a global object.

It represents the browser window and provides access to the browser's features and functionality.

It is the top-level object in the browser environment and serves as the global context for JavaScript code running in the browser.

In JavaScript, the window object is the global object in browsers that provides access to the BOM (Browser Object Model) for browser features like alerts and navigation, the DOM (Document Object Model) for manipulating HTML/CSS, and the core JavaScript (JS Core) features like variables, functions, and operators.

DOM :- DOM is a programming interface for web pages. It represents the HTML or XML of a page as a tree structure where each node is an object representing part of the document.

DOM stands for Document Object Model.
It is created by the browser when a web page loads.
It allows JavaScript to access and manipulate HTML and CSS dynamically.

BOM:- 
The BOM is a set of objects provided by the browser to interact with the browser window itself — not the webpage content (that’s what DOM is for).

BOM stands for Browser Object Model.
It allows JavaScript to interact with the browser — like tabs, history, URL, alert boxes, etc.
It’s not standardized like the DOM, but almost all browsers support it.

What is getElementById()?
getElementById() is a DOM method used to select an HTML element using its id attribute.
document.getElementById("your-id")
It returns the first element with that ID (IDs should be unique!).
If no element with the given ID exists, it returns null.

What is getElementsByClassName()?
It's a DOM method used to select all HTML elements that share the same class name.
document.getElementsByClassName("your-class")
It returns an HTMLCollection (like an array) of all elements with that class.
If no element is found, it returns an empty collection, not null.

What is getElementsByTagName()?
It’s a DOM method used to select all HTML elements with a specific tag name, like div, p, h1, etc.
document.getElementsByTagName("tagname")
It returns an HTMLCollection (array-like) of elements with that tag.
If none are found, it returns an empty collection.

What is querySelector()?
querySelector() is a powerful DOM method that lets you select the first element that matches a CSS selector.
document.querySelector("CSS_selector")
Returns the first matching element.
If nothing matches, it returns null.
Selector Type	Example	Meaning

You can select by:
ID	"#title"	Select element with id="title"
Class	".note"	Select element with class="note"
Tag	"p"	Select first <p> element
Nested	"div p"	First <p> inside any <div>
Attribute	"input[type='text']"	First text input

What is querySelectorAll()?
It’s a DOM method that selects all elements that match a given CSS selector, not just the first one.
document.querySelectorAll("CSS_selector")
Returns a NodeList (similar to an array).
You can loop through it using forEach(), for, or for...of.
If nothing matches, it returns an empty NodeList.

How is it different from getElementsByClassName()?

1.querySelectorAll() returns a static NodeList, while getElementsByClassName() returns a live HTMLCollection.
2.getElementsByClassName() updates automatically when the DOM changes, while 
querySelectorAll() does not.
3. querySelectorAll() can use any CSS selector,while getElementsByClassName()only uses class names.

Ways to Update Existing Content in JavaScript
.innerHTML
.outerHTML
.textContent
.innerText

.innerHTML
innerHTML is a property that allow you to get or set the HTML content inside an element.
// Get content
let content = element.innerHTML;
// Set content
element.innerHTML = "<p>Hello, World!</p>";
Setting innerHTML replaces all existing HTML inside the element.
Be cautious with user input to avoid XSS (Cross-site scripting) attacks.

.outerHTML
outerHTML is a property that allow you to get or replace an entire HTML element, including the element itself and all of its contents.
1. Get outerHTML:
Returns the full HTML string of the selected element including the element tag itself.
let html = element.outerHTML;
2. Set outerHTML:
Replaces the entire element (not just its contents) with new HTML.
element.outerHTML = "<p>This is a new element</p>";

.textContent
.textContent is a JavaScript property used to get or set the text inside an HTML element, but without any HTML tags.
Get text:
Returns all the text inside an element (including text in nested elements), without formatting or tags.
let text = element.textContent;
Set text:
Replaces the entire text content of the element.
element.textContent = "Hello, world!";

Property	Interprets HTML Tags?	Returns Raw Text?	Can Inject HTML?
.innerHTML	   ✅ Yes	                ❌ No	        ✅ Yes
.textContent	❌ No	                ✅ Yes	        ❌ No

.innerText:
.innerText is a JavaScript property used to get or set the visible text inside an HTML element — similar to .textContent, but with a few key differences.
Get text:
Returns only the visible text, taking styles like display: none into account.
let visibleText = element.innerText;
Set text:
Replaces the element’s visible text.
element.innerText = "Hello, world!";

.innerText vs .textContent
Feature	                 .innerText	                       .textContent
Includes hidden text?	❌ No (display: none is ignored) 	✅ Yes
Affected by CSS?	    ✅ Yes	                            ❌ No
Slower?                 Slightly (due to layout reflow)	     ✅ Faster

Adding new Element content
.createElement()
content.appendChild(newChild);
creating TextNode;

let newpara = document.createElement("p");
let textPara = document.createTextNode("I am text");
newPara.appendChild(textPara);
content.appendChild(newPara);

// best Practics
let myPara = document.createElement("p");
myPara.textContent = 'Hello, World!';
content.appendChild(myPara);

.insertAdjacentHTML()
It allows you to insert HTML at specific positions relative to an element — without disturbing its existing content.
has to be called 2 arguments;
 1. location/position: where to insert the new HTML
 2. HTML text/content to be inserted : text you want to insert
element.insertAdjacentHTML(position, htmlString);
position: tells where to insert the HTML
htmlString: the HTML you want to insert (as a string)
Position	        What it means
"beforebegin"	    Before the element itself
"afterbegin"	    Just inside the element, before first child
"beforeend"	        Just inside the element, after last child
"afterend"	        After the element itself

.removeChild(child);
opposite of appendChild
a parent element
the child element to be removed
parent.removeChild(childElement);
let childElement = child.parent.removeChild(child);


.removeChild(child) is a JavaScript method used to remove a specific child element from its parent element.
parent.removeChild(child);
parent: The element that contains the child.
child: The element you want to remove.

style page content
.style
.style is a property of DOM elements that allows you to get or set CSS styles directly in JavaScript.
It represents the inline styles of the element.
element.style.propertyName = "value";

CSS	JavaScript        .style
background-color	  backgroundColor
font-size	          fontSize
margin-top	          marginTop
border-radius	      borderRadius
display	              display

CSS properties with dashes (like background-color) become camelCase in JavaScript (backgroundColor).
The styles you set using .style only apply as inline styles, so they can be overridden by external or internal stylesheets with higher specificity.

.cssText
.cssText is a property of the style object that allows you to get or set all the CSS styles of an element as a single string.
It’s a convenient way to manipulate multiple styles at once.
element.style.cssText = "property1: value1; property2: value2;";
Overwrites all existing inline styles when setting.
If you want to add new styles without removing existing ones, use individual .style.propertyName or append to cssText like this:
box.style.cssText += "border-radius: 8px;";

.setAttribute()
.setAttribute() is a JavaScript method used to add a new attribute or change the value of an existing attribute on an HTML element.
It takes two arguments:
1. name: The name of the attribute you want to set (as a string).
2. value: The value you want to assign to that attribute (as a string).
element.setAttribute("attributeName", "value");
If the attribute already exists, setAttribute() overwrites it.
If not, it adds it.

.className
.className is a JavaScript property used to get or set the class attribute of an HTML element — basically controlling which CSS class(es) the element has.
// Get class name
let currentClass = element.className;
// Set class name
element.className = "newClass";
// Add multiple classes
element.className = "classOne classTwo";
Setting .className overwrites all existing classes.

.classList
.classList is a modern and powerful JavaScript property used to work with classes on an HTML element — without overwriting the entire class string like .className does.
It returns a DOMTokenList — basically a list of all classes an element has — and gives you helpful methods to manipulate them.
classList return an array of classes
add()
remove()
toggle()
contains()
replace()

Method	What it does
add("class")	Adds a class
remove("class")	Removes a class
toggle("class")	Adds the class if not present, removes if present
contains("class")	Checks if the class exists
replace("old", "new")	Replaces one class with another

Why use .classList instead of .className?
.className	                .classList
Overwrites all classes	    Can manipulate one at a time
String-based	              Has helpful methods
Older technique	            Modern and recommended





*/