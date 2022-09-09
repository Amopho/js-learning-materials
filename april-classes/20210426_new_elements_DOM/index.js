const create = () => {
  // 1.step
  const newElement = document.createElement("div");
  const newText = document.createTextNode("I am a new element");
  //2step
  newElement.appendChild(newText);
  document.body.appendChild(newElement);
};

const addToList = (e) => {
  // single page application- there is no place to send, submitted data, we are preventing the form from doing it
  e.preventDefault();
  let userData = document.querySelector("#userData").value;
  console.log(userData);
  //CHecking input if is a text
  if (userData != "") {
    let newLi = document.createElement("li");
    let text = document.createTextNode(userData);
    newLi.appendChild(text);
    // Adding random color to list item
    newLi.style.color = colorGen();
    document.querySelector(".result").appendChild(newLi);
    document.querySelector("#userData").value = "";
    //adding button
    const newContainer = document.createElement("div");
    const doneButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    // adding some text
    doneButton.innerHTML = "✓";
    deleteButton.innerHTML = "✗";
    // injecting the buttons into the container
    newContainer.appendChild(doneButton);
    newContainer.appendChild(deleteButton);
    // adding class;
    doneButton.classList.add("done");
    newLi.appendChild(newContainer);
    // complete the function
    const check = () => newLi.classList.toggle("completed");
    // adding eventListeners to the buttons
    deleteButton.addEventListener("click", () => newLi.remove());
    doneButton.addEventListener("click", check);
  } else {
    document.querySelector("#userData").placeholder = "new to-do";
  }
};
//random color generator
const colorGen = () => {
  let result = "#";
  let colorCode = "0123456789ABCDEF";
  for (let i = 0; i <= 6; i++) {
    result += colorCode[Math.floor(Math.random() * 16)];
  }
  return result;
};

// functional check which key the user is pressing
const keyCheck = (event) => {
  console.log(event);
  if (e.key == "Enter") addToList();
};

// adding eventListener to the form

document.querySelector("form").addEventListener("submit", addToList);
// // 2 properties funcyion which function I am listening, and second which it woiuld return
