const { addTreinador, getTreinadores, getTreinadorPorNome } = require('../models/treinadorModel');

const criarTreinador = (req, res) => {
    const { nome, genero } = req.body; 
    const novoTreinador = addTreinador(nome, genero);
    
    console.log(`Treinador criado: Nome - ${nome}, Gênero - ${genero}`);
    res.redirect(`/pokedex/${novoTreinador.nome}`);
};

const listarTreinadores = (req, res) => {
    const treinadores = getTreinadores();
    res.status(200).json(treinadores);
};

const selecionarTreinador = (req, res) => {
    const nome = req.params.nome;
    const treinador = getTreinadorPorNome(nome);
    if (treinador) {
        treinadorAtual = treinador; 
        res.redirect(`/pokedex/${treinador.nome}`);
    } else {
        res.status(404).send('Treinador não encontrado');
    }
};

module.exports = { criarTreinador, listarTreinadores, selecionarTreinador };
