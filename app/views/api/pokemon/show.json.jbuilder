items = @pokemon.items
url = %w[http:// https:// www.].any? {|pre| @pokemon.image_url.start_with?(pre)} ? 
    @pokemon.image_url : 
    asset_path('pokemon_snaps/' + @pokemon.image_url)

json.set! 'pokemon' do
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type
  json.image_url url
  json.items_ids items.pluck(:id) 
end

json.set! 'items' do
  items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness
      json.image_url asset_path(item.image_url)
    end
  end
end
