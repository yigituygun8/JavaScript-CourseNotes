// ========================================
// DOM API CHEATSHEET
// Note: 'element' is a placeholder - replace with your actual variable
// Example: let myDiv = document.getElementById("demo");
//          myDiv.innerHTML = "Hello";
// ========================================

// ==================== FINDING ELEMENTS ====================
document.getElementById(id)                    // Find by ID
document.getElementsByClassName(className)     // Find by class (returns HTMLCollection)
document.getElementsByTagName(tag)             // Find by tag (returns HTMLCollection)
document.querySelector(selector)               // First element matching CSS selector
document.querySelectorAll(selector)            // All elements matching CSS selector (NodeList)
element.querySelector(selector)                // Search within element
element.querySelectorAll(selector)             // Search within element
element.closest(selector)                      // Find closest ancestor matching selector
element.matches(selector)                      // Check if element matches selector


// ==================== NAVIGATION/TRAVERSAL ====================
element.parentElement                          // Parent element
element.parentNode                             // Parent node (similar to parentElement)
element.children                               // All child elements (HTMLCollection)
element.childNodes                             // All child nodes including text nodes
element.firstChild                             // First child node
element.firstElementChild                      // First child element
element.lastChild                              // Last child node
element.lastElementChild                       // Last child element
element.nextSibling                            // Next sibling node
element.nextElementSibling                     // Next sibling element
element.previousSibling                        // Previous sibling node
element.previousElementSibling                 // Previous sibling element


// ==================== CONTENT & TEXT ====================
element.innerHTML                              // Get/set HTML content
element.innerText                              // Get/set visible text
element.textContent                            // Get/set all text (including hidden)
element.value                                  // Get/set value (for inputs, textarea, select)
element.outerHTML                              // Get/set element including itself


// ==================== ATTRIBUTES ====================
element.id                                     // Get/set id attribute
element.className                              // Get/set class as string
element.getAttribute(attr)                     // Get attribute value
element.setAttribute(attr, value)              // Set attribute
element.removeAttribute(attr)                  // Remove attribute
element.hasAttribute(attr)                     // Check if has attribute (returns boolean)
element.src                                    // Get/set src (for img, script, iframe)
element.href                                   // Get/set href (for a, link)
element.alt                                    // Get/set alt text (for img)
element.title                                  // Get/set title attribute


// ==================== CLASS MANIPULATION ====================
element.classList.add("class1", "class2")      // Add one or more classes
element.classList.remove("class1")             // Remove class
element.classList.toggle("class")              // Add if absent, remove if present
element.classList.contains("class")            // Check if has class (returns boolean)
element.classList.replace("old", "new")        // Replace class


// ==================== CREATING/REMOVING ELEMENTS ====================
document.createElement(tag)                    // Create new element
element.appendChild(child)                     // Add child at end
element.append(child1, child2)                 // Add children at end (modern, can add multiple)
element.prepend(child)                         // Add child at start
element.insertBefore(newNode, referenceNode)   // Insert before reference node
element.removeChild(child)                     // Remove child (old way)
element.remove()                               // Remove self (modern way)
element.replaceChild(newChild, oldChild)       // Replace child
element.cloneNode(deep)                        // Clone element (deep=true clones descendants)


// ==================== EVENT LISTENERS ====================
element.addEventListener(type, handler)        // Add event listener (modern way)
element.removeEventListener(type, handler)     // Remove event listener
element.onclick = handler                      // Direct assignment (old way, not recommended)

// Common event types:
// "click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseenter", "mouseleave"
// "keydown", "keyup", "keypress"
// "submit", "input", "change", "focus", "blur"
// "load", "DOMContentLoaded", "resize", "scroll"


// ==================== EVENT OBJECT PROPERTIES ====================
event.target                                   // Element that triggered event
event.currentTarget                            // Element listener is attached to
event.type                                     // Event type ("click", "keydown", etc.)
event.key                                      // Key pressed (keyboard events)
event.code                                     // Physical key code
event.preventDefault()                         // Prevent default behavior
event.stopPropagation()                        // Stop event bubbling
event.clientX                                  // Mouse X position
event.clientY                                  // Mouse Y position
event.shiftKey                                 // true if Shift was held
event.ctrlKey                                  // true if Ctrl was held
event.altKey                                   // true if Alt was held


// ==================== STYLE MANIPULATION ====================
element.style.property = value                 // Set inline style
element.style.color = "red"
element.style.backgroundColor = "blue"         // Use camelCase for CSS properties
element.style.fontSize = "16px"
element.style.display = "none"
element.style.visibility = "hidden"
getComputedStyle(element)                      // Get actual computed styles (read-only)
getComputedStyle(element).color                // Get specific computed style


// ==================== DIMENSIONS & POSITION ====================
element.offsetWidth                            // Width including padding and border
element.offsetHeight                           // Height including padding and border
element.clientWidth                            // Width excluding border
element.clientHeight                           // Height excluding border
element.scrollTop                              // Scroll position from top
element.scrollLeft                             // Scroll position from left
element.scrollHeight                           // Total scrollable height
element.scrollWidth                            // Total scrollable width
element.getBoundingClientRect()                // Position relative to viewport (returns object)


// ==================== FORM ELEMENTS ====================
input.value                                    // Get/set input value
input.checked                                  // Get/set checkbox/radio checked state
input.disabled                                 // Get/set disabled state
input.focus()                                  // Set focus to element
input.blur()                                   // Remove focus from element
form.submit()                                  // Submit form
form.reset()                                   // Reset form
select.selectedIndex                           // Get/set selected option index
select.options                                 // Get all options


// ==================== CHECKING/VALIDATION ====================
element.hasChildNodes()                        // Check if has children (returns boolean)
element.contains(child)                        // Check if contains element (returns boolean)
element.tagName                                // Get tag name (uppercase, e.g., "DIV")
element.nodeName                               // Get node name
element.nodeType                               // Get node type (1 = element, 3 = text)


// ==================== DATASET (Custom Data Attributes) ====================
element.dataset.userId                         // Get data-user-id attribute
element.dataset.index = 5                      // Set data-index="5"
element.dataset.customName                     // Access data-custom-name (camelCase conversion)


// ==================== INSERTING HTML ====================
element.insertAdjacentHTML(position, html)     // Insert HTML at position
// Positions: "beforebegin", "afterbegin", "beforeend", "afterend"
// Example: element.insertAdjacentHTML("beforeend", "<p>New paragraph</p>");


// ==================== USEFUL METHODS ====================
element.scrollIntoView()                       // Scroll element into view
element.click()                                // Trigger click programmatically
document.createTextNode(text)                  // Create text node
element.normalize()                            // Merge adjacent text nodes


// ==================== EXAMPLES ====================

// Example 1: Create and add element
// let newDiv = document.createElement("div");
// newDiv.className = "container";
// newDiv.innerHTML = "Hello World";
// document.body.appendChild(newDiv);

// Example 2: Event listener with this
// button.addEventListener("click", function() {
//     this.classList.toggle("active");
// });

// Example 3: Remove element
// let taskItem = document.querySelector(".task-item");
// taskItem.remove();

// Example 4: Traverse DOM
// let parent = button.parentElement;
// let nextTask = taskItem.nextElementSibling;
