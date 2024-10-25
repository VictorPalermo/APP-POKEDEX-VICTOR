const pokemonModel = require('../models/pokemonModel');

const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('index', { pokemons });
};

const getPokemon = (req, res) => {
    const pokemon = pokemonModel.getPokemonById(req.params.id);
    if (pokemon) {
        res.render('pokemon', { pokemon });
    } else {
        res.status(404).send('Pokémon não encontrado');
    }
};


const createPokemon = (req, res) => {
    const { nome, tipo1, tipo2, generop, peso, altura, level } = req.body;
    const novoPokemon = pokemonModel.createPokemon({
        nome,
        tipo1,
        tipo2,
        genero: generop,
        peso,
        altura,
        level
    });
    res.redirect('/');
};

module.exports = { getAllPokemons, getPokemon, createPokemon };
