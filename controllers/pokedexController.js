// pokedexController.js
const Pokedex = require('../models/pokedexModel');
const treinadorModel = require('../models/treinadorModel');

exports.exibirPokedex = (req, res) => {
  const treinadorNome = req.params.nome; // Altere de id para nome
  const treinador = treinadorModel.getTreinadores().find(t => t.nome === treinadorNome); // Buscando pelo nome
  
  if (treinador) {
    const pokedex = new Pokedex(treinador);
    const treinadores = treinadorModel.getTreinadores();
    res.render('pokedex', { pokedex, treinadores });
  } else {
    res.status(404).send('Treinador não encontrado');
  }
};
