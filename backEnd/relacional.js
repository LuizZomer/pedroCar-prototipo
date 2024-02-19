const app = require('express')()
const mysql = require('mysql2')
const cors = require('cors')
const { json } = require('express')

const PORT = 3001

app.use(json())

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET',
    credentials: true, 
    optionsSuccessStatus: 204
  }));

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password : 'admin',
    database: 'pedroCar'
}


const conn = mysql.createConnection(dbConfig)

conn.connect((err) => {
    if (err){
        console.log('Erro ao conectar ao banco de dados')
        return
    }
    console.log('Conectado ao banco')
})

app.get('/', (req, res) => {
    conn.query("SELECT * FROM pecas", (err, results) => {
        if(err){
            console.error('Erro na consulta ao banco de dados:', err);  
            return res.status(500).json({error: 'Erro a consultar o banco'})
        }
        res.json(results)
    })
})

app.post('/', (req, res)=> {
    console.log(req.body)
    res.send('Dado recebido')
})


app.listen(PORT, () => {
    console.log("Servidor express rodando")
})