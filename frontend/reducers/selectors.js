export const selectAllPokemon = ({ entities: { pokemon } }) => Object.values(pokemon);
export const selectAllItems = ({ entities: { items } }) => Object.values(items);

export const selectPokemonItems = ({ entities: { items } }, id) => (
  Object.values(items).filter((item) => item.pokemon_id === id)
);