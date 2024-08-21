document.addEventListener('DOMContentLoaded', () => {
    const starField = document.getElementById('star-field');
    const numStars = 100; // Ajuste o número de estrelas aqui

    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');

        // Define posições aleatórias
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        // Define atraso aleatório para a animação
        const animationDelay = Math.random() * 2;

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.animationDelay = `${animationDelay}s`;

        return star;
    }

    for (let i = 0; i < numStars; i++) {
        const star = createStar();
        starField.appendChild(star);
    }
});
