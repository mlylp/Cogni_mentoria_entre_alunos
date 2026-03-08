const loginBtn = document.getElementById("show-login");
const registerBtn = document.getElementById("show-register");

const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

const formTitle = document.getElementById("form-title");
const formSubtitle = document.getElementById("form-subtitle");

loginBtn.addEventListener("click", () => {
  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");

  loginForm.classList.add("active-form");
  registerForm.classList.remove("active-form");

  formTitle.textContent = "Bem-vindo de volta";
  formSubtitle.textContent = "Faça login para acessar sua conta.";
});

registerBtn.addEventListener("click", () => {
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");

  registerForm.classList.add("active-form");
  loginForm.classList.remove("active-form");

  formTitle.textContent = "Crie sua conta";
  formSubtitle.textContent = "Preencha os dados para começar.";
});

const toggleButtons = document.querySelectorAll(".toggle-password");

toggleButtons.forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const input = document.getElementById(targetId);
    const icon = button.querySelector("i");

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