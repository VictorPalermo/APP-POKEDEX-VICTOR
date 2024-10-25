const express = require('express');
const bodyParser = require('body-parser');
const pokemonRoutes = require ('./routes/pokemonRoutes');
const treinadorRoutes = require ('./routes/treinadorRoutes')
const inicioRoutes = require ('./routes/inicioRoutes')
const nomeRoutes = require('./routes/nomeRoutes'); 


const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/pokemon', pokemonRoutes);
app.use('/treinador', treinadorRoutes)
app.use('/', inicioRoutes)
app.use('/', nomeRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
