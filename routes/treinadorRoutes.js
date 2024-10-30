const express = require('express');
const router = express.Router();
const { criarTreinador, listarTreinadores, selecionarTreinador } = require('../controllers/treinadorController');

router.post('/treinador', criarTreinador);

router.get('/treinadores', listarTreinadores);

router.get('/selecionar/:nome', selecionarTreinador);

module.exports = router;
