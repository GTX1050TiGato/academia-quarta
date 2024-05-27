// Função para adicionar QR Code
function baixar() {
    const conteudoDiv = document.getElementById('conteudo');
    const qrCodeImage = document.createElement('img');
    qrCodeImage.src = 'qr-code-plus.png'; // Caminho para a sua imagem QR code
    qrCodeImage.alt = 'QR Code';
    qrCodeImage.classList.add('h-52', 'bg-white', 'rounded-md');

    // Adicionar a transição ao estilo
    qrCodeImage.style.transition = 'opacity 1s';

    // Inicialmente, definir a opacidade como 0 para o efeito fade-in
    qrCodeImage.style.opacity = 0;

    // Remover QR Code existente antes de adicionar um novo
    while (conteudoDiv.firstChild) {
        conteudoDiv.removeChild(conteudoDiv.firstChild);
    }

    conteudoDiv.appendChild(qrCodeImage);

    // Usar setTimeout para aplicar o efeito fade-in após adicionar o elemento ao DOM
    setTimeout(() => {
        qrCodeImage.style.opacity = 1;
    }, 10); // Pequeno atraso para garantir que o navegador registre a mudança de opacidade
}

// Função para mostrar o número de pessoas na academia
function numero() {
    const conteudoDiv = document.getElementById('conteudo');
    const h1 = document.createElement('h1');
    h1.classList.add('text-3xl', 'text-white', 'text-center');
    h1.textContent = 'Número de Pessoas na Academia'; // Definir o texto do <h1>


        // Adicionar a transição ao estilo
        h1.style.transition = 'opacity 1s';

        // Inicialmente, definir a opacidade como 0 para o efeito fade-in
        h1.style.opacity = 0;
    

    // Limpar qualquer conteúdo existente na div
    while (conteudoDiv.firstChild) {
        conteudoDiv.removeChild(conteudoDiv.firstChild);
    }

    // Adicionar o <h1> à div
    conteudoDiv.appendChild(h1);

    setTimeout(() => {
        h1.style.opacity = 1;
    }, 10); // Pequeno atraso para garantir que o navegador registre a mudança de opacidade

}



function contato() {
    const conteudoDiv = document.getElementById('conteudo');
    const h1 = document.createElement('h1');
    h1.classList.add('text-5xl', 'text-white', 'text-nowrap', 'zap');
    h1.textContent = '(91) 3351-3245'; // Definir o texto do <h1>

            // Adicionar a transição ao estilo
            h1.style.transition = 'opacity 1s';

            // Inicialmente, definir a opacidade como 0 para o efeito fade-in
            h1.style.opacity = 0;
    // Limpar qualquer conteúdo existente na div
    while (conteudoDiv.firstChild) {
        conteudoDiv.removeChild(conteudoDiv.firstChild);
    }

    // Adicionar o <h1> à div
    conteudoDiv.appendChild(h1);

    setTimeout(() => {
        h1.style.opacity = 1;
    }, 10); // Pequeno atraso para garantir que o navegador registre a mudança de opacidade

}