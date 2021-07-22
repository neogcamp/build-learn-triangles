const base = document.querySelector("#base");
const height = document.querySelector("#height");
const calculate = document.querySelector("#calculate-hypo");
const output = document.querySelector("#output");

function calculateHypo(e) {
  e.preventDefault();
  const baseValue = Number(base.value);
  const heightValue = Number(height.value);

  const result = Math.sqrt(
    baseValue * baseValue + heightValue * heightValue
  ).toFixed(4);

  output.innerText = `Hypotenuse of a triangle with base ${baseValue} & height ${heightValue}  is ${result} units`;
}

calculate.addEventListener("submit", calculateHypo);
