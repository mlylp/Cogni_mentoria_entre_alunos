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

function loginMock(email, senha) {
  const user = MOCK_USERS.find(
    (u) => u.email === email && u.senha === senha
  );

  if (!user) {
    return {
      success: false,
      message: "E-mail ou senha inválidos."
    };
  }

  const token = "mock-token-" + Date.now();

  localStorage.setItem("cognu_token", token);
  localStorage.setItem("cognu_user", JSON.stringify(user));

  return {
    success: true,
    user
  };
}

function registerMock(nome, email, senha) {
  const user = {
    id: Date.now(),
    nome,
    email,
    perfil: "aluno"
  };

  localStorage.setItem("cognu_token", "mock-token");
  localStorage.setItem("cognu_user", JSON.stringify(user));

  return {
    success: true,
    user
  };
}

function isAuthenticated() {
  return !!localStorage.getItem("cognu_token");
}

function redirectAfterLogin() {
  const user = JSON.parse(localStorage.getItem("cognu_user"));

  if (!user) return;

  if (user.perfil === "mentor") {
    window.location.href = "dashboard-mentor.html";
  } else {
    window.location.href = "dashboard-aluno.html";
  }
}