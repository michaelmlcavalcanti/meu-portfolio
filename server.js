const express = require('express')

const api = require('./backend/routes')

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', api)

if(process.env.NODE_ENV == 'production'){

    app.use(express.static('frontend/build'))

    const path = require('path')
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT;
app.listen(PORT);
