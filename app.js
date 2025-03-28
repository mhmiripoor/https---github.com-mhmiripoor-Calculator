let calciBTNs = document.querySelectorAll(".calciBTN");
let clearBTN = document.querySelector("#clear");
let backspaceBTN = document.querySelector("#back");
let equlBTN = document.querySelector("#equal");
let display = document.querySelector("#display");
calciBTNs.forEach((e1) => {
  e1.addEventListener("click", () => {
    display.value += e1.value;
  });
});

const evident = () => {
  if (display.value !== "") {
    try {
      let result = eval(display.value);
      display.value = result;
    } catch (error) {
      display.value("Error");
    }
  }
};

equlBTN.addEventListener("click", evident);

clearBTN.addEventListener("click", () => {
  display.value = "";
});

backspaceBTN.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});
