const quizData = [
  {
    question: "Who is the first president of Indonesia?",
    a: "Soekarno",
    b: "Joko Widodo",
    c: "B. J. Habibie",
    d: "Abdurrahman Wahid",
    correct: "a",
  },
  {
    question: "What is the most used programming language?",
    a: "C++",
    b: "Python",
    c: "Java",
    d: "PHP",
    correct: "b",
  },
  {
    question: "Who is the founding father of US?",
    a: "Abraham Lincoln",
    b: "George Washington",
    c: "Jonathan Trumbul",
    d: "Stephen Hopkins",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hyperlink Markup Language",
    c: "Hypermedia Markup Language",
    d: "Hypertext Modified Language",
    correct: "a",
  },
 {
    question: "What does CSS stand for?",
    a: "Cascading Style System",
    b: "Creating Style Sheet",
    c: "Cascading Style Sheet",
    d: "Creating System Settings",
    correct: "c",
  },
];

const question1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const selected = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;
let correctAnswer = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];

  question1.innerHTML = currentQuizData.question;

  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  selected.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswer() {
  selected.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score += 100;
      correctAnswer++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h4>You have answered all these questions, it is your score 
      : ${score} and your answer correct at ${correctAnswer}/${quizData.length}</h4>
      <button onclick="location.reload()">Refresh</button>`;
    }
  }
});
