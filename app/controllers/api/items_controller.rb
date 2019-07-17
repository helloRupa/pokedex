class ItemsController < ApplicationController
  def create
    @item = Item.new(item_params)

    if @item.save
      render :show
    else
      render json: @item.errors.full_messages, status: 422
    end
  end

  private

  def item_params
    params.require(:item).permit(:pokemon_id, :happiness, :image_url, :name, :price)
  end
end