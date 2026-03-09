const MOCK_USERS = [
  {
    id: 1,
    nome: "Aluno Teste",
    email: "aluno@cogni.com",
    senha: "123456",
    perfil: "aluno"
  },
  {
    id: 2,
    nome: "Carlos Henrique",
    email: "mentor@cogni.com",
    senha: "123456",
    perfil: "mentor",
    mentorId: 101
  }
];

function buildSlots(mentorCode, items) {
  return items.map((item, index) => ({
    id: `${mentorCode}-${index + 1}`,
    data: item.data,
    horario: item.horario,
    status: "disponivel",
    meetLink: `https://meet.google.com/${mentorCode}${index + 1}abc-${mentorCode}${index + 1}def-${mentorCode}${index + 1}ghi`
  }));
}

const MOCK_MENTORS = [
  {
    id: 101,
    nome: "Carlos Henrique",
    titulo: "Mentor de Exatas",
    bio: "Foco em matematica, fisica e estrategia para provas.",
    especialidade: "Matematica, Fisica e estrategia de prova.",
    metodologia: "Aulas praticas com revisao guiada e resolucao de questoes.",
    publico: "Alunos de ensino medio e pre-vestibular.",
    experiencia: "5 anos",
    avaliacao: "4.9/5",
    formato: "Google Meet",
    duracao: "1h",
    preco: 50,
    icon: "fa-solid fa-square-root-variable",
    status: "Disponivel",
    resumoCards: [
      {
        icon: "fa-solid fa-video",
        titulo: "Formato online",
        texto: "Sessoes por Google Meet com material de apoio."
      },
      {
        icon: "fa-solid fa-bolt",
        titulo: "Foco pratico",
        texto: "Conteudo direcionado para dificuldades reais."
      },
      {
        icon: "fa-solid fa-user-check",
        titulo: "Atendimento individual",
        texto: "Plano personalizado por aluno."
      }
    ],
    slots: buildSlots("carl", [
      { data: "2026-03-15", horario: "19:00" },
      { data: "2026-03-16", horario: "20:00" },
      { data: "2026-03-18", horario: "18:00" },
      { data: "2026-03-20", horario: "19:30" },
      { data: "2026-03-22", horario: "17:00" }
    ])
  },
  {
    id: 102,
    nome: "Juliana Souza",
    titulo: "Mentora de Redacao",
    bio: "Especialista em redacao, humanas e organizacao de estudo.",
    especialidade: "Redacao ENEM, historia e geografia.",
    metodologia: "Treino com repertorio, estrutura e correcao individual.",
    publico: "Alunos que buscam evolucao em escrita argumentativa.",
    experiencia: "6 anos",
    avaliacao: "4.8/5",
    formato: "Google Meet",
    duracao: "1h",
    preco: 55,
    icon: "fa-solid fa-pen-nib",
    status: "Disponivel",
    resumoCards: [
      {
        icon: "fa-solid fa-file-signature",
        titulo: "Correcao ativa",
        texto: "Feedback objetivo com plano de melhoria."
      },
      {
        icon: "fa-solid fa-book-open",
        titulo: "Repertorio",
        texto: "Uso de referencias para fortalecer argumentos."
      },
      {
        icon: "fa-solid fa-list-check",
        titulo: "Rotina de estudo",
        texto: "Organizacao semanal para manter consistencia."
      }
    ],
    slots: buildSlots("juli", [
      { data: "2026-03-15", horario: "10:00" },
      { data: "2026-03-17", horario: "14:00" },
      { data: "2026-03-19", horario: "16:00" },
      { data: "2026-03-21", horario: "11:00" },
      { data: "2026-03-23", horario: "15:30" }
    ])
  },
  {
    id: 103,
    nome: "Rafael Lima",
    titulo: "Mentor de Programacao",
    bio: "Apoio em logica, algoritmos e projetos de software.",
    especialidade: "Logica de programacao, JavaScript e estruturas de dados.",
    metodologia: "Resolucao de problemas com pair programming orientado.",
    publico: "Iniciantes e estudantes de tecnologia.",
    experiencia: "4 anos",
    avaliacao: "4.7/5",
    formato: "Google Meet",
    duracao: "1h",
    preco: 65,
    icon: "fa-solid fa-code",
    status: "Disponivel",
    resumoCards: [
      {
        icon: "fa-solid fa-terminal",
        titulo: "Hands on",
        texto: "Sessao focada em codigo e depuracao."
      },
      {
        icon: "fa-solid fa-sitemap",
        titulo: "Base solida",
        texto: "Construimos fundamentos antes de avancar."
      },
      {
        icon: "fa-solid fa-rocket",
        titulo: "Projetos",
        texto: "Aplicacao pratica para consolidar aprendizado."
      }
    ],
    slots: buildSlots("rafa", [
      { data: "2026-03-16", horario: "09:00" },
      { data: "2026-03-18", horario: "19:00" },
      { data: "2026-03-20", horario: "21:00" },
      { data: "2026-03-22", horario: "18:00" },
      { data: "2026-03-24", horario: "20:00" }
    ])
  },
  {
    id: 104,
    nome: "Patricia Gomes",
    titulo: "Mentora de Biologia",
    bio: "Mentoria para biologia, ciencias da natureza e revisao final.",
    especialidade: "Biologia celular, genetica e ecologia.",
    metodologia: "Mapas mentais, simulados e revisao por tema.",
    publico: "Estudantes de vestibular e reforco escolar.",
    experiencia: "7 anos",
    avaliacao: "4.9/5",
    formato: "Google Meet",
    duracao: "1h",
    preco: 60,
    icon: "fa-solid fa-dna",
    status: "Disponivel",
    resumoCards: [
      {
        icon: "fa-solid fa-flask",
        titulo: "Ciencias aplicadas",
        texto: "Explicacoes com exemplos do cotidiano."
      },
      {
        icon: "fa-solid fa-layer-group",
        titulo: "Revisao por blocos",
        texto: "Organizacao por assuntos para ganho de ritmo."
      },
      {
        icon: "fa-solid fa-notes-medical",
        titulo: "Fixacao",
        texto: "Listas direcionadas para consolidar conteudo."
      }
    ],
    slots: buildSlots("pati", [
      { data: "2026-03-15", horario: "08:00" },
      { data: "2026-03-17", horario: "18:30" },
      { data: "2026-03-19", horario: "20:00" },
      { data: "2026-03-21", horario: "09:30" },
      { data: "2026-03-25", horario: "19:00" }
    ])
  },
  {
    id: 105,
    nome: "Diego Martins",
    titulo: "Mentor de Ingles",
    bio: "Conversacao, leitura e estrategia para provas de ingles.",
    especialidade: "Ingles para vestibular e comunicacao.",
    metodologia: "Sessoes praticas com speaking e exercicios contextualizados.",
    publico: "Alunos iniciantes a intermediarios.",
    experiencia: "5 anos",
    avaliacao: "4.8/5",
    formato: "Google Meet",
    duracao: "1h",
    preco: 58,
    icon: "fa-solid fa-language",
    status: "Disponivel",
    resumoCards: [
      {
        icon: "fa-solid fa-comments",
        titulo: "Speaking",
        texto: "Pratica de comunicacao em cada encontro."
      },
      {
        icon: "fa-solid fa-book",
        titulo: "Reading",
        texto: "Tecnicas para interpretar textos rapidamente."
      },
      {
        icon: "fa-solid fa-headphones",
        titulo: "Listening",
        texto: "Exercicios guiados com audio e feedback."
      }
    ],
    slots: buildSlots("dieg", [
      { data: "2026-03-16", horario: "13:00" },
      { data: "2026-03-18", horario: "15:00" },
      { data: "2026-03-20", horario: "17:30" },
      { data: "2026-03-22", horario: "10:30" },
      { data: "2026-03-24", horario: "14:30" }
    ])
  },
  {
    id: 106,
    nome: "Fernanda Rocha",
    titulo: "Mentora de Quimica",
    bio: "Mentoria em quimica geral, organcia e fisico-quimica.",
    especialidade: "Quimica geral, organica e estequiometria.",
    metodologia: "Explicacao passo a passo e listas por nivel.",
    publico: "Alunos que querem melhorar desempenho em quimica.",
    experiencia: "6 anos",
    avaliacao: "4.9/5",
    formato: "Google Meet",
    duracao: "1h",
    preco: 62,
    icon: "fa-solid fa-atom",
    status: "Disponivel",
    resumoCards: [
      {
        icon: "fa-solid fa-vial",
        titulo: "Base conceitual",
        texto: "Clareza de conceitos para resolver exercicios."
      },
      {
        icon: "fa-solid fa-calculator",
        titulo: "Calculos",
        texto: "Treino de estequiometria com metodo."
      },
      {
        icon: "fa-solid fa-check-double",
        titulo: "Revisao final",
        texto: "Checklist para prova com foco em pontos-chave."
      }
    ],
    slots: buildSlots("fern", [
      { data: "2026-03-15", horario: "12:00" },
      { data: "2026-03-17", horario: "19:00" },
      { data: "2026-03-19", horario: "21:00" },
      { data: "2026-03-23", horario: "18:00" },
      { data: "2026-03-25", horario: "20:30" }
    ])
  }
];

const STORAGE_KEYS = {
  token: "cognu_token",
  user: "cognu_user",
  mentorias: "cognu_mentorias",
  mentors: "cognu_mentors",
  selectedMentorId: "cognu_selected_mentor_id",
  selectedSlot: "cognu_selected_slot"
};

function getCurrentSection() {
  const normalizedPath = window.location.pathname.replace(/\\/g, "/");

  if (normalizedPath.includes("/pages/aluno/")) return "aluno";
  if (normalizedPath.includes("/pages/mentor/")) return "mentor";
  if (normalizedPath.includes("/pages/")) return "pages-root";
  return "root";
}

function getIndexPath() {
  const section = getCurrentSection();

  if (section === "aluno" || section === "mentor") {
    return "../../index.html";
  }

  if (section === "pages-root") {
    return "../index.html";
  }

  return "index.html";
}

function getRoleDashboardPath(role) {
  const section = getCurrentSection();
  const targetIsAluno = role === "aluno";

  if (section === "root") {
    return targetIsAluno ? "pages/aluno/dashboard.html" : "pages/mentor/dashboard.html";
  }

  if (section === "pages-root") {
    return targetIsAluno ? "aluno/dashboard.html" : "mentor/dashboard.html";
  }

  if (section === "aluno") {
    return targetIsAluno ? "dashboard.html" : "../mentor/dashboard.html";
  }

  return targetIsAluno ? "../aluno/dashboard.html" : "dashboard.html";
}

function generateMockToken(user) {
  return `mock-token-${user.perfil}-${user.id}-${Date.now()}`;
}

function loginMock(email, senha) {
  const normalizedEmail = email.trim().toLowerCase();

  const user = MOCK_USERS.find(
    (u) => u.email === normalizedEmail && u.senha === senha
  );

  if (!user) {
    return {
      success: false,
      message: "E-mail ou senha invalidos."
    };
  }

  const safeUser = {
    id: user.id,
    nome: user.nome,
    email: user.email,
    perfil: user.perfil,
    mentorId: user.mentorId || null
  };

  const token = generateMockToken(user);

  localStorage.setItem(STORAGE_KEYS.token, token);
  localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(safeUser));

  return {
    success: true,
    user: safeUser
  };
}

function registerMock(nome, email, senha) {
  const safeUser = {
    id: Date.now(),
    nome: nome.trim(),
    email: email.trim().toLowerCase(),
    perfil: "aluno"
  };

  const token = generateMockToken({
    id: safeUser.id,
    perfil: safeUser.perfil
  });

  localStorage.setItem(STORAGE_KEYS.token, token);
  localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(safeUser));

  return {
    success: true,
    user: safeUser
  };
}

function logoutMock() {
  localStorage.removeItem(STORAGE_KEYS.token);
  localStorage.removeItem(STORAGE_KEYS.user);
  window.location.href = getIndexPath();
}

function getToken() {
  return localStorage.getItem(STORAGE_KEYS.token);
}

function getCurrentUser() {
  const user = localStorage.getItem(STORAGE_KEYS.user);
  return user ? JSON.parse(user) : null;
}

function isAuthenticated() {
  return !!getToken() && !!getCurrentUser();
}

function requireAuth() {
  if (!isAuthenticated()) {
    window.location.href = getIndexPath();
  }
}

function requireRole(role) {
  const user = getCurrentUser();

  if (!user) {
    window.location.href = getIndexPath();
    return;
  }

  if (user.perfil !== role) {
    if (user.perfil === "aluno") {
      window.location.href = getRoleDashboardPath("aluno");
    } else if (user.perfil === "mentor") {
      window.location.href = getRoleDashboardPath("mentor");
    } else {
      window.location.href = getIndexPath();
    }
  }
}

function redirectAfterLogin() {
  const user = getCurrentUser();

  if (!user) return;

  if (user.perfil === "aluno") {
    window.location.href = getRoleDashboardPath("aluno");
  } else if (user.perfil === "mentor") {
    window.location.href = getRoleDashboardPath("mentor");
  }
}

function initializeMentors() {
  const mentors = localStorage.getItem(STORAGE_KEYS.mentors);

  if (!mentors) {
    localStorage.setItem(STORAGE_KEYS.mentors, JSON.stringify(MOCK_MENTORS));
  }
}

function getMentors() {
  const mentors = localStorage.getItem(STORAGE_KEYS.mentors);
  return mentors ? JSON.parse(mentors) : [];
}

function saveMentors(updatedMentors) {
  localStorage.setItem(STORAGE_KEYS.mentors, JSON.stringify(updatedMentors));
}

function getMentorById(mentorId) {
  const id = Number(mentorId);
  return getMentors().find((mentor) => mentor.id === id) || null;
}

function setSelectedMentorId(mentorId) {
  localStorage.setItem(STORAGE_KEYS.selectedMentorId, String(mentorId));
}

function getSelectedMentorId() {
  const mentorId = localStorage.getItem(STORAGE_KEYS.selectedMentorId);
  return mentorId ? Number(mentorId) : null;
}

function getSelectedMentor() {
  const mentors = getMentors();
  const selectedMentorId = getSelectedMentorId();

  if (selectedMentorId) {
    return mentors.find((mentor) => mentor.id === selectedMentorId) || mentors[0] || null;
  }

  return mentors[0] || null;
}

function getCurrentMentorProfile() {
  const currentUser = getCurrentUser();
  const mentors = getMentors();

  if (!currentUser || currentUser.perfil !== "mentor") {
    return null;
  }

  if (currentUser.mentorId) {
    const mentorById = mentors.find((mentor) => mentor.id === Number(currentUser.mentorId));
    if (mentorById) return mentorById;
  }

  const mentorByName = mentors.find((mentor) => mentor.nome === currentUser.nome);
  return mentorByName || mentors[0] || null;
}

function setSelectedSlot(selection) {
  localStorage.setItem(STORAGE_KEYS.selectedSlot, JSON.stringify(selection));
}

function getSelectedSlot() {
  const slot = localStorage.getItem(STORAGE_KEYS.selectedSlot);
  return slot ? JSON.parse(slot) : null;
}

function clearSelectedSlot() {
  localStorage.removeItem(STORAGE_KEYS.selectedSlot);
}

function getMentorSlot(mentorId, slotId) {
  const mentor = getMentorById(mentorId);

  if (!mentor) return null;
  return mentor.slots.find((slot) => slot.id === slotId) || null;
}

function upsertMentorSlot(mentorId, slotData) {
  const mentors = getMentors();
  const targetMentorId = Number(mentorId);
  const mentorIndex = mentors.findIndex((mentor) => mentor.id === targetMentorId);

  if (mentorIndex === -1) return false;

  const slots = Array.isArray(mentors[mentorIndex].slots)
    ? [...mentors[mentorIndex].slots]
    : [];

  const slotIndex = slots.findIndex((slot) => slot.id === slotData.id);

  if (slotIndex >= 0) {
    slots[slotIndex] = { ...slots[slotIndex], ...slotData };
  } else {
    slots.push({
      id: slotData.id || `slot-${Date.now()}`,
      status: "disponivel",
      ...slotData
    });
  }

  mentors[mentorIndex] = {
    ...mentors[mentorIndex],
    slots
  };

  saveMentors(mentors);
  return true;
}

function removeMentorSlot(mentorId, slotId) {
  const mentors = getMentors();
  const targetMentorId = Number(mentorId);
  const mentorIndex = mentors.findIndex((mentor) => mentor.id === targetMentorId);

  if (mentorIndex === -1) return false;

  const slots = Array.isArray(mentors[mentorIndex].slots)
    ? [...mentors[mentorIndex].slots]
    : [];

  const filteredSlots = slots.filter((slot) => String(slot.id) !== String(slotId));

  mentors[mentorIndex] = {
    ...mentors[mentorIndex],
    slots: filteredSlots
  };

  saveMentors(mentors);
  return true;
}

function initializeMentorias() {
  const mentorias = localStorage.getItem(STORAGE_KEYS.mentorias);

  if (!mentorias) {
    const mentor = getMentors()[0];
    const primeiroHorario = mentor && mentor.slots ? mentor.slots[0] : null;

    const mockMentorias = primeiroHorario
      ? [
          {
            id: 1,
            mentorId: mentor.id,
            mentor: mentor.nome,
            aluno: "Aluno Teste",
            data: primeiroHorario.data,
            horario: primeiroHorario.horario,
            meetLink: primeiroHorario.meetLink,
            status: "confirmada"
          }
        ]
      : [];

    localStorage.setItem(
      STORAGE_KEYS.mentorias,
      JSON.stringify(mockMentorias)
    );
  }
}

function getMentorias() {
  const mentorias = localStorage.getItem(STORAGE_KEYS.mentorias);
  return mentorias ? JSON.parse(mentorias) : [];
}

function addMentoria(novaMentoria) {
  const mentorias = getMentorias();

  mentorias.push({
    id: Date.now(),
    ...novaMentoria
  });

  localStorage.setItem(STORAGE_KEYS.mentorias, JSON.stringify(mentorias));
}

function renderUserName(selector) {
  const element = document.querySelector(selector);
  const user = getCurrentUser();

  if (element && user) {
    element.textContent = user.nome;
  }
}

function attachLogout(selector) {
  const button = document.querySelector(selector);

  if (button) {
    button.addEventListener("click", () => {
      logoutMock();
    });
  }
}

initializeMentors();
initializeMentorias();
