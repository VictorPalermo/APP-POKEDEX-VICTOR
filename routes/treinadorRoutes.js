const express = require('express');
const router = express.Router();
const treinadorController = require('../controllers/treinadorController');

router.post('/treinador', treinadorController.createTreinador);

module.exports = router;
