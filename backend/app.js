const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose
const bodyParser = require('body-parser')
const cors = require('cors')
const { json } = require('body-parser')

//banco de dados
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')

//middlewares
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(cors())

//mapeamento ODM 
const Cliente = restful.model('Cliente', {
    nome: { type:String, require: true }
})

//API Rest
Cliente.methods(['get', 'post', 'put', 'delete'])

//rotas
Cliente.register(server, '/clientes')

//starta o server
server.listen(3002)