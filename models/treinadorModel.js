/*let treinadores = [
    { id: 1, nome: 'Vik', genero: 'Garoto', pokemons: [] },
    { id: 2, nome: 'Leonder', genero: 'Garoto', pokemons: [] },
    { id: 3, nome: 'Ravane', genero: 'Garota', pokemons: [] }
];*/

class Treinador {
    constructor(nome, genero) {
        this.nome = nome;
        this.genero = genero;
    }
}

let treinadorAtual = null;
const treinadores = [];

// Recupera o treinador atual
const getTreinadorAtual = () => {
    return treinadorAtual;
};

// Adiciona um novo treinador sem ID
const addTreinador = (nome, genero) => {
    const novoTreinador = new Treinador(nome, genero);
    treinadores.push(novoTreinador);
    treinadorAtual = novoTreinador;
    return novoTreinador;
};

// Recupera todos os treinadores
const getTreinadores = () => {
    return treinadores;
};

// Recupera um treinador específico pelo nome
const getTreinadorPorNome = (nome) => {
    return treinadores.find(t => t.nome === nome);
};

module.exports = { addTreinador, getTreinadores, getTreinadorAtual, getTreinadorPorNome };

