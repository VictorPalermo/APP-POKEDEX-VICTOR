const express = require('express');
const router = express.Router();
const { criarTreinador, listarTreinadores, selecionarTreinador } = require('../controllers/treinadorController');

// Rota para criar um novo treinador
router.post('/treinador', criarTreinador);

// Rota para listar todos os treinadores
router.get('/treinadores', listarTreinadores);

// Rota para selecionar um treinador pelo nome
router.get('/selecionar/:nome', selecionarTreinador);

module.exports = router;
