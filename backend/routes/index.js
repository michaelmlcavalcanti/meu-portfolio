const router = require('express').Router();

require('../db/mongoConnection.js')

const portfolio = require('./portfolio');

router.get('/', (req, res) => {
    res.json({
        success: false,
        message: 'Por favor, não chame o /api'
    })
});

router.use('/portfolio', portfolio);

module.exports = router;