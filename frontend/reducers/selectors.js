export const selectAllPokemon = ({ entities: { pokemon } }) => Object.values(pokemon);
export const selectAllItems = ({ entities: { items } }) => Object.values(items);

export const selectPokemon = ({ entities: { pokemon } }, id) => pokemon[id];

export const selectPokemonItems = ({ entities: { items } }, id) => (
  Object.values(items).filter((item) => item.pokemon_id === id)
);

export const selectItem = ({ entities: { items } }, id) => items[id];