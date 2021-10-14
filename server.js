const express = require('express');
const app = express()

app.get('/', (req, res) => {res.send({'sucess': true})})

app.get('/portfolio', 
        (req, res) => 
        {
        const data = [
        {id: 1, nome: "Meu primeiro projeto", Criado: "13-10-2021"},
        {id: 2, nome: "Meu segundo projeto", Criado: "13-10-2021"},
        {id: 3, nome: "Meus outros projetos", Criado: "13-10-2021"}
        ];
        res.send({sucess: true, data: data});
    }
)

const PORT = 3080
app.listen(PORT);
