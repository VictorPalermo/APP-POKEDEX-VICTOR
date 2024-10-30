const { Pokemon, adicionarPokemon } = require('../models/pokemonModel');
const treinadorModel = require('../models/treinadorModel');


exports.criarPokemon = (req, res) => {
    const { nome, tipo1, tipo2, generop, peso, altura, level } = req.body;
    const treinadorNome = req.params.nome; 

    const novoPokemon = new Pokemon(nome, tipo1, tipo2, generop, peso, altura, level);
    console.log(`Pokemon criado: Nome - ${nome}, Tipo - ${tipo1}, Segundo tipo - ${tipo2}, Gênero - ${generop}, Peso - ${peso}, Altura - ${altura}, Level ${level}`);
    adicionarPokemon(treinadorNome, novoPokemon); 

    res.redirect(`/pokedex/${treinadorNome}`); 
};
