

const inputBox = document.querySelector("#input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create a new list item
        let listItem = document.createElement("li");
        listItem.innerHTML = inputBox.value;

        // Add the list item to the list container
        listContainer.appendChild(listItem);
        
        // Create a span element for the delete button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.className = "close";
        listItem.appendChild(span);

        // Clear the input box
        inputBox.value = "";
        
        // Add a click event to toggle the checked state
        listItem.addEventListener('click', function() {
            listItem.classList.toggle('checked');
        });

        // Add a click event to remove the list item
        span.addEventListener('click', function() {
            listContainer.removeChild(listItem);
        });
    }
}
    
