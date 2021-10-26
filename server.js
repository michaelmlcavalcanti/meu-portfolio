const express = require('express');

const api = require('./backend/routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('dotenv').config();

app.get('/', (req, res) => {res.send({'sucess': true})});

app.use('/api', api); 

const PORT = process.env.PORT;
app.listen(PORT);
