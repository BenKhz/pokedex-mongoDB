import React from 'react';

const PokeEntry = ({ pokemon }) => {
  return (
    <div>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.img} />
    </div>
  );
};

export default PokeEntry;