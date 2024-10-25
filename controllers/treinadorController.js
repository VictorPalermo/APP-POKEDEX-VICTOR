const treinadorModel = require('../models/treinadorModel');

const createTreinador = (req, res) => {
    const { nome, genero } = req.body; 
    treinadorModel.createTreinador(nome, genero);
    res.redirect('/'); 
};

module.exports = {
    getAllTreinadores,
    getTreinador,
    createTreinador, 
};
