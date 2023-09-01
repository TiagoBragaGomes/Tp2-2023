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
app.listen(3000)