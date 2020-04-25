var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var ulChildren = document.querySelectorAll("li");

init();

function init() {
	for (var i = 0; i < ulChildren.length; i++) {
		addButton(ulChildren[i], "delete");
	}
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	addButton(li, "delete");
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone (event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}	
}

function addButton (element, label) {
	let button = document.createElement("button");
	button.innerHTML = label;
	element.appendChild(button);
}

function deleteItem (event) {
	if (event.target.tagName === "BUTTON") {
		event.target.parentElement.remove();
	}	
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleDone);
ul.addEventListener("click", deleteItem);