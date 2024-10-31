const Pokedex = require('../models/pokedexModel');
const treinadorModel = require('../models/treinadorModel');
const pokemonModel = require('../models/pokemonModel'); 

exports.exibirPokedex = (req, res) => {
    const treinadorNome = req.params.nome; 
    const treinador = treinadorModel.getTreinadorPorNome(treinadorNome); 

    if (treinador) {
        const pokedex = new Pokedex(treinador);

        const pokemons = pokemonModel.getPokemonsPorTreinador(treinadorNome); 
        console.log(`Pokémons do treinador ${treinadorNome}:`, pokemons);
        pokedex.pokemons = pokemons; 

        const treinadores = treinadorModel.getTreinadores();
        res.render('pokedex', { pokedex, treinadores });
    } else {
        res.status(404).send('Treinador não encontrado');
    }
};

