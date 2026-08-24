// Dados do Projeto
const personalidades = [
  {
    id: 1,
    nome: "Zumbi dos Palmares",
    categoria: "lideranca",
    icone: "⚔️",
    resumo: "Último líder do Quilombo dos Palmares e maior símbolo de resistência à escravidão no Brasil.",
    detalhes: "Zumbi nasceu em Alagoas em 1655. Liderou a resistência do Quilombo dos Palmares contra as investidas das forças coloniais portuguesas. Defendeu a liberdade irrestrita do seu povo até a sua morte, em 20 de novembro de 1695, data que hoje celebra a Consciência Negra."
  },
  {
    id: 2,
    nome: "Dandara dos Palmares",
    categoria: "lideranca",
    icone: "🛡️",
    resumo: "Guerreira quilombola, estrategista e liderança fundamental na defesa de Palmares.",
    detalhes: "Dandara foi uma das principais lideranças femininas de Palmares. Dominava técnicas de capoeira e teve papel central nas batalhas do quilombo. Recusou o acordo de paz que previa a libertação parcial dos quilombolas se outros permanecessem escravizados, lutando até o fim por libertação plena."
  },
  {
    id: 3,
    nome: "Machado de Assis",
    categoria: "literatura",
    icone: "✍️",
    resumo: "Fundador da Academia Brasileira de Letras e considerado um dos maiores escritores do mundo.",
    detalhes: "Joaquim Maria Machado de Assis (1839–1908), homem negro nascido no Rio de Janeiro, superou as barreiras sociais da época para se tornar o maior nome da literatura brasileira. Escreveu obras-primas como 'Dom Casmurro' e 'Memórias Póstumas de Brás Cubas'."
  },
  {
    id: 4,
    nome: "Carolina Maria de Jesus",
    categoria: "literatura",
    icone: "📖",
    resumo: "Escritora, poetisa e compositora brasileira, autora de 'Quarto de Despejo'.",
    detalhes: "Carolina Maria de Jesus (1914–1977) foi uma das primeiras e mais importantes escritoras negras do Brasil. Morando na favela do Canindé, em São Paulo, relatou em diários a dura realidade da fome e da pobreza. Seu livro 'Quarto de Despejo: Diário de uma Favela' foi traduzido para mais de 13 idiomas."
  },
  {
    id: 5,
    nome: "Luiz Gama",
    categoria: "ciencia",
    icone: "⚖️",
    resumo: "Rábula, jornalista, escritor e patrono da abolição da escravidão no Brasil.",
    detalhes: "Vendido como escravo pelo próprio pai aos 10 anos, Luiz Gama (1830–1882) alfabetizou-se aos 17 anos e conquistou sua liberdade. Tornou-se um jurista autodidata brilhante, libertando judicialmente mais de 500 pessoas escravizadas no Brasil sem cobrar honorários."
  },
  {
    id: 6,
    nome: "Lélia Gonzalez",
    categoria: "ciencia",
    icone: "🧠",
    resumo: "Intelectual, autora, política, professora e antropóloga pioneira do feminismo negro.",
    detalhes: "Lélia Gonzalez (1935–1994) foi pioneira nos estudos sobre a interseccionalidade de raça e gênero. Formulou o conceito de 'Amefricanidade' e foi uma das fundadoras do Movimento Negro Unificado (MNU), sendo referência global no pensamento social crítico."
  }
];

const marcosHistoricos = [
  {
    ano: "1695",
    titulo: "Morte de Zumbi dos Palmares",
    descricao: "Assassinado em 20 de novembro pelas forças coloniais, Zumbi torna-se símbolo imortal da resistência negra no Brasil."
  },
  {
    ano: "1871",
    titulo: "Lei do Ventre Livre",
    descricao: "Declara livres os filhos de mulheres escravizadas nascidos a partir daquela data, em uma tentativa de desacelerar o movimento abolicionista."
  },
  {
    ano: "1888",
    titulo: "Abolição Formal (Lei Áurea)",
    descricao: "O Brasil torna-se o último país do Ocidente a abolir officially a escravidão, sem contudo garantir terra, direitos ou integração social aos libertos."
  },
  {
    ano: "1978",
    titulo: "Fundação do MNU",
    descricao: "Em plena ditadura militar, é fundado em São Paulo o Movimento Negro Unificado, marco da reorganização contemporânea da luta antirracista."
  },
  {
    ano: "2003",
    titulo: "Lei 10.639/03",
    descricao: "Torna obrigatório o ensino de História e Cultura Afro-Brasileira nas escolas de ensino fundamental e médio do país."
  },
  {
    ano: "2023",
    titulo: "Feriado Nacional",
    descricao: "Sancionada a lei que torna o Dia Nacional de Zumbi e da Consciência Negra feriado em todo o território brasileiro."
  }
];

const citacoes = [
  { texto: "Numa sociedade racista, não basta não ser racista, é preciso ser antirracista.", autor: "Angela Davis" },
  { texto: "Onde houver escravidão, não haverá liberdade de pensamento.", autor: "Luiz Gama" },
  { texto: "A minha luta diária é para ser reconhecida como sujeito, impor minha existência numa sociedade que insiste em me negar.", autor: "Djamila Ribeiro" },
  { texto: "Não sou descendente de escravos. Sou descendente de seres humanos que foram escravizados.", autor: "Makota Valdina" },
  { texto: "Eu não sou livre enquanto qualquer mulher for prisioneira, mesmo que as correntes dela sejam diferentes das minhas.", autor: "Audre Lorde" },
  { texto: "A humanidade é uma só, e os direitos devem ser iguais para todos.", autor: "Lélia Gonzalez" }
];

const quizPerguntas = [
  {
    pergunta: "Por que o dia 20 de novembro foi escolhido como o Dia da Consciência Negra?",
    opcoes: [
      "Foi a data da assinatura da Lei Áurea em 1888.",
      "Marca a data da morte de Zumbi dos Palmares em 1695.",
      "É o aniversário de nascimento de Luiz Gama.",
      "Corresponde à fundação do Quilombo dos Palmares."
    ],
    correta: 1,
    explicacao: "A data homenageia Zumbi dos Palmares, que faleceu em 20 de novembro de 1695 defendendo o quilombo."
  },
  {
    pergunta: "O Quilombo dos Palmares ficava localizado em qual estado atual do Brasil?",
    opcoes: [
      "Bahia",
      "Rio de Janeiro",
      "Alagoas",
      "Pernambuco"
    ],
    correta: 2,
    explicacao: "Palmares localizava-se na Serra da Barriga, região do atual estado de Alagoas."
  },
  {
    pergunta: "Qual escritora negra brasileira relatou sua vida na favela na obra 'Quarto de Despejo'?",
    opcoes: [
      "Conceição Evaristo",
      "Carolina Maria de Jesus",
      "Djamila Ribeiro",
      "Lélia Gonzalez"
    ],
    correta: 1,
    explicacao: "Carolina Maria de Jesus publicou 'Quarto de Despejo' em 1960, tornando-se um marco literário internacional."
  },
  {
    pergunta: "Qual lei tornou obrigatório o ensino da História e Cultura Afro-Brasileira nas escolas?",
    opcoes: [
      "Lei nº 10.639/2003",
      "Lei Áurea",
      "Lei dos Sexagenários",
      "Lei de Cotas Raciais"
    ],
    correta: 0,
    explicacao: "A Lei 10.639/03 alterou a LDB para incluir a temática afro-brasileira no currículo escolar."
  },
  {
    pergunta: "Quem foi o jurista autodidata que libertou mais de 500 pessoas escravizadas no século XIX?",
    opcoes: [
      "Machado de Assis",
      "José do Patrocínio",
      "Luiz Gama",
      "André Rebouças"
    ],
    correta: 2,
    explicacao: "Luiz Gama usou o direito e a advocacia libertária para obter a soltura de centenas de escravizados."
  }
];

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  renderFigures("all");
  renderTimeline();
  setupFilterButtons();
  setupQuoteGenerator();
  setupQuiz();
  setupNavigation();
  setupModal();
});

// Navegação Mobile
function setupNavigation() {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }
}

// Renderização de Personalidades
function renderFigures(filter) {
  const grid = document.getElementById("figures-grid");
  if (!grid) return;

  grid.innerHTML = "";

  const filtered = filter === "all" 
    ? personalidades 
    : personalidades.filter(p => p.categoria === filter);

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "figure-card";
    card.innerHTML = `
      <div class="figure-header">
        <div class="figure-avatar">${item.icone}</div>
        <span class="figure-tag">${getCategoriaLabel(item.categoria)}</span>
        <h3>${item.nome}</h3>
      </div>
      <div class="figure-body">
        <p>${item.resumo}</p>
        <button class="btn-know-more" onclick="openModal(${item.id})">Saiba Mais</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function getCategoriaLabel(cat) {
  switch (cat) {
    case "lideranca": return "Liderança";
    case "literatura": return "Literatura";
    case "ciencia": return "Ciência & Direito";
    default: return "História";
  }
}

function setupFilterButtons() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      buttons.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      renderFigures(e.target.getAttribute("data-filter"));
    });
  });
}

// Linha do Tempo
function renderTimeline() {
  const timeline = document.getElementById("timeline");
  if (!timeline) return;

  timeline.innerHTML = "";

  marcosHistoricos.forEach(marco => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-year">${marco.ano}</div>
        <h4>${marco.titulo}</h4>
        <p>${marco.descricao}</p>
      </div>
    `;
    timeline.appendChild(item);
  });
}

// Citações
function setupQuoteGenerator() {
  const quoteText = document.getElementById("quote-text");
  const quoteAuthor = document.getElementById("quote-author");
  const btnNext = document.getElementById("btn-next-quote");

  if (!quoteText || !quoteAuthor || !btnNext) return;

  let lastIndex = 0;

  btnNext.addEventListener("click", () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * citacoes.length);
    } while (randomIndex === lastIndex && citacoes.length > 1);

    lastIndex = randomIndex;
    const selected = citacoes[randomIndex];

    quoteText.style.opacity = 0;
    quoteAuthor.style.opacity = 0;

    setTimeout(() => {
      quoteText.innerText = `"${selected.texto}"`;
      quoteAuthor.innerText = `— ${selected.autor}`;
      quoteText.style.opacity = 1;
      quoteAuthor.style.opacity = 1;
    }, 200);
  });
}

// Quiz
let currentQuestionIndex = 0;
let score = 0;

function setupQuiz() {
  renderQuestion();

  const nextBtn = document.getElementById("quiz-next-btn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < quizPerguntas.length) {
        renderQuestion();
      } else {
        renderQuizResult();
      }
    });
  }
}

function renderQuestion() {
  const q = quizPerguntas[currentQuestionIndex];
  document.getElementById("quiz-progress").innerText = `Pergunta ${currentQuestionIndex + 1} de ${quizPerguntas.length}`;
  document.getElementById("quiz-question").innerText = q.pergunta;

  const optionsContainer = document.getElementById("quiz-options");
  optionsContainer.innerHTML = "";

  const feedback = document.getElementById("quiz-feedback");
  feedback.innerText = "";
  feedback.className = "quiz-feedback";

  document.getElementById("quiz-next-btn").style.display = "none";

  q.opcoes.forEach((opcao, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.innerText = opcao;
    btn.addEventListener("click", () => checkAnswer(idx));
    optionsContainer.appendChild(btn);
  });
}

function checkAnswer(selectedIndex) {
  const q = quizPerguntas[currentQuestionIndex];
  const options = document.querySelectorAll(".quiz-option");
  const feedback = document.getElementById("quiz-feedback");

  options.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correta) {
      btn.classList.add("correct");
    }
    if (idx === selectedIndex && selectedIndex !== q.correta) {
      btn.classList.add("wrong");
    }
  });

  if (selectedIndex === q.correta) {
    score++;
    document.getElementById("quiz-score-badge").innerText = `Pontuação: ${score}`;
    feedback.innerText = "✓ Correto! " + q.explicacao;
    feedback.style.color = "#2ecc71";
  } else {
    feedback.innerText = "✕ Incorreto. " + q.explicacao;
    feedback.style.color = "#e74c3c";
  }

  document.getElementById("quiz-next-btn").style.display = "inline-block";
}

function renderQuizResult() {
  const quizCard = document.getElementById("quiz-container");
  quizCard.innerHTML = `
    <div style="text-align: center; padding: 2rem 0;">
      <h3 style="font-size: 1.8rem; color: var(--gold); margin-bottom: 1rem;">Quiz Concluído!</h3>
      <p style="font-size: 1.2rem; color: #fff; margin-bottom: 1.5rem;">Sua pontuação final foi: <strong>${score} de ${quizPerguntas.length}</strong></p>
      <p style="color: var(--text-muted); margin-bottom: 2rem;">
        ${score === quizPerguntas.length ? "Excelente! Você demonstra ótimo conhecimento sobre a história antirracista." : "Bom esforço! Continue explorando os conteúdos da página para aprender ainda mais."}
      </p>
      <button class="btn btn-primary" onclick="resetQuiz()">Refazer Quiz</button>
    </div>
  `;
}

function resetQuiz() {
  location.reload();
}

// Modal
function setupModal() {
  const overlay = document.getElementById("modal-overlay");
  const closeBtn = document.getElementById("modal-close");

  if (closeBtn && overlay) {
    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
  }
}

function openModal(id) {
  const figure = personalidades.find(p => p.id === id);
  if (!figure) return;

  const body = document.getElementById("modal-body");
  body.innerHTML = `
    <span class="modal-tag">${getCategoriaLabel(figure.categoria)}</span>
    <h3>${figure.nome}</h3>
    <p>${figure.detalhes}</p>
  `;

  const overlay = document.getElementById("modal-overlay");
  overlay.classList.add("active");
  overlay.setAttribute("aria-hidden", "false");
}

function closeModal() {
  const overlay = document.getElementById("modal-overlay");
  if (overlay) {
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");
  }
}