// Event bubbling
// select the whole unordered list container ul
const list = document.querySelector(".container ul");
// add listener
list.addEventListener("click", function (e) {
  //   console.log(e.target.className);
  if (e.target.className == "delete") {
    //I grab event target-where, and its parent, not query selector
    let li = e.target.parentElement;
    console.log(li);
    list.removeChild(li);
  }
});

const hide = document.querySelector("#hide");
hide.addEventListener("change", () => {
  if (hide.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
});
// farther more about that
