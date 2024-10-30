const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.post('/pokemon/:nome', pokemonController.criarPokemon);


module.exports = router;
