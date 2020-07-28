import React, { useEffect, useState } from 'react';

const PokemonDetails = ({ match, history }) => {
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);

    const retrievePokemonData = async () => {
      const pokemonName = match.params.pokemonName;

      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const response = await data.json();

      setPokemonDetails(response);
    };

    retrievePokemonData();
  }, [match]);

  return (
    <div className='pokemon-details'>
      <button className='button' onClick={() => history.push('/')}>
        Go Back
      </button>
      <div className='image-row'>
        <img
          className='pokemon-image'
          src={pokemonDetails.sprites && pokemonDetails.sprites.front_default}
          alt={pokemonDetails.name && pokemonDetails.name}
        />
        <img
          className='pokemon-image'
          src={pokemonDetails.sprites && pokemonDetails.sprites.front_shiny}
          alt={pokemonDetails.name && pokemonDetails.name}
        />
      </div>
      <h1 className='title'>
        {pokemonDetails.name && pokemonDetails.name.toUpperCase()}
      </h1>
      <h1>Moves: </h1>
      {pokemonDetails.moves &&
        pokemonDetails.moves.slice(0, 5).map((move, index) => (
          <h5 className='details' key={index}>
            {move.move.name}
          </h5>
        ))}
      <h1>Types</h1>
      {pokemonDetails.types &&
        pokemonDetails.types.map((pokemonType, index) => (
          <h5 className='details' key={index}>
            {pokemonType.type.name}
          </h5>
        ))}
    </div>
  );
};

export default PokemonDetails;
