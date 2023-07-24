var inNumber = document.getElementById("number");
var calcBtn = document.getElementById("calcBtn");
var answer = document.getElementById("answer");

function calcular() {
  var number = parseInt(inNumber.value);
  if (inNumber.value == "" || inNumber.value == "0") {
    alert("Insira um número válido");
    inNumber.focus();
    answer.textContent = "";
  } else {
    if (number % 2 == 0) {
      answer.textContent = "O número: " + number + " é par";
    } else {
      answer.textContent = "O número: " + number + " não é par";
    }
  }
}
calcBtn.addEventListener("click", calcular);
