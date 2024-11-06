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



    //mostrar as lentes
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

    document.addEventListener('DOMContentLoaded', () => {
        // Seleção de elementos
        const listItems = document.querySelectorAll('.bodyKodak ul li');
        const lenteImg1 = document.getElementById('lenteImgKodak1');
        const lenteImg2 = document.getElementById('lenteImgKodak2');
        const lenteTitle = document.getElementById('lenteTitleKodak');
        const lenteDesc = document.getElementById('lenteDescKodak');
        const lenteTecContainer = document.getElementById('lenteTec');
        const compareButton = document.getElementById('btnCompararKodak');

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
            const infoLente = document.querySelector('.infoLenteKodak');
            const lensDisplay = document.querySelector('.demoLenteKodak');
            infoLente.style.display = 'none';
            lensDisplay.classList.toggle('compare-modeKodak');

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


function submitForm(e) {
    // Obtém os valores dos campos do formulário
const data = {
    nome: document.getElementById('nome').value,
    telefone: document.getElementById('telefone').value,
    why: document.getElementById('why').value,
    type: document.getElementById('type').value,
    hash: 'hash_93867748421653f930d1fec5f38b0f6b'
};

// Converte os dados para o formato application/x-www-form-urlencoded
const postData = new URLSearchParams(data).toString();

// URL da API
const url = 'https://meubannersites.com.br/api/bryan/v1/serialize';

// Faz a requisição POST
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: postData
})
.then(response => response.json()) // Converte a resposta para JSON
.then(json => {
    
    console.log(json.data);

    if (data.type === 'getfull') {
        // Exibir todos os clientes no caso de 'getfull'
        displayClientes(json.data);

    } else {
        // Exibe a resposta da ação no console (para debug)
        console.log(json);
    }
    // Você pode manipular o JSON aqui, por exemplo, exibir em algum lugar da página
})
.catch(error => {
    console.error('Erro:', error); // Exibe erros no console
});

document.getElementById('myForm').reset();

}

function displayClientes(clientes){
    const bodyTabela = document.getElementById("clientesbodyTabela");
    const tabela = document.getElementById("tabela");
    tabela.style.display = 'table';
    bodyTabela.innerHTML = '';

    clientes.forEach(cliente => {
        const coluna = document.createElement('tr');
        coluna.innerHTML = `
            <td>${cliente.nome}</td>
            <td>${cliente.telefone}</td>
            <td>${cliente.why}</td>
            <td><a class='btnExcluir' href='Deletar.html?ref=${cliente.idClient}'>Excluir</a href=></td>
        `;
        clientesbodyTabela.appendChild(coluna);
    });

}

function editarBtn(){
    const tipoSelect = document.getElementById('type').value;
    const id = document.getElementById('clientesEdit');
    const btnEnviarForm = document.getElementById('btnEnviarForm');
    const btnSalvarEdit = document.getElementById("btnSalvarEdit");

    if(tipoSelect == 'edit'){
        id.style.display = 'flex';
        btnEnviarForm.style.display = 'none';
        btnSalvarEdit.style.display = 'flex';
        editarInfo();
    }else {
        id.style.display = 'none';
    }
}

let clientesData = {}; // Armazena os dados dos clientes

function editarInfo() {

    const data = {
        type: 'getfull',
        hash: 'hash_93867748421653f930d1fec5f38b0f6b'
    };

    // Converte os dados para o formato application/x-www-form-urlencoded
    const postData = new URLSearchParams(data).toString();

    // URL da API
    const url = 'https://meubannersites.com.br/api/bryan/v1/serialize';

    // Faz a REQUISIÇÃO POST
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: postData
    })
    .then(response => response.json()) // Converte a resposta para JSON
    .then(json => {
        // Limpa a lista de opções
        const bodyTabela = document.getElementById("clientesEdit");
        bodyTabela.innerHTML = '';

        const emptyOption = document.createElement('option');
        emptyOption.value = ""; // O valor pode ser uma string vazia
        emptyOption.textContent = "Selecione um cliente"; // Texto que será exibido
        bodyTabela.appendChild(emptyOption); // Adiciona o option vazio no select

        // Armazena os dados dos clientes
        json.data.forEach(c => {
            // Cria uma nova opção para o select
            const option = document.createElement('option');
            option.value = c.idClient;
            option.textContent = c.nome;
        
            // Adiciona a opção no select
            bodyTabela.appendChild(option);
        
            // Armazena o cliente no objeto clientesData
            clientesData[c.idClient] = c;
        });
        
        // Adiciona evento para quando o cliente for selecionado
        bodyTabela.addEventListener('change', function() {
            const selectedId = this.value; // Obtém o ID do cliente selecionado
            if (clientesData[selectedId]) {
                // Preenche os campos do formulário com os dados do cliente
                document.getElementById("nome").value = clientesData[selectedId].nome;
                document.getElementById("telefone").value = clientesData[selectedId].telefone;
                document.getElementById("why").value = clientesData[selectedId].why; // Supondo que "why" seja o campo de orçamento
            } else {
                // Limpa os campos do formulário se a opção vazia for selecionada
                document.getElementById("nome").value = "";
                document.getElementById("telefone").value = "";
                document.getElementById("why").value = "";
            }
        });
    })
    .catch(error => {
        console.error('Erro:', error); // Exibe erros no console
    });
}

function editarDados() {
        const selectedId = document.getElementById('clientesEdit').value;

        if (!selectedId) {
            alert("Selecione um cliente para editar.");
            return;
        }

        // Obtém os valores dos campos do formulário
        const data = {
            hash: 'hash_93867748421653f930d1fec5f38b0f6b',
            type: document.getElementById('type').value,
            ref: selectedId, // Inclui o ID do cliente para edição
            nome: document.getElementById('nome').value,
            telefone: document.getElementById('telefone').value,
            why: document.getElementById('why').value,
        };
        console.log(data);

        // Converte os dados para o formato application/x-www-form-urlencoded
        const postData = new URLSearchParams(data).toString();
        
        // URL da API
        const url = 'https://meubannersites.com.br/api/bryan/v1/serialize';
        
        // Faz a requisição POST
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: postData
        })
        .then(response => response.json()) // Converte a resposta para JSON
        .then(json => {

            const select = document.getElementById("clientesEdit");
            if (json.status === '200') {
                alert("Dados editados com sucesso!");                   
                document.getElementById('myForm').reset();
                window.location.href = 'index.html';
            }
        })
        
    }

document.getElementById("telefone").addEventListener("input", function (e) {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? ' - ' + x[3] : '');
    });
    