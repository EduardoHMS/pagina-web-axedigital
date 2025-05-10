fetch('http://localhost:3000/salvar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(membro)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data.message);
  });

var cliente = JSON.parse('{"nome":"Luisa","cargo":"dirigente"}');
var obrigacao = JSON.parse('{"nome": "Nicolas","data": "12/12/2012"}');

document.getElementById("nome").innerHTML = `${cliente.nome}`;

document.getElementById("dt_px_obrigacao").innerHTML = `${obrigacao.data}`;


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('uploadForm');
    if (form) {
        form.addEventListener('submit', salvar);
    }
});

function irpara(onde){
    if(onde == 1){
        window.location.href = "/public/src/pages/pageArquivos.html";
    }else if(onde = 2){

    }
}

function inserirJson(){
    document.getElementById('form-inserir').innerHTML =
    `
    <form id="uploadForm" enctype="multipart/form-data">
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
        <button type="submit" onclick="salvar()" id="enviar" name="enviar">Enviar</button>
    </form>
    `;
}
function salvar(){
    /*const membro = {
        nome: document.getElementById('nome-form').value,
        dataIniciacao: document.getElementById('datainiciacao-form').value,
        padrinho: document.getElementById('nomepadrinho-form').value,
        orunko: document.getElementById('orunko-form').value,
        dijina: document.getElementById('dijina-form').value,
        dataNasc: document.getElementById('datanasc-form').value,
        nomeMae: document.getElementById('nomemae-form').value,
        obrigacao: document.getElementById('obrigacao-form').value
    };
    const membros = JSON.parse(localStorage.getItem("membros")) || [];
    membros.push(membro);
    localStorage.setItem("membros", JSON.stringify(membros));
    */

    const membro = {
        nome: document.getElementById('nome-form').value,
        dataIniciacao: document.getElementById('datainiciacao-form').value,
        padrinho: document.getElementById('nomepadrinho-form').value,
        orunko: document.getElementById('orunko-form').value,
        dijina: document.getElementById('dijina-form').value,
        dataNasc: document.getElementById('datanasc-form').value,
        nomeMae: document.getElementById('nomemae-form').value,
        obrigacao: document.getElementById('obrigacao-form').value
    };

    fetch('/salvar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(membro)
    })
    .then(res => res.json())
    .then(data => alert(data.mensagem))
    .catch(err => console.error(err));
}