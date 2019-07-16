export const fetchAllPokemon = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  });
};

export const fetchPokemon = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/pokemon/${id}`
  });
};

export const createPokemon = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/pokemon',
    data: { pokemon: data }
  });
}