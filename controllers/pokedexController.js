// pokedexController.js
const Pokedex = require('../models/pokedexModel');
const treinadorModel = require('../models/treinadorModel'); // Importa o treinador temporário

exports.exibirPokedex = (req, res) => {
  const treinador = treinadorModel.getTreinadorAtual(); // Obtenha o treinador atual (deve ser salvo temporariamente)
  
  if (treinador) {
    const pokedex = new Pokedex(treinador); // Cria uma instância da Pokédex com os dados do treinador
    const treinadores = treinadorModel.getTreinadores();
    res.render('pokedex', { pokedex }); // Passa a pokedex para a view
  } else {
    res.status(404).send('Treinador não encontrado');
  }
};
