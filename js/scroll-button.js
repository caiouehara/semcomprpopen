document.addEventListener('DOMContentLoaded', function() {
  const scrollButton = document.getElementById('scroll-button');
  scrollButton.addEventListener('click', function() {
      const targetSection = document.getElementById('about-us-section');
      targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  const link = document.getElementById('scroll-button');

  link.addEventListener('click', (event) => {
      event.preventDefault(); // Previne o comportamento padrão do link
      link.classList.toggle('clicked');
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        link.classList.remove('clicked');
    }
  });

});
