const Pokedex = require('../models/pokedexModel');
const treinadorModel = require('../models/treinadorModel');
const pokemonModel = require('../models/pokemonModel'); 

exports.exibirPokedex = (req, res) => {
    const treinadorNome = req.params.nome; 
    const treinador = treinadorModel.getTreinadores().find(t => t.nome === treinadorNome); 

    if (treinador) {
        const pokedex = new Pokedex(treinador);

        const pokemons = pokemonModel.getPokemonsPorTreinador(treinadorNome); 
        pokedex.pokemons = pokemons; 

        const treinadores = treinadorModel.getTreinadores();
        res.render('pokedex', { pokedex, treinadores });
    } else {
        res.status(404).send('Treinador não encontrado');
    }
};
