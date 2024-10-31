const { getTreinadorPorNome } = require('../models/treinadorModel');

const pokemons = [];

class Pokemon {
    constructor(nome, tipo1, tipo2, generop, peso, altura, level) {
        this.nome = nome;
        this.tipo1 = tipo1;
        this.tipo2 = tipo2;
        this.generop = generop;
        this.peso = peso;
        this.altura = altura;
        this.level = level;
        this.treinadorNome = treinadorNome;
    }
}

function getPokemonsPorTreinador(treinadorNome) {
    return pokemons.filter(pokemon => pokemon.treinadorNome === treinadorNome);
}

function adicionarPokemon(treinadorNome, pokemon) {
    const treinador = getTreinadorPorNome(treinadorNome);
    if (treinador) {
        pokemon.treinadorNome = treinadorNome;
        pokemons.push(pokemon); 
        treinador.pokemons = treinador.pokemons || []; 
        treinador.pokemons.push(pokemon); 
    }
}




module.exports = { Pokemon, getPokemonsPorTreinador, adicionarPokemon, pokemons };
