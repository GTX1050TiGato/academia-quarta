function line() {
    const conteudoDiv = document.getElementById('conteudo'); // Select the target div
    const lin = document.createElement('img');
    lin.src = 'linha.png';
    lin.classList.add('linha', 'm-5');
    lin.style.width = '87%'; // Include the unit for the width
    lin.style.opacity = '0';
    lin.style.transition = 'opacity 1s'; // Set the transition using the style property

    conteudoDiv.appendChild(lin);

    setTimeout(() => {
        lin.style.opacity = 1;
    }, 10); // Small delay to ensure the browser registers the opacity change
}


// Função para adicionar QR Code
function baixar() {
    const conteudoDiv = document.getElementById('conteudo');
    const qrCodeImage = document.createElement('img');
    
    qrCodeImage.src = 'qr-code-plus.png'; // Caminho para a sua imagem QR code
    qrCodeImage.alt = 'QR Code';
    qrCodeImage.classList.add('w-1/3', 'bg-white', 'rounded-md', 'clickme');

    // Adicionar a transição ao estilo
    qrCodeImage.style.transition = 'all 1s';

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
    const h2 = document.createElement('h2');
    const lin = document.createElement('img');
    h1.classList.add('text-3xl', 'text-white', 'text-center');
    h1.textContent = 'Número de Pessoas na Academia'; // Definir o texto do <h1>
    

    lin.src = 'linha.png';
    lin.classList.add('linha','m-5');
    lin.style.width = '87%';



    
        // Adicionar a transição ao estilo
        h1.style.transition = 'opacity 1s';
        lin.style.transition = 'opacity 1s';
        h2.style.transition = 'opacity 1s';
        h2.style.fontSize = '5em';
        

        // Inicialmente, definir a opacidade como 0 para o efeito fade-in
        h1.style.opacity = 0;
        lin.style.opacity = 0;
        h2.style.opacity = 0;
    
        h2.className = h1.className;


        h2.classList.add ('my-12');
        h2.textContent = '000';
    // Limpar qualquer conteúdo existente na div
    while (conteudoDiv.firstChild) {
        conteudoDiv.removeChild(conteudoDiv.firstChild);
    }

    // Adicionar o <h1> à div
    conteudoDiv.appendChild(h1);
    conteudoDiv.appendChild(lin);
    conteudoDiv.appendChild(h2);
    setTimeout(() => {
        h1.style.opacity = 1;
        lin.style.opacity = 1;
        h2.style.opacity = 1;
    }, 10); // Pequeno atraso para garantir que o navegador registre a mudança de opacidade

}



function contato() {
    const conteudoDiv = document.getElementById('conteudo');
    const h1 = document.createElement('h1');
    const h1map = document.createElement('h1');

    const h1insta = document.createElement('h1')
    const mapElement = document.createElement('img'); // Changed variable name to mapElement
    h1.classList.add('text-2xl', 'text-white', 'text-nowrap', 'zap');
    h1insta.classList.add('text-2xl', 'text-white', 'text-nowrap', 'insta');
    h1insta.textContent = 'genesisacademia2018';
    h1.textContent = '(91) 3351-3245'; // Definir o texto do <h1>
    h1map.classList.add('text-3xl', 'text-white','scale-75', 'clickme');
    h1map.textContent = 'Endereço no google maps:'; // Definir o texto do <h1>

    mapElement.src = 'Mapimg.png'; // Changed from map.scr to map.src
    mapElement.classList.add('rounded-md', 'clickme', 'my-5', 'mx-auto');
    mapElement.style.width = '90%'

    // Adicionar a transição ao estilo
    h1.style.transition = 'opacity 1s';
    h1insta.style.transition = 'opacity 1s';


    h1insta.style.opacity = 0;
    h1map.style.scale = 0;
    // Inicialmente, definir a opacidade como 0 para o efeito fade-in
    h1.style.opacity = 0;
    mapElement.style.scale = 0;

    
    mapElement.onclick = function() {
        window.open('https://www.google.com/maps/place/Gênesis+Academia/@-1.4145842,-48.4691754,17z/data=!3m1!4b1!4m6!3m5!1s0x92a48b657b3d2711:0xc1cdde4382ab63dd!8m2!3d-1.4145842!4d-48.4666005!16s%2Fg%2F11qmmd3zxs?entry=ttu', '_blank');
    };
    
    // Limpar qualquer conteúdo existente na div
    while (conteudoDiv.firstChild) {
        conteudoDiv.removeChild(conteudoDiv.firstChild);
    }

    // Adicionar o <h1> e o mapa à div
    conteudoDiv.appendChild(h1);
    conteudoDiv.appendChild(h1insta);
    line()
    conteudoDiv.appendChild(h1map);
    conteudoDiv.appendChild(mapElement);
    
    
    setTimeout(() => {
        h1.style.opacity = 1;
        h1insta.style.opacity = 1;
    }, 10); // Pequeno atraso para garantir que o navegador registre a mudança de opacidade



    setTimeout(() => {
        h1map.style.scale = 1;
        mapElement.style.scale = 1;
    }, 1); 



    
}

