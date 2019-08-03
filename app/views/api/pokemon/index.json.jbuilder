@pokemon.each do |poke|
  url = %w[http:// https:// www.].any? {|pre| poke.image_url.start_with?(pre)} ? 
    poke.image_url : 
    asset_path('pokemon_snaps/' + poke.image_url)

  json.set! poke.id do
    json.extract! poke, :id, :name
    json.image_url url
  end
end
