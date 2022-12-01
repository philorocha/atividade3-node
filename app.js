const express = require('express');
const mysql = require('mysql2');
const conexao = require('./conexao.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World from root');
    res.end();
})

app.post('/clientes', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    return conexao.execSQLQuery(`INSERT INTO cliente (nome) VALUES('${req.body.nome}')`, res)
})

app.get('/clientes', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    return conexao.execSQLQuery('SELECT * FROM cliente', res);
})

app.get('/clientes/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    return conexao.execSQLQuery('SELECT * FROM cliente WHERE id=' + req.params.id, res);
})

app.put('/clientes/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    return conexao.execSQLQuery(`UPDATE cliente SET nome='${req.body.nome}' WHERE id=${req.params.id}`, res);
})

app.delete('/clientes/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    return conexao.execSQLQuery(`DELETE FROM cliente WHERE id=${req.params.id}`, res);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));