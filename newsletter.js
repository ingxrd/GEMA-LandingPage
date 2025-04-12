        // Smooth scrolling para os links da navegação
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();
              
              const targetId = this.getAttribute('href');
              if(targetId === '#') return;
              
              const targetElement = document.querySelector(targetId);
              if(targetElement) {
                  window.scrollTo({
                      top: targetElement.offsetTop - 100,
                      behavior: 'smooth'
                  });
              }
          });
      });

      // Animação de fade-in para os elementos ao rolar a página
      const observerOptions = {
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.style.opacity = '1';
                  entry.target.style.transform = 'translateY(0)';
              }
          });
      }, observerOptions);

      // Seleciona elementos para animar
      const animatedElements = document.querySelectorAll('.proposito-item, .projeto-card');
      
      // Configuração inicial dos elementos
      animatedElements.forEach(el => {
          el.style.opacity = '0';
          el.style.transform = 'translateY(30px)';
          el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          observer.observe(el);
      });
      document.addEventListener('DOMContentLoaded', function() {
        const mobileMenu = document.getElementById('mobile-menu');
        const navContainer = document.querySelector('.nav-container');
        const navLinks = document.querySelectorAll('nav ul li a');
        
        // Função para alternar o menu
        function toggleMenu() {
            mobileMenu.classList.toggle('active');
            navContainer.classList.toggle('active');
            document.body.classList.toggle('no-scroll'); // Impede rolagem quando o menu está aberto
        }
        
        // Adicionar evento de clique no botão do menu
        mobileMenu.addEventListener('click', toggleMenu);
        
        // Fechar o menu quando um link é clicado
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navContainer.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
        
        // Fechar o menu quando o usuário clicar fora dele
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navContainer.contains(event.target);
            const isClickOnToggle = mobileMenu.contains(event.target);
            
            if (navContainer.classList.contains('active') && !isClickInsideNav && !isClickOnToggle) {
                mobileMenu.classList.remove('active');
                navContainer.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
        
        // Adicionar estilo para impedir rolagem quando o menu está aberto
        const style = document.createElement('style');
        style.textContent = `
            body.no-scroll {
                overflow: hidden;
            }
        `;
        document.head.appendChild(style);
    });