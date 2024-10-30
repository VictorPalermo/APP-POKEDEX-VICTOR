// pokedexRoutes.js
const express = require('express');
const router = express.Router();
const pokedexController = require('../controllers/pokedexController');

router.get('/pokedex/:nome', pokedexController.exibirPokedex);

module.exports = router;
