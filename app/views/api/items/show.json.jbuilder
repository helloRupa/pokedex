json.set! 'item' do
  json.extract! @item, :id, :pokemon_id, :happiness, :name, :price
  json.image_url asset_path(@item.image_url)
end