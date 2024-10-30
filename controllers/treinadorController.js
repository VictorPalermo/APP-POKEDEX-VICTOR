const { addTreinador, getTreinadores, getTreinadorPorNome } = require('../models/treinadorModel');

// Função para adicionar um novo treinador
const criarTreinador = (req, res) => {
    const { nome, genero } = req.body; // Assume que os dados vêm do corpo da requisição
    const novoTreinador = addTreinador(nome, genero);
    
    console.log(`Treinador criado: Nome - ${nome}, Gênero - ${genero}`);
    // Redireciona para a página da Pokédex do treinador criado
    res.redirect(`/pokedex/${novoTreinador.nome}`);
};

// Função para obter todos os treinadores
const listarTreinadores = (req, res) => {
    const treinadores = getTreinadores();
    res.status(200).json(treinadores);
};

// Função para selecionar treinador pelo nome
const selecionarTreinador = (req, res) => {
    const nome = req.params.nome;
    const treinador = getTreinadorPorNome(nome);
    if (treinador) {
        treinadorAtual = treinador; // Define o treinador atual
        res.redirect(`/pokedex/${treinador.nome}`);
    } else {
        res.status(404).send('Treinador não encontrado');
    }
};

module.exports = { criarTreinador, listarTreinadores, selecionarTreinador };
