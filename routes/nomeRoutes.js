const express = require('express');
const router = express.Router();

router.get('/nome', (req, res) => {
    res.render('nome'); 
});

router.get('/pokemon', (req, res) => {
    res.render('pokemon'); 
});


module.exports = router;
