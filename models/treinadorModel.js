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

// Função para obter o treinador atual
const getTreinadorAtual = () => {
    return treinadorAtual;
};

// Um array para armazenar os treinadores (poderia ser substituído por um banco de dados mais tarde)
const treinadores = [];

// Funções para manipular os treinadores
const addTreinador = (nome, genero) => {
    const novoTreinador = new Treinador(nome, genero);
    treinadores.push(novoTreinador);
    treinadorAtual = novoTreinador;
};

const getTreinadores = () => {
    return treinadores;
};

module.exports = { addTreinador, getTreinadores, getTreinadorAtual };
