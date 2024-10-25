const pokemons = [
    { id: 1, nome: 'Bulbassauro', tipo: 'Vegetal/Veneno' },
    { id: 2, nome: 'Squirtle', tipo: 'Água' },
    { id: 3, nome: 'Charmander', tipo: 'Fogo' },
];

const getPokemons = () => pokemons;
const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id));

const createPokemon = ({ nome, tipo1, tipo2, genero, peso, altura, level }) => {
    const id = pokemons.length + 1;
    const novoPokemon = {
        id,
        nome,
        tipo: tipo2 ? `${tipo1}/${tipo2}` : tipo1,
        genero,
        peso,
        altura,
        level
    };
    pokemons.push(novoPokemon);
    return novoPokemon;
};

module.exports = { getPokemons, getPokemonById, createPokemon };
