// const express = require('express')
// const fs = require('fs')
// const app = express()

// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// app.get('/app/:email', (req, res) => {
// res.send({lista: fs.readdirSync('./').filter(e => e.includes('.json') && e.includes('@')) })
// })
// app.post('/app', (req, res) => {
// fs.writeFileSync(req.body.email+'.json', JSON.stringify(req.body))
// res.send({email: req.body.email})
// })
// app.put('/app/:email', (req, res) => {
// res.send(JSON.parse(fs.readFileSync(req.body.email+'.json')))
// })

// app.delete('/app/:email', (req, res) => {
// fs.unlinkSync(req.body.email+'.json')
// res.send('dados apagados')
// })
// app.listen(8080)

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



// arquivo atualizado

// const express = require('express')
// const fs = require('fs')
// const app = express()
// app.use(express.json())
// app.get('/app/:email', (req, res) => {

//     res.send(JSON.parse(fs.readFileSync(req.params.email + '.json')))
// })
// app.post('/app/post', (req, res) => {
//     const data = req.body
//     fs.writeFileSync(data.email + '.json', JSON.stringify(data))
//     res.send({ email: data.email })
// })
// app.put('/app/put', (req, res) => {
//     const data = req.body
//     fs.writeFileSync(`${data.email}.json`, JSON.stringify(data), { flag: 'w' })
//     res.send(`dados atualizados com sucesso`)
// })
// app.delete('/app/delete', (req, res) => {
//     const data = req.body
//     fs.unlinkSync(data.email + '.json')
//     res.send('dados apagados')
// })

// app.all('*', (req, res) => {
//     res.send({ erro: true, msg: "Rota não definida no servidor." })
// })
// app.listen(8080, () => console.log(`server loading`))


//Atualização do codigo usando mongo


const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

if (process.env.DEVOUPROD === 'DEV') {
  dotenv.config({path: './config/.env.dev'})
}
if (process.env.DEVOUPROD === 'PROD') {
  dotenv.config({path: './config/.env.prod'})
}

const app = express()
app.use(express.json())

const modelodeUsuario = mongoose.model('contas', new mongoose.Schema({
    email: String,
    password: String,
}))

mongoose.connect(process.env.URLDOBANCO)
  .then(()=>{

    app.post('/pegar-dados', async (req,res)=>{
    const usuarioEncontrado = await modelodeUsuario.findOne(req.body)
    res.send(usuarioEncontrado)
    })

    app.post('/postar-dados', async (req,res)=>{
    const usuarioCriado = await modelodeUsuario.create(req.body)
    res.send(usuarioCriado)
    })

    app.put('/atualizar-dados', async (req,res)=>{
    const usuarioAtualizado = await modelodeUsuario.findOneAndUpdate(
        {email: req.body.email, password: req.body.password},
        {email: req.body.newEmail, password: req.body.newPassword},
        {returnDocument: 'after'})

    res.send(usuarioAtualizado)
    })

    app.delete('/delete-dados', async (req,res)=>{
    const usuarioEncontrado = await modelodeUsuario.findOne(req.body)
    await modelodeUsuario.deleteOne(req.body, {returnDocument: 'before'})
    res.send(usuarioEncontrado)
    })

    app.listen(8080)
  })
