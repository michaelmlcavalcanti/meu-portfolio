const express = require('express');

const api = require('./backend/routes');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', api); 

if (process.env.NODE_ENV === 'production'){
    //Express vai entregar os assets de produção
    //Como por exemplo: main.js ou o main.css
    api.use(express.static('frontend/build'));

    //Express vai entregar o index.html, se não reconhecer a rota
    const path = require('path')
    app.get('*', function(req,res){
        //__dirname/frontend/build/index.html
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT;
app.listen(PORT);
