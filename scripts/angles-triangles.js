const firstAngle = document.querySelector("#first-angle");
const secondAngle = document.querySelector("#second-angle");
const thirdAngle = document.querySelector("#third-angle");
const check = document.querySelector("#check");
const output = document.querySelector("#output");

function calcSumOfAngles(e) {
  e.preventDefault();
  const firstAngleValue = Number(firstAngle.value);
  const secondAngleValue = Number(secondAngle.value);
  const thirdAngleValue = Number(thirdAngle.value);

  const sumOfAngles = firstAngleValue + secondAngleValue + thirdAngleValue;
  if (sumOfAngles === 180) {
    output.innerText = `As sum of all angles equals to 180 degrees. Hence, angles form a traingle.`;
  } else {
    output.innerText = `As sum of all angles does not equals to 180 degrees. Hence, angles do not form a triangle`;
  }
}

check.addEventListener("submit", calcSumOfAngles);
