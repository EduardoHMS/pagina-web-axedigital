const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const PORT = 3000;
const JSON_PATH = path.join(__dirname, 'arquivo.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rota para salvar membro
app.post('/salvar', (req, res) => {
  const novoMembro = req.body;
  let membros = [];

  if (fs.existsSync(JSON_PATH)) {
    const dados = fs.readFileSync(JSON_PATH, 'utf8');
    membros = JSON.parse(dados || '[]');
  }

  membros.push(novoMembro);
  fs.writeFileSync(JSON_PATH, JSON.stringify(membros, null, 2));
  res.status(200).send({ message: 'Membro salvo' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
