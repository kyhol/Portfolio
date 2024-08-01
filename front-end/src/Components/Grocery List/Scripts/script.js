const groceries = document.getElementsByClassName("groceries")[0];
const pencil = document.getElementById("pencil"); // Corrected method name
const allItems = document.getElementById("allItems");
const userInput = document.getElementById("userInput");

pencil.addEventListener("click", function() {
    allItems.innerHTML = "";
});

userInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter")
        addItem();
});

function addItem() {
    var h2 = document.createElement("h2");
    h2.innerHTML = "- " + userInput.value;

    h2.addEventListener("click", function() {
        h2.style.textDecoration = "line-through";
    });

    allItems.insertAdjacentElement("beforeend", h2); // Moved inside addItem function
    userInput.value = ""; // Moved inside addItem function
}
