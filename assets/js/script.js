function showMenu() {
    let menuMobile = document.getElementById('menu-mobile');
    let displayValue = menuMobile.style.display;

    if (displayValue == '' || displayValue == 'none') {
        menuMobile.style.display = 'flex';
    }else {
        menuMobile.style.display = 'none';
    }
}

//comparador da tecnologia Nanoptix
const slider = document.getElementById('slider');
    const overlay = document.getElementById('overlay');
    const container = document.querySelector('.comparison-container');

    let isSliding = false;

    slider.addEventListener('mousedown', () => {
        isSliding = true;
    });

    document.addEventListener('mouseup', () => {
        isSliding = false;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isSliding) return;

        const containerRect = container.getBoundingClientRect();
        let x = e.clientX - containerRect.left;

        // Limita o movimento ao contêiner
        if (x < 0) x = 0;
        if (x > containerRect.width) x = containerRect.width;

        // Atualiza o `clip-path` para mostrar a imagem de sobreposição
        overlay.style.clipPath = `inset(0 ${containerRect.width - x}px 0 0)`;
        slider.style.left = `${x}px`;
    });

    // Suporte para dispositivos móveis (touch)
    slider.addEventListener('touchstart', () => {
        isSliding = true;
    });

    document.addEventListener('touchend', () => {
        isSliding = false;
    });

    document.addEventListener('touchmove', (e) => {
        if (!isSliding) return;

        const containerRect = container.getBoundingClientRect();
        let x = e.touches[0].clientX - containerRect.left;

        // Limita o movimento ao contêiner
        if (x < 0) x = 0;
        if (x > containerRect.width) x = containerRect.width;

        // Atualiza o `clip-path` para mostrar a imagem de sobreposição
        overlay.style.clipPath = `inset(0 ${containerRect.width - x}px 0 0)`;
        slider.style.left = `${x}px`;
    });

    const listItems = document.querySelectorAll('.bodyVarilux ul li');
    const lenteImg = document.getElementById('lenteImg');
    const lenteTitle = document.getElementById('lenteTitle');
    const lenteDesc = document.getElementById('lenteDesc');
    const lenteTec = document.getElementById('lenteTec');

// Certifique-se de que o script é executado após o DOM estar carregado
document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.bodyVarilux ul li');
    const lenteImg = document.getElementById('lenteImg');
    const lenteTitle = document.getElementById('lenteTitle');
    const lenteDesc = document.getElementById('lenteDesc');
    const lenteTecContainer = document.getElementById('lenteTec'); // Contêiner das tecnologias

    // Adiciona um evento de clique para cada item da lista
    listItems.forEach(item => {
        item.addEventListener('click', () => {
            // Obtém os valores dos atributos data-* do item clicado
            const imgSrc = item.getAttribute('data-img');
            const title = item.getAttribute('data-title');
            const desc = item.getAttribute('data-desc');
            const tecImages = item.getAttribute('data-tec'); // Imagens das tecnologias

            // Atualiza a imagem principal da lente
            lenteImg.src = imgSrc;

            // Atualiza o título e descrição
            lenteTitle.textContent = title;
            lenteDesc.textContent = desc;

            // Limpa o contêiner de tecnologias (caso haja imagens anteriores)
            lenteTecContainer.innerHTML = '';

            // Verifica se há imagens de tecnologias e adiciona ao contêiner
            if (tecImages) {
                // Separa as imagens por vírgula e adiciona cada uma delas como um novo elemento <img>
                const tecList = tecImages.split(',');
                tecList.forEach(tecSrc => {
                    const imgElement = document.createElement('img');
                    imgElement.src = tecSrc.trim(); // Remove possíveis espaços extras
                    imgElement.alt = `Tecnologia da Lente: ${title}`;
                    imgElement.classList.add('imgTecnologia'); // Adiciona uma classe para estilo, se necessário
                    lenteTecContainer.appendChild(imgElement);
                });
            }
        });
    });
});

// Função para carregar a imagem nos elementos <img>
function loadImage(event, imgElementId) {
    const imgElement = document.getElementById(imgElementId); // Seleciona o elemento de imagem pelo ID
    const file = event.target.files[0]; // Obtém o arquivo de imagem selecionado
    const reader = new FileReader(); // Cria uma nova instância de FileReader para ler o conteúdo do arquivo
    
    reader.onload = function(e) { // Executa uma função quando a leitura é concluída
        imgElement.src = e.target.result; // Define o conteúdo lido como a fonte (src) da imagem
    };
    
    if (file) { // Verifica se há um arquivo selecionado
        reader.readAsDataURL(file); // Lê o conteúdo do arquivo como uma URL codificada em base64
    }
}

// Listeners para os inputs
document.getElementById('imageUpload1').addEventListener('change', function(event) {
    loadImage(event, 'image1'); // Chama a função loadImage para a primeira imagem
});

document.getElementById('imageUpload2').addEventListener('change', function(event) {
    loadImage(event, 'image2'); // Chama a função loadImage para a segunda imagem
});