@pokemon.each do |poke|
  json.set! poke.id do
    json.extract! poke, :id, :name
    json.image_url image_url(poke.image_url)
  end
end