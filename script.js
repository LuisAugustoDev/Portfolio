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
  const loginButton = document.querySelector('.login');
  if (loginButton) {
    loginButton.addEventListener('click', function() {
      window.location.href = 'login.html';
    });
  }

  const signupButton = document.querySelector('.signup');
  if (signupButton) {
    signupButton.addEventListener('click', function() {
      window.location.href = 'signup.html';
    });
  }

  // Função que atualiza o valor de avaliação
  function updateRatingValue(value) {
    document.getElementById("rating-value").textContent = value;
  }

  // Função que será chamada quando o elemento entrar na viewport
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Quando o elemento entra na tela, adiciona a classe "visible"
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Para de observar após o elemento ter entrado
      }
    });
  }

  // Configuração do Intersection Observer
  const observerOptions = {
    root: null, // Não especifica um contêiner, então será a viewport do navegador
    rootMargin: '0px', // Quando o elemento está na área visível
    threshold: 0.5 // O elemento deve estar 50% visível para a animação começar
  };

  // Cria o Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  // Seleciona todos os elementos que devem ter o efeito fade-in
  const fadeElements = document.querySelectorAll('.fade-in');

  // Começa a observar esses elementos
  fadeElements.forEach(element => {
    observer.observe(element);
  });
}); // <-- Correção: fechamento do bloco DOMContentLoaded
