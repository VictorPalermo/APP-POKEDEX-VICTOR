const express = require('express');
const router = express.Router();
const { criarTreinador, listarTreinadores } = require('../controllers/treinadorController');

// Rota para criar um novo treinador
router.post('/treinador', criarTreinador);

// Rota para listar todos os treinadores
router.get('/treinadores', listarTreinadores);


module.exports = router;
