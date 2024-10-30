/*let treinadores = [
    { id: 1, nome: 'Vik', genero: 'Garoto', pokemons: [] },
    { id: 2, nome: 'Leonder', genero: 'Garoto', pokemons: [] },
    { id: 3, nome: 'Ravane', genero: 'Garota', pokemons: [] }
];*/

class Treinador {
    constructor(nome, genero) {
        this.nome = nome;
        this.genero = genero;
        this.pokemons = [];
    }
}

let treinadorAtual = null;
const treinadores = [];

const getTreinadorAtual = () => {
    return treinadorAtual;
};

const addTreinador = (nome, genero) => {
    const novoTreinador = new Treinador(nome, genero);
    treinadores.push(novoTreinador);
    treinadorAtual = novoTreinador;
    return novoTreinador;
};

const getTreinadores = () => {
    return treinadores;
};

const getTreinadorPorNome = (nome) => {
    return treinadores.find(t => t.nome === nome);
};

module.exports = { addTreinador, getTreinadores, getTreinadorAtual, getTreinadorPorNome };

