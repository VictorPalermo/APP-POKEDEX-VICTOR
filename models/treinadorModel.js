const pokemons = [
    { id: 1, nome: 'Vik', tipo: '1' },
    { id: 2, nome: 'Leonder', tipo: '2' },
    { id: 3, nome: 'Ravane', tipo: '3' },
    { id: 4, nome: 'Ravaxer', tipo: '4' },
];

const getTreinadores = () => treinadores;
const getTreinadorById = (id) => treinadores.find(p => p.id === parseInt(id));
const createTreinador = (nome, tipo) => treinadores.push(treinadores.length+1, nome, tipo)

module.exports = { getTreinadores, getTreinadorById, createTreinador};