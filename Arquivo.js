const express = require('express')
const fs = require('fs')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/app/:email', (req, res) => {
res.send({lista: fs.readdirSync('./').filter(e => e.includes('.json') && e.includes('@')) })
})
app.post('/app', (req, res) => {
fs.writeFileSync(req.body.email+'.json', JSON.stringify(req.body))
res.send({email: req.body.email})
})
app.put('/app/:email', (req, res) => {
res.send(JSON.parse(fs.readFileSync(req.body.email+'.json')))
})

app.delete('/app/:email', (req, res) => {
fs.unlinkSync(req.body.email+'.json')
res.send('dados apagados')
})
app.listen(8080)

// arquivoprincipal.js

// const express = require('express')
// const fs = require('fs')
// const app = express()
 

// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
// app.set('view engine', 'ejs')
 

// app.get('/', (req, res) => res.render('call'))
 

// app.get('/app', (req, res) => {
// fs.writeFileSync(req.query.email+'.json', JSON.stringify(req.query))
// res.send("ok <a href='/'>Voltar p/ pagina inicial </a>")
// })
// app.get('/lista', (req, res) => {
// res.render('lista', {lista: fs.readdirSync('./').filter(e => e.includes('.json') && e.includes('@')) })
// })
// app.get('/read/:email', (req, res) => {
// res.send(JSON.parse(fs.readFileSync(req.params.email+'.json')))
// })
// app.get('/delete/:email', (req, res) => {
// fs.unlinkSync(req.params.email+'.json')
// res.send('dados apagados')
// })
// app.listen(8080)
 