const express = require('express');
const router = express.Router();
const pokedexController = require('../controllers/pokedexController');

const pokemonController = require('../controllers/pokemonController');


router.get('/pokedex/:nome', pokedexController.exibirPokedex);

router.post('/pokedex/:nome', pokemonController.criarPokemon); 

module.exports = router;
