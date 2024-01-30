const input = document.getElementById("input");
const form = document.getElementById("form");
const results = document.getElementById("results");
const history = [];
let currentNum = 0;

input.addEventListener("change", function () {
  currentNum = Number(input.value);
});
form.addEventListener("submit", function (event) {
  event.preventDefault();

  handleClick(event.submitter.id);
  displayHistory();
});
function handleClick(type) {
  if (input.value === "") {
    alert("You must enter a number NOW!");
    return;
  }
  let num = 0;
  if (type !== "equals" && type !== "clear") {
    num = Number(prompt("Enter A Number"));
    if (isNaN(num)) {
      alert("Invalid Input");
      input.value = "";
      return;
    }
  }

  if (type === "add") {
    currentNum += num;
  } else if (type === "subtract") {
    currentNum -= num;
  } else if (type === "multiply") {
    currentNum *= num;
  } else if (type === "divide") {
    currentNum /= num;
  } else if (type === "exponent") {
    currentNum **= num;
  } else if (type === "equals") {
    history.push(currentNum);
  } else if (type === "clear") {
    currentNum = "";
  }
  if (isFinite(currentNum)) {
    input.value = currentNum;
  } else {
    input.value = "";
    alert("Overflow Error");
  }
}
function displayHistory() {
  results.innerHTML = "";
  history.forEach(function (answer) {
    results.insertAdjacentHTML(`afterbegin`, `<p>${answer}</p>`);
  });
}
