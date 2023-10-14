// Get the display element
const display = document.getElementById("display");

// Add click event listeners to all buttons
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const clickedButton = event.target;
    const buttonText = clickedButton.innerText;

    if (buttonText === "=") {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Error";
      }
    } else if (buttonText === "C") {
      display.value = "";
    } else {
      display.value += buttonText;
    }
  });
});
