const MOCK_USERS = [
  {
    id: 1,
    nome: "Aluno Teste",
    email: "aluno@cognu.com",
    senha: "123456",
    perfil: "aluno"
  },
  {
    id: 2,
    nome: "Mentor Teste",
    email: "mentor@cognu.com",
    senha: "123456",
    perfil: "mentor"
  }
];

const STORAGE_KEYS = {
  token: "cognu_token",
  user: "cognu_user",
  mentorias: "cognu_mentorias"
};

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
      message: "E-mail ou senha inválidos."
    };
  }

  const safeUser = {
    id: user.id,
    nome: user.nome,
    email: user.email,
    perfil: user.perfil
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
  window.location.href = "index.html";
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
    window.location.href = "index.html";
  }
}

function requireRole(role) {
  const user = getCurrentUser();

  if (!user) {
    window.location.href = "index.html";
    return;
  }

  if (user.perfil !== role) {
    if (user.perfil === "aluno") {
      window.location.href = "dashboard-aluno.html";
    } else if (user.perfil === "mentor") {
      window.location.href = "dashboard-mentor.html";
    } else {
      window.location.href = "index.html";
    }
  }
}

function redirectAfterLogin() {
  const user = getCurrentUser();

  if (!user) return;

  if (user.perfil === "aluno") {
    window.location.href = "dashboard-aluno.html";
  } else if (user.perfil === "mentor") {
    window.location.href = "dashboard-mentor.html";
  }
}

function initializeMentorias() {
  const mentorias = localStorage.getItem(STORAGE_KEYS.mentorias);

  if (!mentorias) {
    const mockMentorias = [
      {
        id: 1,
        mentor: "Carlos Henrique",
        aluno: "Aluno Teste",
        data: "2026-03-15",
        horario: "19:00",
        meetLink: "https://meet.google.com/abc-defg-hij",
        status: "confirmada"
      }
    ];

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

initializeMentorias();