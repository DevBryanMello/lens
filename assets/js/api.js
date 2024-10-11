// Função para o envio de formulário
document.getElementById("orcamentosForm").addEventListener("submit", function(event) {
    const url = "https://meubannersites.com.br/api/bryan/v1/serialize"; 

  async function chamarApi(){
        const resp = await fetch(url);   
    }
    chamarApi();

});