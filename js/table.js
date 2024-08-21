document.addEventListener('DOMContentLoaded', () => {
    const eventsContainer = document.getElementById('events');
    const eventDetailsContainer = document.getElementById('event-details');

    // Eventos definidos para cada dia da semana com mais opções e descrição
    const events = {
        monday: [
            { name: 'Cerimônia de abertura 14:00h / 15:00h', details: 'Será realizado a abertura do evento das 14:00hrs às 15hrs.' },
            { name: 'Passa ou repassa 15:00h / 16:00h', details: 'Participe do Passa ou Repassa de Computação Monte seu time e venha enfrentar perguntas no estilo quiz sobre as mais diversas áreas da computação. É uma excelente chance para testar seus conhecimentos, divertir-se e interagir. Com direito a brindes para os melhores colocados. Esperamos você para esse desafio empolgante!' },
            { name: ' CTF & Coffe Break 16:00h / 16:30h', details: 'Participe do nosso CTF (Capture the Flag) e desafie suas habilidades em segurança da informação e resolução de problemas! Encare desafios de criptografia, exploração de vulnerabilidades, forense digital e muito mais. Ideal para iniciantes e experts!' },
            { name: 'Palestra 16:30h / 18:00h', details: '...' },
            { name: 'Palestra Oracle 19:00h / 20:15h', details: '...' },
            { name: 'Palestra Universo Discreto 20:15h / 21:30h', details: '...' }
        ],
        tuesday: [
            { name: 'Workshop Oracle 14:00h / 16:00', details: '...' },
            { name: ' CTF & Coffe Break 16:00h / 16:30', details: 'Participe do nosso CTF (Capture the Flag) e desafie suas habilidades em segurança da informação e resolução de problemas! Encare desafios de criptografia, exploração de vulnerabilidades, forense digital e muito mais. Ideal para iniciantes e experts!' },
            { name: 'Workshop Oracle 16:30h / 18:00h', details: '...' },
            { name: 'Palestra 19:00h / 20:00h', details: '...' },
            { name: 'Palestra Ernersto Haberkorn 20:00h / 21:30h', details: '...' }
        ],
        wednesday: [
            { name: 'Palestra 14:00h / 15:30h', details: '...' },
            { name: 'Teste de Turing 15:30h / 16:00h', details: '...' },
            { name: ' CTF & Coffe Break 16:00h / 16:30h', details: 'Participe do nosso CTF (Capture the Flag) e desafie suas habilidades em segurança da informação e resolução de problemas! Encare desafios de criptografia, exploração de vulnerabilidades, forense digital e muito mais. Ideal para iniciantes e experts!' },
            { name: 'Palestra Smar APD 16:30h / 18:00h', details: '...' },
            { name: 'Palestra Opus 19:00h / 20:15h', details: '...' },
            { name: 'Bate-papo Fabio Akita 20:15h / 21:30h', details: '...' }
        ],
        thursday: [
            { name: 'Feira de Projetos 14:00h / 16:00h', details: 'Na Feira, você pode compartilhar e ver vários projetos dos diferentes universos da TI, com direito a brindes para os projetos mais amados!' },
            { name: ' CTF & Coffe Break 16:00h / 16:30h', details: 'Participe do nosso CTF (Capture the Flag) e desafie suas habilidades em segurança da informação e resolução de problemas! Encare desafios de criptografia, exploração de vulnerabilidades, forense digital e muito mais. Ideal para iniciantes e experts!' },
            { name: 'Feira de Projetos 16:30h / 18:00h', details: 'Na Feira, você pode compartilhar e ver vários projetos dos diferentes universos da TI, com direito a brindes para os projetos mais amados!.' },
            { name: 'Palestra Youtube 19:00h / 20:15h', details: '...' },
            { name: 'Palestra 20:15h / 21:30h', details: '...' }
        ],
        friday: [
            { name: 'Palestra 14:00h / 15:30h', details: '...' },
            { name: 'Dinâmica 15:30h / 16:00h', details: '...' },
            { name: ' CTF & Coffe Break 16:00h / 16:30h', details: 'Participe do nosso CTF (Capture the Flag) e desafie suas habilidades em segurança da informação e resolução de problemas! Encare desafios de criptografia, exploração de vulnerabilidades, forense digital e muito mais. Ideal para iniciantes e experts!' },
            { name: 'Obfuscação 16:30h / 17:30h', details: '...' },
            { name: 'Cerimônia de encerramento 17:30h / 18:00h', details: '...' },
            { name: 'Palestra OneBitCode 19:00h / 20:15h', details: '...' },
            { name: 'Palestra 20:15h / 21:30h', details: '...' }

        ]
    };

    // Função para atualizar a lista de eventos
    function updateEvents(day) {
        const dayEvents = events[day];
        if (dayEvents && dayEvents.length > 0) {
            eventsContainer.innerHTML = '';
            dayEvents.forEach(event => {
                const eventItem = document.createElement('div');
                eventItem.classList.add('event-item');
                eventItem.textContent = event.name;
                eventItem.dataset.details = event.details;
                eventItem.addEventListener('click', (e) => {
                    showEventDetails(e.target.dataset.details);
                });
                eventsContainer.appendChild(eventItem);
            });
        } else {
            eventsContainer.innerHTML = '<p>Não há eventos para este dia.</p>';
        }
        eventDetailsContainer.style.display = 'none'; // Ocultar detalhes do evento
    }

    // Função para exibir detalhes do evento
    function showEventDetails(details) {
        eventDetailsContainer.innerHTML = `<p>${details}</p>`;
        eventDetailsContainer.style.display = 'block';
    }

    // Adiciona o evento de clique para cada linha da tabela
    document.querySelectorAll('.sidebar tbody tr').forEach(row => {
        row.addEventListener('click', () => {
            const day = row.getAttribute('data-day');
            updateEvents(day);
        });
    });
});
