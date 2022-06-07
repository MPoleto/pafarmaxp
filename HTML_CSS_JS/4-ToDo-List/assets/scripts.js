let checkboxElement, labelElement, labelInfo;
let textInput = document.getElementById("new-item");


function addToDo() {
  checkboxElement = document.createElement("input");

  checkboxElement.setAttribute("type", "checkbox");
  checkboxElement.setAttribute("class", "checkbox-item");
  checkboxElement.setAttribute("id", textInput.value);

  document.getElementById("wrapper").appendChild(checkboxElement);
  
  labelInfo = createLabel();
  textInput.value = "";
  
}

function createLabel() {
  labelElement = document.createElement("label");

  labelElement.setAttribute("for", textInput.value);

  labelElement.innerHTML += textInput.value + `<br>`;

  document.getElementById("wrapper").appendChild(labelElement);
}
