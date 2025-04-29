// Fahrenheit to Celsius Covertor

// Event Listeners
document.getElementById("cvrt-btn").addEventListener("click", calc);

// Event Functions
function calc() {
  // INPUT
  var num = +document.getElementById("input").value;
  // PROCESS
  answer = ((num - "32") * 5) / 9;
  finalAnswer = answer.toFixed(0);
  // OUTPUT
  document.getElementById("finalOutput").innerHTML = finalAnswer;
  document.getElementById("link").href = "https://www.google.com/";
  document.getElementById("input").value = "";
  document.getElementById("cvrt-btn").style.background = "#26d978";
}
