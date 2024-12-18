const list = document.querySelector("#li");
const inputText = document.querySelector("#inputtext");
const button = document.querySelector("#btn");

button.addEventListener("click", function () {
    const inputValue = inputText.value.trim(); // Trim to remove unnecessary whitespace

    if (inputValue) {
        // Create a new list item and add it to the list
        const li = document.createElement('li');
        li.textContent = inputValue;
        list.appendChild(li);

        inputText.value = ""; // Clear the input field
    } else {
        alert("Please enter an item."); // Alert if input is empty
    }
});
