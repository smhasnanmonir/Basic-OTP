let generatedNumber = Math.floor(Math.random(0.1, 1) * 10000);
document.getElementById("pin-btn").addEventListener("click", function () {
  let getPinText = document.getElementById("pin-text");
  getPinText.innerText = generatedNumber;
});

document.getElementById("check-btn").addEventListener("click", function () {
  let getText = document.getElementById("input-value");
  let stringGetText = getText.value;
  if (stringGetText == generatedNumber) {
    alert("Yes");
  } else {
    alert("Wrong pin");
  }
  getText.value = "";
});
