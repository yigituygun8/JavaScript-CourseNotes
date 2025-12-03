/*
HTML DOM: Standard object model for HTML. Defines HTML elements as objects.
With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

When a web page is loaded, the browser creates a Document Object Model of the page.

HTML DOM is a tree of objects. JS can create dynamic HTML by using the HTML DOM.

JavaScript can change all the HTML elements in the page
JavaScript can change all the HTML attributes in the page
JavaScript can change all the CSS styles in the page
JavaScript can remove existing HTML elements and attributes
JavaScript can add new HTML elements and attributes
JavaScript can react to all existing HTML events in the page
JavaScript can create new HTML events in the page
*/

// DOM METHODS: actions you can perform on HTML elements (objects) | DOM PROPERTIES: values (properties) of HTML elements

// Example: Change the text of an HTML element with id="demo": getElementById() is a DOM method | innerHTML is a DOM property
document.getElementById("demo").innerHTML = "Hello World!"; // SET the content
let content = document.getElementById("demo").innerHTML; // GET the content
console.log(content); // Hello World!

/* 
Finding HTML Elements:
document.getElementById(id) - Finds an element by element id
document.getElementsByClassName(classname) - Finds elements by class name
document.getElementsByTagName(tagname) - Finds elements by tag name
document.querySelector(selector) - Finds the first element that matches a specified CSS selector(s)
document.querySelectorAll(selector) - Finds all elements that match a specified CSS selector(s)

Changing HTML Elements: first you must find the element, then you can change it.
element.innerHTML = new html content - Changes the inner HTML of an element
element.attribute = new value - Changes the attribute value of an element
element.style.property = new style - Changes the style of an element


Adding and Deleting HTML Elements:
document.createElement(element) - Creates an HTML element (does not insert it into the document)
document.removeChild(element) - Removes an HTML element
document.appendChild(element) - Adds an HTML element (uses the created element)
document.replaceChild(new, old) - Replaces an HTML element
document.write(text) - Writes into the HTML output stream (only for testing; not recommended for production)

Adding Event Handlers to HTML Elements:
document.getElementById(id).onclick = function() {code} - Adds an event handler code to an onclick event
document.getElementById(id).addEventListener(event, function, useCapture) - Adds an event listener to an element (more flexible than onclick)

What is the difference between event handler and event listener?
-An event handler is a property of an HTML element that can be set to a function to handle a specific event (like onclick, onmouseover).
-An event listener is a more flexible way to handle events. It allows you to add multiple event handlers to the same event on the same element using addEventListener() method.
*/


