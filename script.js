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
    const h1 = document.createElement('h1');
    const button = document.createElement('button');
    const h2 = document.createElement('h1');
    const buttonpre = document.getElementById('baixar')


    button.textContent = 'Download';

    button.className = buttonpre.className;

    button.classList.add('clickme', 'm-auto', 'content-center', 'mb-5');
    
    button.style.width = '90%'

    h1.textContent= 'Download QR code';

    h1.classList.add('text-2xl', 'content-center', 'my-5');

    h1.style.textAlign = 'center';
    
    h2.className = h1.className;

    h2.style.textAlign = h1.style.textAlign;

    h2.textContent = 'Baixe o app no botão abaixo'

    qrCodeImage.src = 'qr-code-plus.png'; // Caminho para a sua imagem QR code
    qrCodeImage.alt = 'QR Code';
    qrCodeImage.classList.add('w-1/3', 'bg-white', 'rounded-md', 'clickme', 'content-center', 'self-center', 'mx-auto');


    // Adicionar a transição ao estilo
    qrCodeImage.style.transition = 'all 1s';
    h1.style.transition = 'all 1s';
    h2.style.transition = 'all 1s';
    button.style.transition = 'all 1s';

    // Inicialmente, definir a opacidade como 0 para o efeito fade-in
    qrCodeImage.style.opacity = 0;
    h1.style.opacity = 0;
    h2.style.opacity = 0;
    button.style.opacity = 0;
    // Remover QR Code existente antes de adicionar um novo
    while (conteudoDiv.firstChild) {
        conteudoDiv.removeChild(conteudoDiv.firstChild);
    }

    button.onclick = function() {
        window.open('https://drive.google.com/file/d/1Q9oxZE202GQ64nQjqrwzfwwwUQh9kK8-/view?usp=sharing', '_blank');
    };

    conteudoDiv.appendChild(qrCodeImage);
    
    conteudoDiv.appendChild(h1);
    line()
    conteudoDiv.appendChild(h2);

    conteudoDiv.appendChild(button);
    // Usar setTimeout para aplicar o efeito fade-in após adicionar o elemento ao DOM
    setTimeout(() => {
        qrCodeImage.style.opacity = 1;
        h1.style.opacity = 1;
        h2.style.opacity = 1;
        button.style.opacity = 1;
        
    }, 10); // Pequeno atraso para garantir que o navegador registre a mudança de opacidade
}


// Função para mostrar o número de pessoas na academia
async function numero() {
        // TESTE CONSULTA BANCO DE DADOS (MONGODB) -- SAMUEL

        const result = await fetch("https://n8n.projetosdev.top/webhook/academia"); //ATIVA A API -- SAMUEL
        const data = await result.json(); // ARMAZENA O RESULTADO DA API NA VARIÁVEL -- SAMUEL
        var giro = data[0].sum_giro; // ARMAZENA O VALOR DA SOMA DOS GIROS NA VARIÁVEL -- SAMUEL

        // -------------------------------------------------------------------


    const conteudoDiv = document.getElementById('conteudo');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const lin = document.createElement('img');
    const cap = document.createElement('h1');
    const media = document.createElement('h1');
    h1.classList.add('text-3xl', 'text-white', 'text-center');
    h1.textContent = 'Número de Pessoas pressente na Academia:' // Definir o texto do <h1>
    cap.textContent = 'Capacidade maxíma: 200';
    media.textContent = 'Lotação média: 50';
    

    lin.src = 'linha.png';
    lin.classList.add('linha','m-5');
    lin.style.width = '87%';



    
        // Adicionar a transição ao estilo
        h1.style.transition = 'opacity 1s';
        lin.style.transition = 'opacity 1s';
        h2.style.transition = 'opacity 1s';
        cap.style.transition = 'opacity 1s';
        media.style.transition = 'opacity 1s';
        h2.style.fontSize = '5em';
        

        // Inicialmente, definir a opacidade como 0 para o efeito fade-in
        h1.style.opacity = 0;
        lin.style.opacity = 0;
        h2.style.opacity = 0;
        cap.style.opacity = 0;
        media.style.opacity = 0;
        cap.style.marginTop = '2%';
        media.style.marginTop = '10%';
        h2.className = h1.className;
        cap.className = h1.className;
        media.className = h1.className;
        

        h2.classList.add ('my-12');
        h2.textContent = giro;
    // Limpar qualquer conteúdo existente na div
    while (conteudoDiv.firstChild) {
        conteudoDiv.removeChild(conteudoDiv.firstChild);
    }
    

    // Adicionar o <h1> à div
    conteudoDiv.appendChild(cap);

    conteudoDiv.appendChild(media);
    
    
    conteudoDiv.appendChild(lin);
    
    
    conteudoDiv.appendChild(h1);
    conteudoDiv.appendChild(h2);
    setTimeout(() => {
        h1.style.opacity = 1;
        lin.style.opacity = 1;
        h2.style.opacity = 1;
        media.style.opacity = 1;
        cap.style.opacity = 1;
    }, 10); // Pequeno atraso para garantir que o navegador registre a mudança de opacidade

}

window.onload = numero();



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


