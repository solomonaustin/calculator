const screen = document.querySelector(".calc-screen");
const buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        screen.innerText = "";
        break;
      case "←":
        if (screen.innerText) {
          screen.innerText = screen.innerText.slice(0, -1);
        } else {
          alert("No expression found!");
        }
        break;
      case "=":
        try {
          screen.innerText = eval(screen.innerText);
        } catch {
          alert("Wrong expression!!!");
        }
        break;
      default:
        screen.innerText += e.target.innerText;
    }
  });
});
