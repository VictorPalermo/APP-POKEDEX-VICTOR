const { Pokemon, adicionarPokemon } = require('../models/pokemonModel');
const treinadorModel = require('../models/treinadorModel');


exports.criarPokemon = (req, res) => {
    console.log('Dados recebidos do formulário:', req.body);
    const { nome, tipo1, tipo2, generop, peso, altura, level } = req.body;

    const treinadorNome = req.params.nome;

    if (!nome || !tipo1 || !generop || !peso || !altura || !level) {
        console.log('Campos obrigatórios ausentes:', { nome, tipo1, generop, peso, altura, level });
        return res.status(400).send('Todos os campos são obrigatórios.');
    }

    const novoPokemon = new Pokemon(nome, tipo1, tipo2, generop, peso, altura, level, treinadorNome);
    console.log('Novo Pokémon criado:', novoPokemon); 

    res.redirect(`/pokedex/${treinadorNome}`);
};

