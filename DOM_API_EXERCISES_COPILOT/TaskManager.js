// Task Manager Practice - DOM API Exercise
// Complete the requirements below:

/*
Part 1: Basic Functionality (Essential)
Add Task Function: DONE
    When user clicks "Add Task" button, get the value from input field
    Create a new <li> element with class "task-item"
    Add the task text to the <li>
    Append it to the <ul id="tasks"> list
    Clear the input field after adding
    Update the task count

Task Counter: DONE (used extra function)
    Update the #taskCount paragraph to show the current number of tasks
    Should update every time a task is added or removed

Part 2: Advanced Features (Challenge)
Delete Task: DONE (this.parentElement.remove())
    Add a "Delete" button to each task item
    When clicked, remove that task from the list
    Update the task count
Mark as Complete: DONE (this.classList.toggle())
    When user clicks on a task text, toggle the "completed" class
    This will add strikethrough effect (CSS already done)
Input Validation: DONE (used trim())
    Don't allow adding empty tasks
    Show an alert if user tries to add empty task
Enter Key Support: DONE (keydown event)
    Allow adding tasks by pressing Enter key (not just clicking button)

Bonus: Clear All, Filters, localStorage
*/

/*
document.getElementById("taskInput").addEventListener("keydown", event => {
    console.log(event.key);        // The key pressed: "Enter", "a", "Escape", etc.
    console.log(event.type);       // Event type: "keydown"
    console.log(event.target);     // Element that triggered event
    console.log(event.code);       // Physical key code: "Enter", "KeyA"
    console.log(event.shiftKey);   // true if Shift was held
    console.log(event.ctrlKey);    // true if Ctrl was held
});

classList methods (most flexible):
let element = document.createElement("div");

element.classList.add("class1", "class2");     // Add classes
element.classList.remove("class1");            // Remove class
element.classList.toggle("active");            // Add if not present, remove if present
element.classList.contains("class2");          // Check if has class (returns true/false)
element.classList.replace("class2", "class3"); // Replace class
*/

document.getElementById("addBtn").addEventListener("click", addTask);
// for enter to work to add task.
document.getElementById("taskInput").addEventListener("keydown", event => {
    if(event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
})


let count = 0;
function addTask() {
    let taskName = document.getElementById("taskInput").value; // get the value with .value

    // validation, empty is not allowed
    if(taskName.trim() === "") {
        alert("Please enter a non-empty task!");
        return;
    }

    let listTask = document.createElement("li");
    listTask.className = "task-item";

    // Set task text FIRST
    listTask.innerHTML = taskName;
    listTask.addEventListener("click", checkCompleted);

    // Create delete button AFTER setting innerHTML
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn"; // already in css styles
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", deleteTask);
    
    listTask.appendChild(deleteBtn); // Add button after text

    document.getElementById("tasks").appendChild(listTask);
    // count++;
    // document.getElementById("taskCount").innerHTML = `Total tasks: ${count}`; // BAD APPROACH, not dynamic, delete func will break it
    updateCount(); // dynamic control, more accurate

    document.getElementById("taskInput").value = ""; // clear input field
}

function updateCount() {
    let taskList = document.getElementById("tasks");
    let count = taskList.children.length; // returns the number of children 
    document.getElementById("taskCount").innerHTML = `Total tasks: ${count}`;
}

function checkCompleted(event) {
    // 'this' refers to the element that was clicked (the <li>)
    // or you can use event.target
    this.classList.toggle("completed");
    // or event.target.classList.toggle("completed");
}

function deleteTask(event) {
    // IMPORTANT: Stop the click from bubbling to parent <li>
    event.stopPropagation();

    // 'this' = the button that was clicked
    // Get the parent <li> element and remove it
    this.parentElement.remove();
    
    // Update the task count
    updateCount();
}
