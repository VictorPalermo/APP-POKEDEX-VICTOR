const express = require('express');
const app = express();
const treinadorRoutes = require ('./routes/treinadorRoutes')

const bodyParser = require('body-parser');
const pokemonRoutes = require ('./routes/pokemonRoutes');

const indexRoutes = require ('./routes/indexRoutes')



app.use(express.json());
app.use('/api', treinadorRoutes);

const pokedexRoutes = require('./routes/pokedexRoutes');
app.use('/', pokedexRoutes);

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/treinador', treinadorRoutes)
app.use('/', indexRoutes)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
