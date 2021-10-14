const router = require('express').Router();

router.get('/', 
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

module.exports = router;