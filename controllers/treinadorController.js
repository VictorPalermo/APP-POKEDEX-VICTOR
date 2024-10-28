const { addTreinador, getTreinadores } = require('../models/treinadorModel');

// Função para adicionar um novo treinador
const criarTreinador = (req, res) => {
    const { nome, genero } = req.body; // Assume que os dados vêm do corpo da requisição
    addTreinador(nome, genero);
    console.log(`Treinador criado: Nome - ${nome}, Gênero - ${genero}`);
    res.status(201).json({ message: 'Treinador criado com sucesso!'});
    res.redirect('/pokedex'); // ajuste a rota conforme sua configuração

};

// Função para obter todos os treinadores
const listarTreinadores = (req, res) => {
    
    const treinadores = getTreinadores();
    res.status(200).json(treinadores);
};

module.exports = { criarTreinador, listarTreinadores };
