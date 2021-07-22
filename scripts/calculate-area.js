const firstSide = document.querySelector("#first-side");
const secondSide = document.querySelector("#second-side");
const thirdSide = document.querySelector("#third-side");
const calculate = document.querySelector("#calculate-area");
const output = document.querySelector("#output");

function calculateArea(e) {
  e.preventDefault();

  const firstSideValue = Number(firstSide.value);
  const secondSideValue = Number(secondSide.value);
  const thirdSideValue = Number(thirdSide.value);

  const semiPerimeter = (firstSideValue + secondSideValue + thirdSideValue) / 2;

  const result = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - firstSideValue) *
      (semiPerimeter - secondSideValue) *
      (semiPerimeter - thirdSideValue)
  ).toFixed(4);

  output.innerText = `Area of a triangle  is ${result} units`;
}

calculate.addEventListener("submit", calculateArea);
