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

    document.addEventListener('DOMContentLoaded', () => {
        // Seleção de elementos
        const listItems = document.querySelectorAll('.bodyVarilux ul li');
        const lenteImg1 = document.getElementById('lenteImg1');
        const lenteImg2 = document.getElementById('lenteImg2');
        const lenteTitle = document.getElementById('lenteTitle');
        const lenteDesc = document.getElementById('lenteDesc');
        const lenteTecContainer = document.getElementById('lenteTec');
        const compareButton = document.getElementById('btnComparar');

        let firstLensSelected = false;  // Controla se a primeira lente já foi selecionada
        let compareModeActive = false;  // Controla se o modo de comparação está ativo

        // Função para exibir as informações da lente
        function showLens(imgSrc, title, desc, tecImages) {
            if (!firstLensSelected || !compareModeActive) {
                // Exibir a primeira lente
                lenteImg1.src = imgSrc;
                lenteImg1.style.display = 'block';
                lenteImg2.style.display = 'none';
                firstLensSelected = true;

                // Atualizar informações da primeira lente
                lenteTitle.textContent = title;
                lenteDesc.textContent = desc;

                // Atualizar tecnologias
                lenteTecContainer.innerHTML = ''; // Limpar tecnologias anteriores
                if (tecImages) {
                    const tecList = tecImages.split(',');
                    tecList.forEach(tecSrc => {
                        const imgElement = document.createElement('img');
                        imgElement.src = tecSrc.trim();
                        imgElement.alt = `Tecnologia da Lente: ${title}`;
                        imgElement.classList.add('imgTecnologia'); // Classe CSS para estilização
                        lenteTecContainer.appendChild(imgElement);
                    });
                }
            } else {
                // Exibir a segunda lente ao lado da primeira
                lenteImg2.src = imgSrc;
                lenteImg2.style.display = 'block';
            }
        }

        // Evento para alternar o modo de comparação
        compareButton.addEventListener('click', () => {
            const infoLente = document.querySelector('.infoLente');
            const lensDisplay = document.querySelector('.demoLente');
            infoLente.style.display = 'none';
            lensDisplay.classList.toggle('compare-mode');

            compareModeActive = !compareModeActive;

            // Resetar seleção de lentes ao desativar comparação
            if (!compareModeActive) {
                lenteImg2.style.display = 'none';
                infoLente.style.display = 'flex';
                firstLensSelected = false;
            }
        });

        // Evento para cada item da lista
        listItems.forEach(item => {
            item.addEventListener('click', () => {
                // Recuperar atributos do item clicado
                const imgSrc = item.getAttribute('data-img');
                const title = item.getAttribute('data-title');
                const desc = item.getAttribute('data-desc');
                const tecImages = item.getAttribute('data-tec'); // Imagens das tecnologias

                // Exibir lente com base nos dados recuperados
                showLens(imgSrc, title, desc, tecImages);
            });
        });
    });

 // Função para exibir a imagem selecionada no comparador de armações
 function displayImage(input, imageElementId) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById(imageElementId).src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]); // Ler o conteúdo do arquivo selecionado
    }
}

// Adicionar evento de mudança para exibir a imagem no primeiro input
document.getElementById('imageUpload1').addEventListener('change', function () {
    displayImage(this, 'image1');
});

// Adicionar evento de mudança para exibir a imagem no segundo input
document.getElementById('imageUpload2').addEventListener('change', function () {
    displayImage(this, 'image2');
});


