// pokedexRoutes.js
const express = require('express');
const router = express.Router();
const pokedexController = require('../controllers/pokedexController');

router.get('/pokedex', pokedexController.exibirPokedex);

module.exports = router;
