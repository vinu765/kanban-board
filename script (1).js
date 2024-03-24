function addTask(column) {
 var input = document.getElementById(column + "-input");
 var taskName = input.value.trim();
 if (taskName === "") return;
 
 var card = createCard(taskName, column);
 var list = document.getElementById(column + "-list");
 list.appendChild(card);
 
 input.value = "";
}
function createCard(taskName, column) {
 var card = document.createElement("div");
 card.className = "card";
 card.textContent = taskName;
 if (column !== "done") {
 var progressButton = document.createElement("button");
 progressButton.textContent = "Progress";
 progressButton.className = "progress-btn";
 progressButton.onclick = function() {
 moveTask(card, "progress");
 };
 var doneButton = document.createElement("button");
 doneButton.textContent = "Done";
 doneButton.className = "done-btn";
 doneButton.onclick = function() {
 moveTask(card, "done");
 };
 card.appendChild(progressButton);
 card.appendChild(doneButton);
 }
 return card;
}
function moveTask(card, targetColumn) {
 var targetList = document.getElementById(targetColumn + "-list");
 targetList.appendChild(card);
 if (targetColumn === "done") {
 removeButtons(card);
 }
}
function removeButtons(card) {
 var buttons = card.querySelectorAll("button");
 buttons.forEach(function(button) {
 button.remove();
 });
}
