var cliente = JSON.parse('{"nome":"Luisa","cargo":"dirigente"}');
var obrigacao = JSON.parse('{"nome": "Nicolas","data": "12/12/2012"}');

document.getElementById("nome").innerHTML = `${cliente.nome}`;

document.getElementById("dt_px_obrigacao").innerHTML = `${obrigacao.data}`;
if(obrigacao.cargo = "dirigente"){
    const element = document.getElementById("nome");
    element.classList.add('dir');
    element.setAttribute('title', 'Dirigente');
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('uploadForm');
    if (form) {
        form.addEventListener('submit', salvar);
    }
});

function irpara(onde){
    if(onde == 1){
        window.location.href = "/src/pages/pageArquivos.html";
    }else if(onde = 2){

    }
}
function deletarJson(){
    document.getElementById('form-inserir').innerHTML =
    `Adicionado com sucesso!`;
}
function inserirJson(){
    document.getElementById('form-inserir').innerHTML =
    `
    <form id="uploadForm">
        <p class="tituloform">Add Membro Novo</p>
        <label for="nome">Digite o nome: </label>
        <br>
        <input type="text" id="nome-form" name="nome" required>
        <br>
        <label for="data-iniciacao">Data de Iniciação: </label>
        <br>
        <input type="date" id="datainiciacao-form" name="data-iniciacao" required>
        <br>
        <label for="nome-padrinho">Padrinho: </label>
        <br>
        <input type="text" id="nomepadrinho-form" name="nome-padrinho" required>
        <br>
        <label for="orunko">Orunkó: </label>
        <br>
        <input type="text" id="orunko-form" name="orunko">
        <br>
        <label for="dijina">Dijina: </label>
        <br>
        <input type="text" id="dijina-form" name="dijina">
        <br>
        <label for="data-nasc">Data de Nascimento: </label>
        <br>
        <input type="date" id="datanasc-form" name="data-nasc" required>
        <br>
        <label for="nomemae">Nome da mãe: </label>
        <br>
        <input type="text" id="nomemae-form" name="nomemae">
        <br>
        <label for="obrigacao">Obrigação paga:</label>
        <br>
        <select id="obrigacao-form" name="obrigacao" required>
            <option value="recent">Yawo recente</option>
            <option value="1pago">1 ano pago</option>
            <option value="3pago">3 anos pagos</option>
            <option value="5pago">5 anos pagos</option>
            <option value="7pago">7 anos pagos</option>
        </select>
        <br>
        <button type="submit" id="enviar" name="enviar">Enviar</button>
        
    </form>
    `;
    document.getElementById('uploadForm').addEventListener('submit', salvar);
}
function salvar (event){
    event.preventDefault();
    const form = document.getElementById("uploadForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(form);

  fetch("", {
    method: "POST",
    body: new URLSearchParams(formData) // Envia como application/x-www-form-urlencoded
  })
  .then(response => response.text())
  .then(data => {
    console.log("Resposta:", data);
    irpara(1);
  })
  .catch(error => {
    console.error("Erro:", error);
    alert("Erro ao enviar.");
  });
});
    /*
    var nome = document.getElementById('nome-form').value;
    var dataIniciacao = document.getElementById('datainiciacao-form').value;
    var padrinho = document.getElementById('nomepadrinho-form').value;
    var orunko = document.getElementById('orunko-form').value;
    var dijina = document.getElementById('dijina-form').value;
    var dataNasc = document.getElementById('datanasc-form').value;
    var nomeMae = document.getElementById('nomemae-form').value;
    var obrigacao = document.getElementById('obrigacao-form').value;*/
}

function inserirSomJson(){
    document.getElementById('form-inserir').innerHTML = `
        <form id="uploadForm" enctype="multipart/form-data">
            <p class="tituloform">Add Cantiga Nova</p>
            <label for="nome-cantiga">Digite o nome (opcional)</label>
            <br>
            <input type="text" id="nomeCantiga-form" name="nome-cantiga">
            <br>
            <label for="quando-cantiga">Quando é Cantada? </label>
            <br>
            <input type="text" id="quando-form" name="quando-cantiga" required>
            <br>
            <label for="cantiga-cantiga">Cantiga </label>
            <br>
            <textarea id="cantiga-form" name="cantiga-cantiga"></textarea>
            <br>
            <button type="submit" onclick="salvarCantiga()" id="enviarCantiga" name="enviar">Enviar</button>
        <br>
        </form>
    `
}

function inserirRezaJson(){
    document.getElementById('form-inserir').innerHTML = `
        <form id="uploadForm" enctype="multipart/form-data">
            <p class="tituloform">Add Reza Nova</p>
            <label for="nome-reza">Digite o nome (opcional)</label>
            <br>
            <input type="text" id="nomeReza-form" name="nome-reza">
            <br>
            <label for="quando-reza">Quando é Rezada? </label>
            <br>
            <input type="text" id="quandoReza-reza" name="quando-reza" required>
            <br>
            <label for="reza-reza">Reza </label>
            <br>
            <textarea id="reza-reza" name="reza-reza"></textarea>
            <br>
            <button type="submit" onclick="salvarReza()" id="enviarReza" name="enviar">Enviar</button>
        <br>
        </form>
    `
}

function inserirObrigacaoJson(){
     document.getElementById('form-inserir').innerHTML = `
        <form id="uploadForm" enctype="multipart/form-data">
            <p class="tituloform">Obrigação Futura</p>
            <label for="nome-obrigacao">Digite o nome do Obrigacionado</label>
            <br>
            <input type="text" id="nomeObrigacao-form" name="nome-obrigacao" required>
            <br>
            <label for="orixa-obrigacao">Orixa do Obrigacionado</label>
            <br>
            <input type="text" id="orixaObrigacao-form" name="orixa-obrigacao" required>
            <br>
            <label for="dataInicio-obrigacao">Data de Inicio da Função</label>
            <br>
            <input type="date" id="dataIncioObrigacao-form" name="dataInicio-obrigacao" required>
            <br>
            <label for="dataFim-obrigacao">Data do Fim da Função</label>
            <br>
            <input type="date" id="dataFimObrigacao-form" name="dataFim-obrigacao" required>
            <br>
            <label for="comunicacao">Comunicar a Todos? </label>
            <br>
            <select id="comunicacao-form" name="comunicacao" required>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
            </select>
            <br>
            <button type="submit" onclick="salvarObrigacao()" id="enviarObrigacao" name="enviar">Enviar</button>
        <br>
        </form>
    `
}

function inserirCalendarioJson() {
    
}

