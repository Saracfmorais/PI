// Simulação de dados de chácaras
const chácaras = [
    { nome: "Chácara da Paz", disponibilidade: "Disponível", preço: "R$500/dia", contato: "+55123456789" },
    { nome: "Recanto das Águias", disponibilidade: "Indisponível", preço: "R$600/dia", contato: "+5521987654321" },
    { nome: "Haras do Sol", disponibilidade: "Disponível", preço: "R$700/dia", contato: "+5531987654321" }
];

// Função para exibir as chácaras na página
function exibirChacaras() {
    const container = document.getElementById('chacaras');
    container.innerHTML = '';

    chácaras.forEach(chácara => {
        const div = document.createElement('div');
        div.classList.add('chacara');
        div.innerHTML = `
            <h3>${chácara.nome}</h3>
            <p><strong>Disponibilidade:</strong> ${chácara.disponibilidade}</p>
            <p><strong>Preço:</strong> ${chácara.preço}</p>
            <p><strong>Contato:</strong> <a href="javascript:entrarEmContato('${chácara.contato}')" class="contato-button">Entrar em Contato</a></p>
        `;
        container.appendChild(div);
    });
}

// Função para abrir o chat de conversa com o dono da chácara
function entrarEmContato(contato) {
    // Aqui você pode substituir 'whatsapp://' pelo esquema de URL específico do aplicativo de chat que deseja usar
    // Por exemplo, para WhatsApp, use 'whatsapp://send?phone=' seguido pelo número de telefone do dono da chácara
    // Certifique-se de que o número esteja no formato internacional, sem o sinal de '+' no início
    window.location.href = 'whatsapp://send?phone=' + contato;
}

// Chamada inicial para exibir as chácaras ao carregar a página
exibirChacaras();
