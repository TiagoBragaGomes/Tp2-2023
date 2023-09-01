const fs = require('fs');
const express = require('express')
const app = express
app.get('/porse', (req, res) => {
   fs.readdir('caminho/para/pasta/de/cadastros', (err, files) => {
      if (err) {
        console.log(err);
        return res.status(500).send('Erro ao ler os cadastros de usuários.');
      }
      const usuarios = [];
      files.forEach((file) => {
        const email = file.split('.')[0]; 
        usuarios.push(email);
      });

      res.render('porse', { usuarios });
    });
  });
  app.get('/usuarios/:email', (req, res) => {
    const email = req.params.email;
  
    // Carrega os dados do usuário com base no e-mail
    // Supondo que os dados estejam em arquivos JSON
    fs.readFile(`caminho/para/pasta/de/cadastros/${email}.json`, (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send('Erro ao carregar os dados do usuário.');
      }
      const usuario = JSON.parse(data);
  
      // Renderiza o template EJS para exibir os detalhes do usuário
      res.render('detalhes-usuario', { usuario });
    });
  });
  