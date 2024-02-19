const express = require('express')
const mogoose = require('mongoose')
const cors = require('cors')


const Pecas = mogoose.model('Pecas', {
    nome: String,
    categoria: String, 
    descricao: String, 
    imageCode: String
})

const app = express()
app.use(express.json())
const port = 3001

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET',
    credentials: true, 
    optionsSuccessStatus: 204
}));

app.get('/', async(req, res) => {
    const films = await Pecas.find()
    return res.json(films)
})

app.post('/', async(req, res) => {
    const peca = new Pecas({
        nome: req.body.nome,
        categoria: req.body.categoria,
        descricao: req.body.descricao,
        imageCode: req.body.imageCode,
    })

    console.log(peca)
    await peca.save()
    return res.sendStatus(200)
})

app.listen(port, () => {
    mogoose.connect('mongodb://localhost:27017/teste')
    console.log('Server rodando...')
})