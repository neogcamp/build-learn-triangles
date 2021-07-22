const quizForm = document.querySelector("#quiz-form");
const questionContainer = document.querySelectorAll(".question-container");
const output = document.querySelector("#output");
const btnReset = document.querySelector("#btn-reset");

const correctAns = [
  "option1",
  "option2",
  "option1",
  "option1",
  "option1",
  "option1",
  "option2",
  "option3",
  "option1",
  "option3",
];

quizForm.addEventListener("submit", (e) => {
  let score = 0;
  e.preventDefault();
  const data = new FormData(quizForm);
  let index = 0;
  for (let entry of data) {
    if (entry[1] == correctAns[index]) {
      questionContainer[index].style.backgroundColor = "#A7F3D0";
      score++;
    } else {
      questionContainer[index].style.backgroundColor = "#FECACA";
    }
    index++;
  }
  if (score >= 4) {
    output.innerText = `Congratulations, your score is ${score}`;
  } else {
    output.innerText = `Ohh no! Your score is ${score}`;
  }
});

btnReset.addEventListener("click", () => {
  let score = 0;
  questionContainer.forEach((div) => {
    div.style.backgroundColor = "inherit";
  });
  output.innerText = "";
});
