document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("show-login");
  const registerBtn = document.getElementById("show-register");

  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  const formTitle = document.getElementById("form-title");
  const formSubtitle = document.getElementById("form-subtitle");
  const authMessage = document.getElementById("auth-message");

  if (typeof isAuthenticated === "function" && isAuthenticated()) {
    redirectAfterLogin();
    return;
  }

  function clearAuthMessage() {
    if (!authMessage) return;
    authMessage.textContent = "";
    authMessage.className = "auth-message";
  }

  function showAuthMessage(message, type) {
    if (!authMessage) return;
    authMessage.textContent = message;
    authMessage.className = `auth-message ${type}`;
  }

  function switchToLogin() {
    if (loginBtn) loginBtn.classList.add("active");
    if (registerBtn) registerBtn.classList.remove("active");

    if (loginForm) loginForm.classList.add("active-form");
    if (registerForm) registerForm.classList.remove("active-form");

    if (formTitle) formTitle.textContent = "Bem-vindo de volta";
    if (formSubtitle) formSubtitle.textContent = "Faça login para acessar sua conta.";

    clearAuthMessage();
  }

  function switchToRegister() {
    if (registerBtn) registerBtn.classList.add("active");
    if (loginBtn) loginBtn.classList.remove("active");

    if (registerForm) registerForm.classList.add("active-form");
    if (loginForm) loginForm.classList.remove("active-form");

    if (formTitle) formTitle.textContent = "Crie sua conta";
    if (formSubtitle) formSubtitle.textContent = "Preencha os dados para começar.";

    clearAuthMessage();
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", switchToLogin);
  }

  if (registerBtn) {
    registerBtn.addEventListener("click", switchToRegister);
  }

  const toggleButtons = document.querySelectorAll(".toggle-password");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const input = document.getElementById(targetId);
      const icon = button.querySelector("i");

      if (!input || !icon) return;

      if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
      } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
      }
    });
  });

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const emailInput = document.getElementById("login-email");
      const senhaInput = document.getElementById("login-password");

      const email = emailInput ? emailInput.value.trim() : "";
      const senha = senhaInput ? senhaInput.value : "";

      if (!email || !senha) {
        showAuthMessage("Preencha e-mail e senha.", "error");
        return;
      }

      if (typeof loginMock !== "function") {
        showAuthMessage("Erro interno: autenticação mock não carregada.", "error");
        return;
      }

      const result = loginMock(email, senha);

      if (!result.success) {
        showAuthMessage(result.message || "E-mail ou senha inválidos.", "error");
        return;
      }

      showAuthMessage("Login realizado com sucesso.", "success");

      setTimeout(() => {
        if (typeof redirectAfterLogin === "function") {
          redirectAfterLogin();
        }
      }, 700);
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nomeInput = document.getElementById("register-name");
      const emailInput = document.getElementById("register-email");
      const senhaInput = document.getElementById("register-password");
      const confirmarSenhaInput = document.getElementById("register-confirm-password");

      const nome = nomeInput ? nomeInput.value.trim() : "";
      const email = emailInput ? emailInput.value.trim() : "";
      const senha = senhaInput ? senhaInput.value : "";
      const confirmarSenha = confirmarSenhaInput ? confirmarSenhaInput.value : "";

      if (!nome || !email || !senha || !confirmarSenha) {
        showAuthMessage("Preencha todos os campos do cadastro.", "error");
        return;
      }

      if (senha !== confirmarSenha) {
        showAuthMessage("As senhas não coincidem.", "error");
        return;
      }

      if (typeof registerMock !== "function") {
        showAuthMessage("Erro interno: autenticação mock não carregada.", "error");
        return;
      }

      const result = registerMock(nome, email, senha);

      if (!result.success) {
        showAuthMessage("Erro ao cadastrar usuário.", "error");
        return;
      }

      showAuthMessage("Cadastro realizado com sucesso.", "success");

      setTimeout(() => {
        if (typeof redirectAfterLogin === "function") {
          redirectAfterLogin();
        }
      }, 700);
    });
  }
});