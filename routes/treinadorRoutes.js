const express = require ('express');
const router = express.Router();
const treinadorController = require('../controllers/treinadorController');

router.get('/', treinadorController.getAllTreinadores);
router.get('/treinador/:id', treinadorController.getTreinador);

module.exports = router;