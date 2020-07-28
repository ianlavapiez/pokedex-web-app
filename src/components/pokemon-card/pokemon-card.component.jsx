import React from 'react';
import { withRouter } from 'react-router-dom';

const PokemonCard = ({ pokemon, history, index }) => {
  return (
    <div className='pokemon-card'>
      <h5 className='subtitle'>Pokedex No. {index + 1}</h5>
      <h3 className='title'>{pokemon.name.toUpperCase()}</h3>
      <button
        className='button'
        onClick={() => history.push(`/details/${pokemon.name}`)}
      >
        View More Details
      </button>
    </div>
  );
};

export default withRouter(PokemonCard);
