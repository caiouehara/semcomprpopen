    document.addEventListener('DOMContentLoaded', function() {
        // Seleciona todos os links de navegação que devem fechar o menu
        var navLinks = document.querySelectorAll('#navbarNav .nav-link');
        var navbarToggler = document.getElementById('navbar-toggler');
        
        // Função para verificar o tamanho da tela
        function isSmallScreen() {
            return window.matchMedia('(max-width: 992px)').matches; // Verifica se a tela é menor que 992px
        }

        // Adiciona um ouvinte de evento de clique a cada link
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (isSmallScreen()) {
                    // Verifica se o menu está visível e, se estiver,  fecha
                    if (document.querySelector('#navbarNav').classList.contains('show')) {
                        // Simula um clique no botão de alternância para fechar o menu
                        navbarToggler.click();
                    }
                }
            });
        });

        // Adiciona um ouvinte de evento para detectar mudanças no tamanho da tela
        window.addEventListener('resize', function() {
            if (!isSmallScreen()) {
                // Em telas grandes, remove a classe 'show' para garantir que o menu esteja fechado
                document.querySelector('#navbarNav').classList.remove('show');
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        const navbarNav = document.getElementById('navbarNav');
        const navbarToggler = document.getElementById('navbarToggler');

        // Função para fechar o menu
        function closeMenu() {
            if (navbarNav.classList.contains('show')) {
                navbarToggler.click(); // Simula um clique no botão de toggler
            }
        }

        // Adiciona o evento de clique em cada link do menu
        const navLinks = document.querySelectorAll('.navbar-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    });


    // interação de botão do menu de navegação
document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.getElementById('navbarToggler');
    const menu = document.getElementById('navbarNav'); // Altere para 'navbarNav' para corresponder ao ID no HTML
  
    if (toggler) {
        toggler.addEventListener('click', function () {
            menu.classList.toggle('collapse');
        });
    }
  });
  if (typeof foo !== "undefined") {
    // Agora nós sabemos que foo está definido, então podemos prosseguir.
  }
  
  
  