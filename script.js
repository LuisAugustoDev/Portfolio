document.addEventListener("DOMContentLoaded", () => {
  // Configuração de navegação suave para âncoras
  document.querySelectorAll('.navbar .item a').forEach(item => {
    item.addEventListener('click', event => {
      const targetId = item.getAttribute('href');

      // Verifica se o link é uma âncora (começa com #)
      if (targetId.startsWith('#')) {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
      // Se o link não é uma âncora, ele permitirá o redirecionamento padrão
    });
  });

  // Configuração para redirecionar para as páginas de login e signup
  document.querySelector('.login').addEventListener('click', function() {
    window.location.href = 'login.html';
  });

  document.querySelector('.signup').addEventListener('click', function() {
    window.location.href = 'signup.html';
  });

const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
const formSteps = document.querySelectorAll('.form-step');
let formStepIndex = 0;

function showFormStep(index) {
  formSteps.forEach((step, i) => {
    step.classList.toggle('form-step-active', i === index);
  });
}

nextBtn.addEventListener('click', () => {
  if (formStepIndex < formSteps.length - 1) {
    formStepIndex++;
    showFormStep(formStepIndex);
  }
});

backBtn.addEventListener('click', () => {
  if (formStepIndex > 0) {
    formStepIndex--;
    showFormStep(formStepIndex);
  }
});

// Inicializa mostrando o primeiro passo do formulário
showFormStep(formStepIndex);
<<<<<<< HEAD
});
=======
});

function updateRatingValue(value) {
    document.getElementById("rating-value").textContent = value;
}
>>>>>>> 7eb55ad (Finalização)
