
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://tiagog:<password>@tp2-2023.q5rwcib.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

const bancoDados = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;

//const uri = "mongodb+srv://cesar:rasec@tp2.bmv5w.mongodb.net/tp2?retryWrites=true&w=majority";
const uri = "mongodb://localhost:27017";

bancoDados.connect(uri)
.then(conn => global.conn = conn.db("tp2"))
.catch(err => console.log(err))

function buscarTodas() {
return global.conn.collection("operacoes").find().toArray();
}

function salvar(operacao) {
return global.conn.collection("operacoes").insertOne(operacao);
}

function apagarUmaOperacao(id) {
return global.conn.collection("operacoes").deleteOne({ _id: ObjectId(id) });
}

function encontrarOperacao(id) {
return global.conn.collection("operacoes").findOne(new ObjectId(id));
}

function atualizarOperacao(id, operacao) {
return global.conn.collection("operacoes").updateOne({ _id: new ObjectId(id) }, { $set: operacao });
}

