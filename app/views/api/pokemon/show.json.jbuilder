items = @pokemon.items

json.set! 'pokemon' do
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type, :image_url
  json.items_ids items.pluck(:id) 
end

json.set! 'items' do
  items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
    end
  end
end
