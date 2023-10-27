// Get references to the input field, the submit button, and the first <div> element
const userInput = document.getElementById("usertext");
const userSubmit = document.getElementById("usersubmit");
const main = document.querySelector("main");

// Add an event listener to the submit button
userSubmit.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the form from actually submitting (page refresh).

    // Get the value from the input field
    const text = userInput.value;

    // Update the content of the "text1" <div> element with the submitted text
    const newEntry = document.createElement("div");
    newEntry.className = "col";
    newEntry.textContent = text;

    main.appendChild(newEntry);

    // Clear the input field and focus the insertion point back into the text box
    userInput.value = "";
    userInput.focus();
});