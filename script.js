let inputBox = document.querySelector("#input");
let addButton = document.querySelector("#addButton");
let ongoing = document.querySelector(".ongoing");

addButton.addEventListener("click", () => {
  //creates a new Div
  const newTask = document.createElement("li");
  newTask.classList.add("task");

  if (!inputBox.value) {
    alert("you can't add an empty task");
    return;
  }
  // adds the task's text to the tasks list
  newTask.innerText = input.value;
  newTask.classList.add("task");
  ongoing.appendChild(newTask);

  //adds a complete button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = "V";
  completedButton.classList.add("completeButton");
  ongoing.appendChild(completedButton);

  //adds a delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("deleteButton");
  ongoing.appendChild(deleteButton);

  inputBox.value = "";
});
