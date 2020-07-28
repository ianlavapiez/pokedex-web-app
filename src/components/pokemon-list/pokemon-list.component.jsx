import React, { Fragment } from 'react';
import PokemonCard from '../pokemon-card/pokemon-card.component';

class PokemonList extends React.Component {
  state = {
    pokemon: [],
  };

  async componentDidMount() {
    try {
      const fetchedPokemonData = await fetch(
        'https://pokeapi.co/api/v2/pokemon/'
      );
      const response = await fetchedPokemonData.json();

      this.setState({
        pokemon: response.results,
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { pokemon } = this.state;

    return (
      <Fragment>
        <h1 className='front-title'>Your Pokedex Web!</h1>
        <div className='pokemon-list'>
          {pokemon.map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon} index={index} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default PokemonList;
