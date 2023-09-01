const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

function fatorial(n) {
    if (n == 0) {
        return 1;
    }
    var resp = n;
    while (n > 2) {
        resp *= --n;
        result = resp;
    }
    return resp;
}

app.get('/', (request, response) => {
    response.render('servidor', { a: '', b: '', nome: '' })
})

app.route('/operacao')
    .get((req, res) => {
        res.render('servidor', { a: '', b: '', nome: '' })
    })
    .post((req, res) => {
        console.log("n1=" + req.body.n1)
        console.log("n2=" + req.body.n2)
        console.log("Operação=" + req.body.op)
        console.log("NOME=" + req.body.nome)
        let result, conta
        if (req.body.op === '+') {
            conta = 'soma'
            result = parseFloat(req.body.n1) + parseFloat(req.body.n2)
        } else if (req.body.op === '-') {
            conta = 'subtração'
            result = parseFloat(req.body.n1) - parseFloat(req.body.n2)
        } else if (req.body.op === 'x') {
            conta = 'multiplicação'
            result = parseFloat(req.body.n1) * parseFloat(req.body.n2)
        } else if (req.body.op === '/') {
            conta = 'divisão'
            result = parseFloat(req.body.n1) / parseFloat(req.body.n2)
        } else
            result = "Operação inválida"
        if (isNaN(result)) {
            result = "Valores inválidos."
        } else {
            result = req.body.nome + ", sua " + conta + " deu: " + result
        }
        res.render('operacoes', { x: result, a: req.body.n1, b: req.body.n2, nome: req.body.nome })
    })


    .post((req, res) => {
        let valor
        if (req.body.n1 === '')
            valor = parseInt(req.body.n2)
        else
            valor = parseInt(req.body.n1)
        console.log("n1=" + req.body.n1)
        console.log("NOME=" + req.body.nome)
        console.log("Operação=fatorial")
        let result = fatorial(valor)

        if (isNaN(result)) {
            result = "Valores inválidos."
        } else {
            result = req.body.nome + ", seu fatorial deu: " + result
        }

        res.render('operacoes', { x: result, a: req.body.n1, b: req.body.n2, nome: req.body.nome })
    })

app.listen(8080, () => { console.log("Servidor em http://localhost:8080") })
// para indentar o código no VS Code: Ctrl + Shift + i


// const express = require('express');
// const fs = require('fs');
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
// app.post('/cadastro', (req, res) => {
//     const { nome, email } = req.body;
  
//     // Salvar os dados em um arquivo JSON
//     const data = { nome, email };
//     const fileName = `${email}.json`;
//     fs.writeFile(fileName, JSON.stringify(data), err => {
//       if (err) {
//         console.error(err);
//         return res.status(500).send('Erro ao salvar os dados.');
//       }
  
//       // Exibir a página de sucesso com o link para cadastrar outro usuário
//       res.send(`
//         <html>
//           <head>
//             <title>Sucesso</title>
//           </head>
//           <body>
//             <h1>Dados recebidos com sucesso!</h1>
//             <p>Nome: ${nome}</p>
//             <p>Email: ${email}</p>
//             <a href="/cadastro">Cadastrar outro usuário</a>
//           </body>
//         </html>
//       `);
//     });
//   });
//   app.get('/cadastro', (req, res) => {
//     // Exibir o formulário de cadastro
//     res.send(`
//       <html>
//         <head>
//           <title>Cadastro</title>
//         </head>
//         <body>
//           <h1>Cadastro de Usuário</h1>
//           <form method="POST" action="/cadastro">
//             <input type="text" name="nome" placeholder="Nome" required><br>
//             <input type="email" name="email" placeholder="Email" required><br>
//             <button type="submit">Cadastrar</button>
//           </form>
//         </body>
//       </html>
//     `);
//   });
//   app.listen(3000, () => {
//     console.log('Servidor rodando na porta 3000');
//   });
      