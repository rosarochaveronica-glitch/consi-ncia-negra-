// ================================
// MENU MOBILE
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


// ================================
// REFLEXÕES
// ================================

const reflections = [
  "O que podemos fazer hoje para construir uma sociedade mais justa?",

  "Conhecer a história também é uma forma de combater o preconceito.",

  "Como podemos valorizar a cultura afro-brasileira no nosso cotidiano?",

  "A igualdade racial depende da participação de toda a sociedade.",

  "Que histórias de pessoas negras você gostaria de conhecer melhor?",

  "Respeitar diferentes culturas é reconhecer a riqueza da diversidade."
];

let reflectionIndex = 0;

const reflectionText =
  document.getElementById("reflectionText");

const newReflection =
  document.getElementById("newReflection");

newReflection.addEventListener("click", () => {

  reflectionIndex++;

  if (reflectionIndex >= reflections.length) {
    reflectionIndex = 0;
  }

  reflectionText.style.opacity = "0";

  setTimeout(() => {

    reflectionText.textContent =
      reflections[reflectionIndex];

    reflectionText.style.opacity = "1";

  }, 200);

});


// ================================
// QUIZ
// ================================

const questions = [

  {
    question:
      "Em qual data é celebrado o Dia Nacional de Zumbi e da Consciência Negra?",

    options: [
      "13 de maio",
      "20 de novembro",
      "7 de setembro",
      "21 de abril"
    ],

    answer: 1
  },

  {
    question:
      "Quem foi Zumbi dos Palmares?",

    options: [
      "Um imperador português",
      "Um escritor brasileiro",
      "Uma importante liderança do Quilombo dos Palmares",
      "Um presidente do Brasil"
    ],

    answer: 2
  },

  {
    question:
      "Onde estava localizado o Quilombo dos Palmares?",

    options: [
      "Na região da Serra da Barriga, em Alagoas",
      "No Rio Grande do Sul",
      "Em Brasília",
      "No Amazonas"
    ],

    answer: 0
  },

  {
    question:
      "Em que ano foi assinada a Lei Áurea?",

    options: [
      "1500",
      "1695",
      "1822",
      "1888"
    ],

    answer: 3
  },

  {
    question:
      "Qual escritora é considerada uma pioneira da literatura afro-brasileira?",

    options: [
      "Maria Firmina dos Reis",
      "Clarice Lispector",
      "Cecília Meireles",
      "Rachel de Queiroz"
    ],

    answer: 0
  }

];


let currentQuestion = 0;
let score = 0;
let answered = false;


const questionElement =
  document.getElementById("question");

const optionsElement =
  document.getElementById("options");

const feedbackElement =
  document.getElementById("feedback");

const nextButton =
  document.getElementById("nextQuestion");

const questionNumber =
  document.getElementById("questionNumber");

const scoreElement =
  document.getElementById("score");


function loadQuestion() {

  answered = false;

  feedbackElement.textContent = "";

  nextButton.style.display = "none";

  const question = questions[currentQuestion];

  questionNumber.textContent =
    `Pergunta ${currentQuestion + 1} de ${questions.length}`;

  questionElement.textContent =
    question.question;

  optionsElement.innerHTML = "";

  question.options.forEach((option, index) => {

    const button = document.createElement("button");

    button.classList.add("option");

    button.textContent = option;

    button.addEventListener("click", () => {
      selectAnswer(index);
    });

    optionsElement.appendChild(button);

  });

}


function selectAnswer(selectedIndex) {

  if (answered) return;

  answered = true;

  const question = questions[currentQuestion];

  const buttons =
    document.querySelectorAll(".option");

  buttons.forEach(button => {
    button.disabled = true;
  });


  if (selectedIndex === question.answer) {

    buttons[selectedIndex]
      .classList.add("correct");

    score++;

    scoreElement.textContent =
      `Pontos: ${score}`;

    feedbackElement.textContent =
      "✓ Resposta correta!";

    feedbackElement.style.color =
      "#3b873b";

  } else {

    buttons[selectedIndex]
      .classList.add("wrong");

    buttons[question.answer]
      .classList.add("correct");

    feedbackElement.textContent =
      "✗ Resposta incorreta.";

    feedbackElement.style.color =
      "#b33";

  }


  nextButton.style.display = "inline-block";

}


nextButton.addEventListener("click", () => {

  currentQuestion++;

  if (currentQuestion < questions.length) {

    loadQuestion();

  } else {

    finishQuiz();

  }

});


function finishQuiz() {

  questionNumber.textContent =
    "Quiz concluído!";

  questionElement.textContent =
    `Você acertou ${score} de ${questions.length} perguntas.`;

  optionsElement.innerHTML = "";

  feedbackElement.style.color = "#bd7920";

  if (score === questions.length) {

    feedbackElement.textContent =
      "🎉 Excelente! Você acertou todas as perguntas!";

  } else if (score >= 3) {

    feedbackElement.textContent =
      "👏 Muito bem! Você conhece bastante sobre o tema.";

  } else {

    feedbackElement.textContent =
      "📚 Continue estudando e conhecendo a história.";

  }

  nextButton.textContent =
    "Refazer quiz";

  nextButton.style.display =
    "inline-block";

  nextButton.onclick = restartQuiz;

}


function restartQuiz() {

  currentQuestion = 0;

  score = 0;

  scoreElement.textContent =
    "Pontos: 0";

  nextButton.textContent =
    "Próxima pergunta";

  nextButton.onclick = null;

  loadQuestion();

}


// Inicia o quiz

loadQuestion();


// ================================
// ANIMAÇÃO DA REFLEXÃO
// ================================

reflectionText.style.transition =
  "opacity .2s";