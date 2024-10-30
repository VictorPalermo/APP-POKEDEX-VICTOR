// pokedexModel.js
class Pokedex {
  constructor(treinador) {
      this.treinadorNome = treinador.nome;
      this.treinadorGenero = treinador.genero;
      this.pokemons = []; 
  }
}

module.exports = Pokedex;
