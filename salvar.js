// const express = require("express")
// const app = express()
// const fs = require("fs")

// app.use(express.urlencoded({extended: false}))
// app.use(express.json())

// app.set("view engine", "ejs")

// app.get("/",(req,res)=>{
//     res.render ("engine")
// })

// app.post("/proxrota", (req,res)=>{
//     res.render("proxrota")
//     var nome = req.body.nome
//     var email = req.body.email
//    fs.writeFileSync(email+".json",JSON.stringify(nome + email), function(error) {
//     if (error) {
//         console.log('ih, deu merda', erro);
//     }
//    })

// })

// app.get('/lista', (req,res)=>{
//     fs.readdir(__dirname, (err, files)=>{
//        if (err) console.log(err);
//        var newfiles =  files.filter(data => data.includes('.json'))
//         res.render('lista', {files: newfiles})

//     })

// })
//  app.get('/:email', (req,res)=>{
//     var dados = req.params
//     dados = JSON.parse(fs.readFileSync(dados.email))
//     res.status(200).send(dados)
//  })
// app.listen(8080, () => { console.log("Servidor em http://localhost:8080") })





const express = require("express")
const app = express()
const fs = require("fs")
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// const port = 8080
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("engine")
})

app.post("/proxrota", (req, res) => {
    res.render("proxrota")
    var email = req.body.email
    fs.writeFileSync(email + ".json", JSON.stringify(req.body), function (error) {
        if (error) {
            console.log('ih, deu merda', erro);
        }
    })
})

app.post('/lista', (req, res) => {
    fs.readdir(__dirname, (err, files) => {
        if (err) console.log(err);
        var newfiles = files.filter(data => data.includes('.json'))
        console.log(newfiles);
        res.render('lista', { files: newfiles })

    })
})
app.get('/:email', (req, res) => {
    var dados = req.params
    dados = JSON.parse(fs.readFileSync(dados.email))
    res.status(200).send(dados)
})
app.get('/delete/:email', (req, res) => {
    var dados = req.params.email
    fs.unlinkSync(dados)
    res.send("dados apagados com sucesso")
})
app.listen(8080, () => { console.log("Servidor em http://localhost:8080") })