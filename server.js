const express = require('express');

const api = require('./backend/routes');

const app = express();

require('dotenv').config();

app.get('/', (req, res) => {res.send({'sucess': true})});

app.use('/api', api); 

const PORT = process.env.PORT;
app.listen(PORT);
