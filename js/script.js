// Função para gerar um número aleatório dentro de um intervalo
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Função para criar uma estrela
function createStar() {
  const star = document.createElement('div');
  star.className = 'star';

  // Calcula a posição aleatória dentro da largura e altura da página
  const xPos = getRandomNumber(0, document.documentElement.scrollWidth);
  const yPos = getRandomNumber(0, document.documentElement.scrollHeight);

  star.style.left = `${xPos}px`;
  star.style.top = `${yPos}px`;

  document.getElementById('starfield').appendChild(star);

  // Define um tempo aleatório para começar a piscar
  const delay = getRandomNumber(0, 2000);

  // Função para fazer a estrela piscar
  function blink() {
      star.style.opacity = star.style.opacity === '0' ? '1' : '0';
      const interval = getRandomNumber(50, 1000);
      setTimeout(blink, interval);
  }

  setTimeout(blink, delay);
}

// Gera um número arbitrário de estrelas na tela
const numStars = 400;
for (let i = 0; i < numStars; i++) {
  createStar();
}


























