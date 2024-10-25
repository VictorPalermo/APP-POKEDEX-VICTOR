const treinadores = [
    { id: 1, nome: 'Vik', genero: 'Garoto' },
    { id: 2, nome: 'Leonder', genero: 'Garoto' },
    { id: 3, nome: 'Ravane', genero: 'Garota' },
];

const getTreinadores = () => treinadores;
const getTreinadorById = (id) => treinadores.find(p => p.id === parseInt(id));
const createTreinador = (nome, genero) => {
    const novoTreinador = {
        id: treinadores.length + 1,
        nome,
        genero
    };
    treinadores.push(novoTreinador);
};

module.exports = { getTreinadores, getTreinadorById, createTreinador };
