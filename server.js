const express = require('express');
const app = express()

app.get('/', (req, res) => {res.send({'sucess': true})})

app.get('/portfolio', 
        (req, res) => 
        {
        const data = [
        {id: 1, name: "Meu primeiro projeto", createdAt: "13-10-2021"},
        {id: 2, name: "Meu segundo projeto", createdAt: "13-10-2021"},
        {id: 3, name: "Meu terceiro projeto", createdAt: "13-10-2021"}
        ];
        res.send({sucess: true, data: data});
    }
)

const PORT = 3080
app.listen(PORT);
